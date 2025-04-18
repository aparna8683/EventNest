import express from 'express'
import mongoose from 'mongoose'
const app=express();
const port=8080;
import Venue from './models/listing.js';
import path from 'path'
import ejsMate from 'ejs-mate'; // or const ejsMate = require('ejs-mate');

 app.use(express.urlencoded({ extended: true }));
 import methodoverride from 'method-override'
 const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


import { fileURLToPath } from 'url'; // Required to emulate __dirname in ES6

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/eventNest');
//     main.then(()=>{
//         console.log("Connected TO DB").catch((err)=>{
//             console.log(err);
//         })
//     })
  
//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
//   }
app.engine('ejs',ejsMate);

app.use(methodoverride("_method"));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"/public")));


 app.set("views",path.join(__dirname,"/views"));
mongoose.connect('mongodb://127.0.0.1:27017/eventNest')
  .then(() => {
    console.log("Connected TO DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB:", err);
  });


app.listen(port,(req,res)=>{
    console.log("App is working")
})
app.get("/",(req,res)=>{
    res.send("Hello world")
})
// app.get("/testVenue", (req, res) => {
//     let sampleVenue = new Venue({
//       name: "Sample Venue",
//       location: "Sample City",
//       pricePerHour: 2500,
//       images: [
//         "https://example.com/sample-venue1.jpg",
//         "https://example.com/sample-venue2.jpg"
//       ],
//       amenities: [
//         "WiFi",
//         "Catering",
//         "Sound System"
//       ],
//       capacity: 100,
//       rating: 4.5
//     });
  
//     sampleVenue.save()
//       .then((venue) => {
//         res.send(venue);
//       })
//       .catch((err) => {
//         res.status(500).send("Error saving venue: " + err);
//       });
//   });

  app.get("/venues",async(req,res)=>{

         const allVenues=await Venue.find({});
         res.render("venues/index",{allVenues})
      })
      app.get("/venues/new",(req,res)=>{
        res.render("venues/new.ejs")
    })
      //show route
      app.get("/venues/:id",async (req,res)=>{
        let {id}=req.params;
      const venue = await Venue.findById(id)
      res.render("venues/show.ejs",{venue})
      })
      //create route
      app.post("/venues",async (req,res)=>{
        // let {name,location,pricePerHour,images,amenities,capacity,rating}=req.body
        let venue=req.body.venue;
        const newVenue=new Venue(venue)
        // console.log(venue)
       await newVenue.save()
       res.redirect("/venues")

      })
      //Edit route
      app.get("/venues/:id/edit",async (req,res)=>{
        let {id}=req.params;
        const venue=await Venue.findById(id)
        res.render("venues/edit.ejs",{venue})

      })
      //update route
      app.put("/venues/:id",async (req,res)=>{
        let {id}=req.params;
        await Venue.findByIdAndUpdate(id,{...req.body.venue})
    res.redirect(`/venues/${id}`)})
    //delete route
    app.delete("/venues/:id",async (req,res)=>{
        let {id}=req.params;
        let deletedVenue= await Venue.findByIdAndDelete(id)
        console.log(deletedVenue)
        res.redirect("/venues")}
    )
  
  
