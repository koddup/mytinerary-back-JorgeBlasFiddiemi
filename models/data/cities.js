import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js';

let cities = [
    {
        city: "New York City",
        country: "United States",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/New_york_times_square-terabass_%28cropped%29.jpg/1024px-New_york_times_square-terabass_%28cropped%29.jpg",
        population: 8804190
    },
    {
        city: "Tokyo",
        country: "Japan",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1920px-Skyscrapers_of_Shinjuku_2009_January.jpg",
        population: 14094034
    },
    {
        city: "London",
        country: "England",
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg",
        population: 8799800
    },
    {
        city: "Paris",
        country: "France",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1920px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        population: 2102650
    },
    {
        city: "Beijing",
        country: "China",
        photo: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Beijing-2.jpg",
        population: 21893095
    },
    {
        city: "Moscow",
        country: "Russia",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/1920px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg",
        population: 13010112
    },
    {
        city: "Cairo",
        country: "Egypt",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cairo_at_night_..jpg/1920px-Cairo_at_night_..jpg",
        population: 10100166
    },
    {
        city: "Rio de Janeiro",
        country: "Brazil",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/278px-Cidade_Maravilhosa.jpg",
        population: 6747815
    },
    {
        city: "Sydney",
        country: "Australia",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/1920px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg",
        population: 5259764
    },
    {
        city: "Mumbai",
        country: "India",
        photo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/BackBay_skyline.jpg",
        population: 17159000
    },
    {
        city: "Istanbul",
        country: "Turkey",
        photo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Aya_Sophia_%287144824757%29_%28cropped%29.jpg",
        population: 15569856
    },
    {
        city: "Rome",
        country: "Italy",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg",
        population: 2860009
    },
    {
        city: "Los Angeles",
        country: "United States",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/800px-Hollywood_Sign_%28Zuschnitt%29.jpg",
        population: 3898747
    },
    {
        city: "Bangkok",
        country: "Thailand",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/BKK-0972_%28cropped%29.JPG",
        population: 8305218
    },
    {
        city: "Dubai",
        country: "UAE",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Burj_Al_Arab_%40_Madinat_Jumeirah_%40_Dubai_%2815851725086%29.jpg/1280px-Burj_Al_Arab_%40_Madinat_Jumeirah_%40_Dubai_%2815851725086%29.jpg",
        population: 3564931
    }
];

City.insertMany(cities)