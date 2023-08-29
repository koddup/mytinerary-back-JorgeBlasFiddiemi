import { Schema, model } from "mongoose";

let schema = new Schema({
    cityID: { type: Schema.Types.ObjectId, ref: 'City' },
    postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    picture: { type: String, required: true, default: '' },
    name: { type: String, required: true, default: '' },
    price: { type: Number, required: true, default: 0 },
    duration: { type: Number, required: true, default: 0 },
    likes: { type: Number, required: true, default: 0 },
    tags: { type : Array , default: [] },
}, {
    timestamps: true
})

let Itinerary = model('itineraries', schema)
export default Itinerary