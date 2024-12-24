import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  states = [
    {
      id: 1,
      image: "pexels-uwc12-574313.jpg",
      title: "Punjab",
      description: "Known for its rich culture, golden fields, and historical landmarks like the Golden Temple.",
      p1: "Punjab is known for its rich culture, vibrant traditions, and golden fields. It's a land that has a deep historical significance, with landmarks like the Golden Temple, the holiest shrine of Sikhism, being a central attraction.",
      p2: "The state's rural charm, combined with its bustling cities, makes it a unique blend of tradition and modernity.",
      p3: "Punjab offers a unique mix of heritage and modernity, making it a great destination for cultural exploration.",
      h1: "Discover Punjab",
      h2: "Golden Fields & Heritage"
    },
    {
      id: 2,
      image: "pexels-axp-photography-500641970-19149595.jpg",
      title: "Rajasthan",
      description: "Famous for its palaces, forts, deserts, and vibrant festivals.",
      p1: "Rajasthan, a land of kings, is famous for its stunning palaces, majestic forts, and vast deserts. The vibrant festivals, royal architecture, and rich cultural heritage make it a must-visit destination in India.",
      p2: "The state's cities like Jaipur, Udaipur, and Jodhpur showcase grand palaces and forts that are architectural marvels.",
      p3: "Rajasthan's palaces and forts tell stories of royal glory and timeless history.",
      h1: "Explore Rajasthan",
      h2: "Palaces, Deserts & Culture"
    },
    {
      id: 3,
      image: "851697-3840x2160-desktop-4k-kerala-background.jpg",
      title: "Kerala",
      description: "Known for its serene backwaters, rich wildlife, and Ayurvedic healing traditions.",
      p1: "Kerala, known as 'God's Own Country', is renowned for its serene backwaters, lush landscapes, and abundant wildlife. The state's Ayurvedic healing traditions attract wellness tourists from around the world.",
      p2: "Kerala's culture, with its classical dance forms like Kathakali and Mohiniyattam, adds to the state's unique identity.",
      p3: "With its backwaters and healing traditions, Kerala is the ultimate escape to tranquility.",
      h1: "Discover Kerala",
      h2: "Backwaters & Ayurveda"
    },
    {
      id: 4,
      image: "pexels-asadphoto-457882.jpg",
      title: "Goa",
      description: "Renowned for its beautiful beaches, nightlife, and Portuguese heritage.",
      p1: "Goa is renowned for its picturesque beaches, vibrant nightlife, and Portuguese colonial architecture. A perfect blend of relaxation and adventure, it attracts tourists from all over the world.",
      p2: "The state's rich cultural mix, scenic views, and historic forts provide a unique atmosphere for both relaxation and exploration.",
      p3: "Goa offers the best of both worlds – relaxation on its beaches and excitement in its nightlife.",
      h1: "Explore Goa",
      h2: "Beaches, Culture & Nightlife"
    },
    {
      id: 5,
      image: "brihadishvara-2358280_1920.jpg",
      title: "Tamil Nadu",
      description: "Famous for its temples, classical dance, and historic architecture.",
      p1: "Tamil Nadu, located in the southernmost part of India, is famous for its ancient temples, classical dance forms, and historical architecture. The state's rich culture and heritage can be witnessed in its grand temples and festivals.",
      p2: "Chennai, the capital city, is a major hub for classical music and dance, while cities like Madurai and Thanjavur are home to some of India's most iconic temples.",
      p3: "Tamil Nadu is a land of vibrant culture, where ancient temples and classical arts reign supreme.",
      h1: "Discover Tamil Nadu",
      h2: "Temples & Classical Arts"
    },
    {
      id: 6,
      image: "lion-point-6582528_1920.jpg",
      title: "Maharashtra",
      description: "Known for Mumbai (Bollywood), beautiful hill stations, and historic caves like Elephanta and Ajanta.",
      p1: "Maharashtra, the state that houses Mumbai – the financial capital of India – is known for its cosmopolitan lifestyle, hill stations, and historical landmarks. Mumbai, the heart of the Indian film industry (Bollywood), is the state's largest city.",
      p2: "Maharashtra is also home to ancient caves like Ajanta and Ellora, and hill stations like Mahabaleshwar that offer a scenic retreat.",
      p3: "Maharashtra blends modernity and history, offering both cosmopolitan cities and timeless monuments.",
      h1: "Explore Maharashtra",
      h2: "Mumbai, Caves & Hill Stations"
    },
    {
      id: 7,
      image: "pexels-maahidphotos-3881104.jpg",
      title: "Uttar Pradesh",
      description: "Home to the Taj Mahal, vibrant festivals, and rich Mughal history.",
      p1: "Uttar Pradesh is home to one of the Seven Wonders of the World, the Taj Mahal. The state is rich in Mughal history, vibrant festivals, and sacred sites like Varanasi, one of the oldest cities in the world.",
      p2: "The Taj Mahal in Agra is one of the most iconic monuments, while cities like Lucknow are famous for their Nawabi culture and hospitality.",
      p3: "Uttar Pradesh’s heritage, exemplified by the Taj Mahal, is a testament to India's grand history.",
      h1: "Discover Uttar Pradesh",
      h2: "Taj Mahal & Mughal Heritage"
    },
    {
      id: 8,
      image: "pexels-suketdedhia-570026.jpg",
      title: "Himachal Pradesh",
      description: "Known for its stunning mountains, hill stations like Shimla, and outdoor adventure activities.",
      p1: "Himachal Pradesh is known for its stunning mountain landscapes, tranquil hill stations, and outdoor adventure opportunities. It’s a paradise for trekkers and nature lovers.",
      p2: "Shimla, Manali, and Dharamshala are popular hill stations that provide picturesque views, while the state also offers a rich cultural heritage and historical sites.",
      p3: "Himachal Pradesh is an adventurer's dream with breathtaking views and outdoor activities.",
      h1: "Explore Himachal Pradesh",
      h2: "Mountains & Adventure"
    }
  ];
  
  

  cardsStates=[
    {
      id: 1,
      image: "pexels-uwc12-574313.jpg",
      title: "Punjab",
      description: "Known for its rich culture, golden fields, and historical landmarks like the Golden Temple.",
      page: "/Punjab"
    },
    {
      id: 2,
      image: "pexels-axp-photography-500641970-19149595.jpg",
      title: "Rajasthan",
      description: "Famous for its palaces, forts, deserts, and vibrant festivals.",
      page: "/Rajasthan"
    },
    {
      id: 3,
      image: "4.jpg",
      title: "Kerala",
      description: "Known for its serene backwaters, rich wildlife, and Ayurvedic healing traditions.",
      page: "/kerala"
    },
    {
      id: 4,
      image: "5.jpg",
      title: "Goa",
      description: "Renowned for its beautiful beaches, nightlife, and Portuguese heritage.",
      page: "/Goa"
    },
    {
      id: 5,
      image: "6.jpg",
      title: "Tamil Nadu",
      description: "Famous for its temples, classical dance, and historic architecture.",
      page: "/Tamil_Nadu"
    },
    {
      id: 6,
      image: "7.jpg",
      title: "Maharashtra",
      description: "Known for Mumbai (Bollywood), beautiful hill stations, and historic caves like Elephanta and Ajanta.",
      page: "/Maharashtra"
    },
    {
      id: 7,
      image: "pexels-maahidphotos-3881104.jpg",
      title: "Uttar Pradesh",
      description: "Home to the Taj Mahal, vibrant festivals, and rich Mughal history.",
      page: "/UP"
    },
    {
      id: 8,
      image: "pexels-suketdedhia-570026.jpg",
      title: "Himachal Pradesh",
      description: "Known for its stunning mountains, hill stations like Shimla, and outdoor adventure activities.",
      page: "/Himachal"
    }
  ]


  constructor() { 
  }

  getStaes(){
    return this.cardsStates;
  }

  getStatesById(id:any){
    return this.states.find(state => state.id == Number(id));
  }
}
