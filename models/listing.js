import mongoose from "mongoose";
const Schema=mongoose.Schema;
const venueSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
          },
          location: {
            type: String,
            required: true,
            trim: true
          },
          pricePerHour: {
            type: Number,
            required: true
          },
          images: [{
            type: String,
            required: true,
            set:(v)=>v===""?"https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v":v,
          }],
          amenities: [{
            type: String,
            enum: ['WiFi', 'Catering', 'Sound System', 'Projector', 'Outdoor Space', 'Bar Service', 'Air Conditioning', 'Decor Services', 'Private Dock', 'Parking', 'Wheelchair Accessible'],
            required: true
          }],
          capacity: {
            type: Number,
            required: true
          },
          rating: {
            type: Number,
            min: 1,
            max: 5,
            default: 5
          },
          description: {
            type: String,
            trim: true
          },
          createdAt: {
            type: Date,
            default: Date.now
          }
    }
)
const Venue =mongoose.model("Venue",venueSchema)
export default Venue;