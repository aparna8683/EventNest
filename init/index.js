import mongoose from "mongoose";
import {modules} from './data.js'
import Venue from "../models/listing.js";
mongoose.connect('mongodb://127.0.0.1:27017/eventNest')
  .then(() => {
    console.log("Connected TO DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB:", err);
  });
const initDB=async()=>{
     await Venue.deleteMany({});
     await Venue.insertMany(modules.data)
     console.log("Data was initialized")
}
initDB()
