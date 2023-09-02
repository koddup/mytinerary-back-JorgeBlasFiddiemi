import 'dotenv/config.js'
import '../../config/database.js'
import Itinerary from '../Itinerary.js';

let itineraries = [
        {
            "_id": "64f25aecfd1a3e3895a8231f",
            "cityID": "64ee68b04063bb7bf8441f89",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg",
            "name": "Exploring the Heart of the City",
            "price": 3,
            "duration": 24,
            "likes": 25,
            "tags": [
                "Adventure",
                "Culture",
                "Food"
            ],
        },
        {
            "_id": "64f25b36fd1a3e3895a82323",
            "cityID": "64ee68b04063bb7bf8441f89",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://fotografias.lasexta.com/clipping/cmsimages02/2023/05/02/A9162939-BD1C-4D54-8831-3397C26F48C9/its-time-for-culture-nueva-york_94.jpg?crop=3000,1688,x0,y158&width=800&height=450&optimize=high&format=webply",
            "name": "Cultural NYC",
            "price": 4,
            "duration": 48,
            "likes": 30,
            "tags": [
                "Culture",
                "Art",
                "Gastronomy"
            ],
        },
        {
            "_id": "64f25b4efd1a3e3895a82325",
            "cityID": "64ee68b04063bb7bf8441f89",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "https://imgcap.capturetheatlas.com/wp-content/uploads/2022/01/american-dream-mall-new-york-with-kids.jpg",
            "name": "Family Fun in NYC",
            "price": 2,
            "duration": 12,
            "likes": 15,
            "tags": [
                "Family",
                "Entertainment",
                "Food"
            ],
        },
        {
            "_id": "64f25b7efd1a3e3895a82327",
            "cityID": "64ee68b04063bb7bf8441f8a",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://static.wixstatic.com/media/1d5bd9_7fbe7ab0f03c49e5b6f2f45cb5ecf271~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1d5bd9_7fbe7ab0f03c49e5b6f2f45cb5ecf271~mv2.jpg",
            "name": "Discovering Japanese Culture",
            "price": 4,
            "duration": 60,
            "likes": 40,
            "tags": [
                "Culture",
                "History",
                "Gastronomy"
            ],
        },
        {
            "_id": "64f25bb6fd1a3e3895a82332",
            "cityID": "64ee68b04063bb7bf8441f8a",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://boutiquejapan.com/wp-content/uploads/2016/11/Neon-Shibuya-crossing-Tokyo-Japan-1140x760.jpg",
            "name": "Nightlife in Tokyo",
            "price": 3,
            "duration": 36,
            "likes": 20,
            "tags": [
                "Nightlife",
                "Entertainment",
                "Gastronomy"
            ],
        },
        {
            "_id": "64f25bc9fd1a3e3895a82334",
            "cityID": "64ee68b04063bb7bf8441f8a",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "https://blog.japanwondertravel.com/wp-content/uploads/2020/01/thor-alvis-A57akxc-4BQ-unsplash-1200x800.jpg",
            "name": "Exploring Nature in Tokyo",
            "price": 2,
            "duration": 24,
            "likes": 10,
            "tags": [
                "Nature",
                "Gardens",
                "Food"
            ],
        },
        {
            "_id": "64f25be7fd1a3e3895a82336",
            "cityID": "64ee68b04063bb7bf8441f8b",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/72/3e/59/caption.jpg?w=500&h=400&s=1",
            "name": "Cultural Exploration in London",
            "price": 4,
            "duration": 48,
            "likes": 35,
            "tags": [
                "Culture",
                "Art",
                "Gastronomy"
            ],
        },
        {
            "_id": "64f25bf9fd1a3e3895a82338",
            "cityID": "64ee68b04063bb7bf8441f8b",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://www.cuddlynest.com/blog/wp-content/uploads/2023/02/best-london-neighborhoods-notting-hill-1030x713.jpg",
            "name": "Exploring Historic Neighborhoods",
            "price": 3,
            "duration": 36,
            "likes": 25,
            "tags": [
                "History",
                "Culture",
                "Shopping"
            ],
        },
        {
            "_id": "64f25c10fd1a3e3895a8233a",
            "cityID": "64ee68b04063bb7bf8441f8b",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/81/90.jpg",
            "name": "Strolling through London Parks",
            "price": 2,
            "duration": 24,
            "likes": 15,
            "tags": [
                "Nature",
                "Parks",
                "Relaxation"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8233f",
            "cityID": "64ee68b04063bb7bf8441f8c",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://www.travelescape.in/wp-content/uploads/2020/10/eiffel-tower-Paris.jpg",
            "name": "Exploring the City of Love",
            "price": 4,
            "duration": 48,
            "likes": 30,
            "tags": [
                "Romance",
                "Culture",
                "Gastronomy"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82340",
            "cityID": "64ee68b04063bb7bf8441f8c",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://media.tacdn.com/media/attractions-splice-spp-360x240/11/d4/2d/42.jpg",
            "name": "Art and History Tour in Paris",
            "price": 3,
            "duration": 36,
            "likes": 25,
            "tags": [
                "Art",
                "History",
                "Cuisine"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82341",
            "cityID": "64ee68b04063bb7bf8441f8c",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Cover1.jpg",
            "name": "Parisian Fashion and Shopping",
            "price": 5,
            "duration": 72,
            "likes": 40,
            "tags": [
                "Fashion",
                "Shopping",
                "Cafes"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82342",
            "cityID": "64ee68b04063bb7bf8441f8d",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/4e/03/10.jpg",
            "name": "Historical Exploration of Beijing",
            "price": 3,
            "duration": 48,
            "likes": 30,
            "tags": [
                "History",
                "Culture",
                "Cuisine"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82343",
            "cityID": "64ee68b04063bb7bf8441f8d",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://www.traveldepartment.com/media/3772/discover-shanghai.jpg?anchor=center&mode=crop&width=480&height=318&rnd=132325815700000000",
            "name": "Modern Beijing Adventures",
            "price": 4,
            "duration": 60,
            "likes": 35,
            "tags": [
                "Modern",
                "Entertainment",
                "Shopping"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82344",
            "cityID": "64ee68b04063bb7bf8441f8d",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "image_url",
            "name": "Culinary Delights of Beijing",
            "price": 2,
            "duration": 24,
            "likes": 20,
            "tags": [
                "Cuisine",
                "Food",
                "Market"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82345",
            "cityID": "64ee68b04063bb7bf8441f8e",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://static.toiimg.com/thumb/msid-83890076,width-748,height-499,resizemode=4,imgsize-824632/.jpg",
            "name": "Historical Moscow Tour",
            "price": 4,
            "duration": 48,
            "likes": 30,
            "tags": [
                "History",
                "Culture",
                "Architecture"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82346",
            "cityID": "64ee68b04063bb7bf8441f8e",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/OG4.jpg",
            "name": "Nightlife in Moscow",
            "price": 3,
            "duration": 36,
            "likes": 25,
            "tags": [
                "Nightlife",
                "Entertainment",
                "Bars"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82347",
            "cityID": "64ee68b04063bb7bf8441f8e",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "https://www.travelallrussia.com/sites/travelallrussia.com/files/images/blog/russian%20cuisine-min.jpg",
            "name": "Russian Cuisine Experience",
            "price": 2,
            "duration": 24,
            "likes": 20,
            "tags": [
                "Cuisine",
                "Food",
                "Market"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82348",
            "cityID": "64ee68b04063bb7bf8441f8f",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://www.icarusjet.com/wp-content/uploads/2018/01/Discover-the-Wonders-of-Cairo-980x513.jpg",
            "name": "Historical Wonders of Cairo",
            "price": 3,
            "duration": 48,
            "likes": 30,
            "tags": [
                "History",
                "Culture",
                "Architecture"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82349",
            "cityID": "64ee68b04063bb7bf8441f8f",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d7/b7/8c.jpg",
            "name": "Cairo by Night",
            "price": 4,
            "duration": 36,
            "likes": 25,
            "tags": [
                "Nightlife",
                "Entertainment",
                "Shopping"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8234a",
            "cityID": "64ee68b04063bb7bf8441f8f",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "https://worldtravelfamily.com/wp-content/uploads/2019/12/hotel-and-restaurant-with-beer-near-pyramids-giza-cairo-01-720x509.jpg.webp",
            "name": "Egyptian Cuisine Adventure",
            "price": 2,
            "duration": 24,
            "likes": 20,
            "tags": [
                "Cuisine",
                "Food",
                "Market"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8234b",
            "cityID": "64ee68b04063bb7bf8441f90",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://www.iheartbrazil.com/wp-content/uploads/2020/05/leblon-beach-dois-irmaos-two-brothers-hill-rio-de-janeiro.jpg",
            "name": "Beach Paradise in Rio",
            "price": 4,
            "duration": 48,
            "likes": 30,
            "tags": [
                "Beach",
                "Entertainment",
                "Food"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8234c",
            "cityID": "64ee68b04063bb7bf8441f90",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/061109/061109_carnaval_hmed_5p.jpg",
            "name": "Rio Carnival Experience",
            "price": 5,
            "duration": 60,
            "likes": 40,
            "tags": [
                "Carnival",
                "Entertainment",
                "Food"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8234d",
            "cityID": "64ee68b04063bb7bf8441f90",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c5/49/ca/we-ll-explore-rio-s-amazing.jpg?w=1000&h=1000&s=1",
            "name": "Gastronomic Tour of Rio",
            "price": 3,
            "duration": 36,
            "likes": 25,
            "tags": [
                "Gastronomy",
                "Food",
                "Culture"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8234e",
            "cityID": "64ee68b04063bb7bf8441f91",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "https://img.rezdy.com/PRODUCT_IMAGE/5528/5b7b70ed0dd8430f9db39b57b2b97cdfharbour%20jet%20photo%202-2.jpg",
            "name": "Sydney Harbor Adventure",
            "price": 4,
            "duration": 48,
            "likes": 30,
            "tags": [
                "Adventure",
                "Harbor",
                "Nature"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8234f",
            "cityID": "64ee68b04063bb7bf8441f91",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "https://cdn.sydneycitytour.com.au/wp-content/uploads/2019/07/sydney-opera-house.jpg",
            "name": "Exploring the Sydney Opera House",
            "price": 3,
            "duration": 36,
            "likes": 25,
            "tags": [
                "Culture",
                "Music",
                "Architecture"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82350",
            "cityID": "64ee68b04063bb7bf8441f91",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "image_url",
            "name": "Coastal Delights of Sydney",
            "price": 2,
            "duration": 24,
            "likes": 20,
            "tags": [
                "Nature",
                "Beach",
                "Cuisine"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82351",
            "cityID": "64ee68b04063bb7bf8441f92",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "image_url",
            "name": "Mumbai Street Food Adventure",
            "price": 2,
            "duration": 24,
            "likes": 20,
            "tags": [
                "Cuisine",
                "Street Food",
                "Market"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82352",
            "cityID": "64ee68b04063bb7bf8441f92",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "image_url",
            "name": "Cultural Heritage of Mumbai",
            "price": 3,
            "duration": 36,
            "likes": 25,
            "tags": [
                "Culture",
                "History",
                "Art"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82353",
            "cityID": "64ee68b04063bb7bf8441f92",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "image_url",
            "name": "Mumbai Shopping Spree",
            "price": 4,
            "duration": 48,
            "likes": 30,
            "tags": [
                "Shopping",
                "Entertainment",
                "Fashion"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82354",
            "cityID": "64ee68b04063bb7bf8441f93",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "image_url",
            "name": "Historical Treasures of Istanbul",
            "price": 3,
            "duration": 48,
            "likes": 30,
            "tags": [
                "History",
                "Culture",
                "Architecture"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82355",
            "cityID": "64ee68b04063bb7bf8441f93",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "image_url",
            "name": "Bosphorus Cruise Adventure",
            "price": 4,
            "duration": 60,
            "likes": 35,
            "tags": [
                "Adventure",
                "Cruise",
                "Nature"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82356",
            "cityID": "64ee68b04063bb7bf8441f93",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "image_url",
            "name": "Istanbul Culinary Delights",
            "price": 2,
            "duration": 24,
            "likes": 20,
            "tags": [
                "Cuisine",
                "Food",
                "Market"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82357",
            "cityID": "64ee68b04063bb7bf8441f94",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "image_url",
            "name": "Roman History and Architecture",
            "price": 4,
            "duration": 48,
            "likes": 30,
            "tags": [
                "History",
                "Culture",
                "Architecture"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82358",
            "cityID": "64ee68b04063bb7bf8441f94",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "image_url",
            "name": "Romantic Getaway in Rome",
            "price": 3,
            "duration": 36,
            "likes": 25,
            "tags": [
                "Romance",
                "Culture",
                "Gastronomy"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a82359",
            "cityID": "64ee68b04063bb7bf8441f94",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "image_url",
            "name": "Rome's Hidden Gems",
            "price": 2,
            "duration": 24,
            "likes": 20,
            "tags": [
                "History",
                "Culture",
                "Hidden Spots"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8235a",
            "cityID": "64ee68b04063bb7bf8441f95",
            "postedBy": "64ee67b472847ac45d608bc8",
            "picture": "image_url",
            "name": "Hollywood Dreaming",
            "price": 4,
            "duration": 48,
            "likes": 30,
            "tags": [
                "Entertainment",
                "Film",
                "Nightlife"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8235b",
            "cityID": "64ee68b04063bb7bf8441f95",
            "postedBy": "64ee67b472847ac45d608bc9",
            "picture": "image_url",
            "name": "Beach Vibes in LA",
            "price": 3,
            "duration": 36,
            "likes": 25,
            "tags": [
                "Beach",
                "Entertainment",
                "Food"
            ],
        },
        {
            "_id": "64f25e8bfd1a3e3895a8235c",
            "cityID": "64ee68b04063bb7bf8441f95",
            "postedBy": "64ee67b472847ac45d608bca",
            "picture": "image_url",
            "name": "LA Food Truck Tour",
            "price": 2,
            "duration": 24,
            "likes": 20,
            "tags": [
                "Food",
                "Street Food",
                "Cuisine"
            ],
        }
    ]

Itinerary.insertMany(itineraries)