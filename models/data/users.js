import 'dotenv/config.js'
import '../../config/database.js'
import User from '../User.js';

let users = [{
    firstName: "Ignacio",
    lastName: "Borraz",
    mail: "igna@mh.com",
    photo: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
    password: "Hola1234",
    country: "Argentina"
},{
    firstName: "Cinthia",
    lastName: "Di Risio",
    mail: "cin@mh.com",
    photo: "https://static.wikia.nocookie.net/fma/images/2/26/MouthyMei.JPG/revision/latest?cb=20111223205242&path-prefix=es",
    password: "Hola1234",
    country: "Argentina"
},{
    firstName: "Franco",
    lastName: "Sosa",
    mail: "fran@mh.com",
    photo: "https://i.pinimg.com/originals/42/04/77/4204771e1c54c2b9afa36f668261e7bd.gif",
    password: "Hola1234",
    country: "Argentina"
}];

User.insertMany(users)