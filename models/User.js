import { Schema, model } from "mongoose";

let schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true },
    photo: { type: String, default: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png" },
    password: { type: String, required: true },
    country: { type: String, required: true },
}, {
    timestamps: true
})

let User = model('users', schema)
export default User