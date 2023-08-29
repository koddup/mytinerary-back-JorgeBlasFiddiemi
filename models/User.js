import { Schema, model } from "mongoose";

let schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true },
    photo: { type: String, required: false },
    password: { type: String, required: true },
    country: { type: String, required: true },
}, {
    timestamps: true
})

let User = model('users', schema)
export default User