import { Schema, model } from "mongoose";

let schema = new Schema({
    email: { type: String, required:true},
    password: { type: String, required:true},
    name: { type: String, required:true},
    photo: { type: String, required:false},
    },{
        timestamps: true
})

let User = model('users', schema)
export default User