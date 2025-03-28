import React, { useEffect } from 'react'
import DestinationCard from './DestinationCard'
import '../componentsstyle/Destination.css'
import img from '../photos/taj-mahal-1379273_1280.jpg';
import img2 from '../photos/jaipur.webp';
import img3 from '../photos/goa.jpeg';
import img4 from '../photos/kerala.jpeg';
import img5 from '../photos/varanasi.jpeg';
import img6 from '../photos/ladakh.jpeg';

  
export default function Destination() {
  
  const locations = [
    {
      image : img,
      location: "Agra",
      state: "Uttar Pradesh",
      type: "Cultural Heritage",
      idealDays: 2,
      basePrice: 15000,
      description: "Agra, famed for the majestic Taj Mahal, mesmerizes with its Mughal splendor and cultural heritage.",
      touristSpots: [
        {
          name: "Taj Mahal",
          description: "UNESCO World Heritage site and one of the New Seven Wonders of the World, this ivory-white marble mausoleum is a masterpiece of Mughal architecture.",
          timings: "Sunrise to sunset (closed on Fridays)",
          entryFee: {
            indian: "₹250",
            foreign: "₹1300",
            guide: "₹1000/hour"
          }
        },
        {
          name: "Agra Fort",
          description: "UNESCO World Heritage site featuring red sandstone architecture, this 16th-century Mughal fortress and palace complex is a testament to Mughal grandeur.",
          timings: "6:00 AM to 6:00 PM daily",
          entryFee: {
            indian: "₹50",
            foreign: "₹650",
            guide: "₹800/hour"
          }
        },
        {
          name: "Fatehpur Sikri",
          description: "Former capital of the Mughal Empire, this red sandstone city features stunning architectural elements including Buland Darwaza and Jama Masjid.",
          timings: "6:00 AM to 6:00 PM daily",
          entryFee: {
            indian: "₹50",
            foreign: "₹610",
            guide: "₹900/hour"
          }
        }
      ]
    },
    {
      image : img2,
      location: "Jaipur",
      state: "Rajasthan",
      type: "Cultural Heritage",
      idealDays: 3,
      basePrice: 18000,
      description: "Known as the 'Pink City,' Jaipur boasts magnificent palaces, vibrant bazaars, and historic forts, offering a captivating blend of Rajputana grandeur and cultural richness.",
      touristSpots: [
        {
          name: "Amber Fort",
          description: "Majestic hilltop fortress combining Rajput and Mughal architecture, famous for its intricate mirror work and elephant rides.",
          timings: "8:00 AM to 5:30 PM daily",
          entryFee: {
            indian: "₹200",
            foreign: "₹1000",
            guide: "₹1200/hour",
            elephantRide: "₹1100/person"
          }
        },
        {
          name: "Hawa Mahal",
          description: "Five-story palace with 953 windows, designed to allow royal ladies to observe street festivities without being seen.",
          timings: "9:00 AM to 4:30 PM daily",
          entryFee: {
            indian: "₹50",
            foreign: "₹200",
            guide: "₹500/hour"
          }
        },
        {
          name: "City Palace",
          description: "Complex of courtyards, gardens, and buildings blending Rajasthani and Mughal architecture, still home to the royal family.",
          timings: "9:30 AM to 5:00 PM daily",
          entryFee: {
            indian: "₹200",
            foreign: "₹1000",
            guide: "₹900/hour"
          }
        }
      ]
    },
    {
      image : img3,
      location: "Goa",
      state: "Goa",
      type: "Relaxation",
      idealDays: 4,
      basePrice: 25000,
      description: "With its sun-kissed beaches, lively nightlife, and Portuguese heritage, Goa is a tropical paradise that beckons travelers to relax, indulge, and immerse themselves in its laid-back charm.",
      touristSpots: [
        {
          name: "Calangute Beach",
          description: "Known as the 'Queen of Beaches', popular for water sports and vibrant nightlife.",
          timings: "24/7 access",
          activities: {
            parasailing: "₹1500/person",
            jetSki: "₹1200/15min",
            bananBoat: "₹500/person"
          }
        },
        {
          name: "Basilica of Bom Jesus",
          description: "UNESCO World Heritage site housing the mortal remains of St. Francis Xavier, exemplary Portuguese colonial architecture.",
          timings: "9:00 AM to 6:30 PM daily",
          entryFee: {
            indian: "Free",
            foreign: "Free",
            guide: "₹600/hour"
          }
        },
        {
          name: "Fort Aguada",
          description: "17th-century Portuguese fort and lighthouse offering panoramic views of the Arabian Sea.",
          timings: "8:30 AM to 5:30 PM daily",
          entryFee: {
            indian: "₹50",
            foreign: "₹250",
            guide: "₹700/hour"
          }
        }
      ]
    },
  ];
  const locations2 = [
    {
      image : img4,
      location: "Kerala",
      state: "Kerala",
      type: "Relaxation",
      idealDays: 5,
      basePrice: 30000,
      description: "Dubbed 'God's Own Country,' Kerala enchants with its serene backwaters, lush greenery, and tranquil beaches, providing a rejuvenating retreat amidst nature's splendor.",
      touristSpots: [
        {
          name: "Alleppey Backwaters",
          description: "Network of lagoons, lakes, and canals parallel to the Arabian Sea coast, famous for houseboat cruises.",
          timings: "Best experienced during day time",
          activities: {
            houseboat: "₹8000/day",
            kayaking: "₹1500/hour",
            villageExperience: "₹2000/person"
          }
        },
        {
          name: "Munnar",
          description: "Hill station known for its tea plantations, rolling hills, and exotic flora and fauna.",
          timings: "Year-round destination",
          activities: {
            teaPlantationTour: "₹1000/person",
            trekking: "₹1500/person",
            spiceTour: "₹800/person"
          }
        },
        {
          name: "Varkala Beach",
          description: "Dramatic cliff-side beach offering spectacular views, water sports, and ayurvedic treatments.",
          timings: "24/7 access",
          activities: {
            ayurvedicMassage: "₹2500/session",
            surfingLesson: "₹1800/hour",
            yogaClass: "₹800/session"
          }
        }
      ]
    },
    {
      image : img5,
      location: "Varanasi",
      state: "Uttar Pradesh",
      type: "Cultural Heritage",
      idealDays: 2,
      basePrice: 12000,
      description: "The spiritual heart of India, Varanasi, exudes an aura of mysticism with its ancient ghats, sacred temples, and vibrant ceremonies along the holy Ganges River.",
      touristSpots: [
        {
          name: "Dashashwamedh Ghat",
          description: "Main ghat famous for its spectacular Ganga Aarti ceremony every evening.",
          timings: "Aarti timing: 6:45 PM to 7:30 PM daily",
          activities: {
            eveningAarti: "Free",
            boatRide: "₹500/person",
            guide: "₹800/hour"
          }
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1609766418204-94aae0ecf4e6?auto=format&fit=crop&q=80",
      location: "Ladakh",
      state: "Ladakh",
      type: "Adventure",
      idealDays: 7,
      basePrice: 35000,
      description: "Known as 'Little Tibet', Ladakh captivates with its high-altitude desert, ancient monasteries, and dramatic landscapes, offering a unique blend of adventure and cultural experiences.",
      touristSpots: [
        {
          name: "Pangong Lake",
          description: "Stunning high-altitude salt water lake known for its changing colors and dramatic mountain backdrop.",
          timings: "Best visited during daylight hours",
          activities: {
            camping: "₹3000/night",
            photography: "Free",
            guide: "₹2000/day"
          }
        },
        {
          name: "Leh Palace",
          description: "Nine-story palace dominating Leh's skyline, offering panoramic views and insights into Ladakhi architecture.",
          timings: "8:00 AM to 6:00 PM daily",
          entryFee: {
            indian: "₹100",
            foreign: "₹250",
            guide: "₹1000/hour"
          }
        },
        {
          name: "Nubra Valley",
          description: "High-altitude desert valley featuring sand dunes, monasteries, and double-humped camels.",
          timings: "Requires Inner Line Permit",
          activities: {
            camelSafari: "₹1000/person",
            monasteryTour: "₹1500/person",
            camping: "₹2500/night"
          }
        }
      ]
    }
  ]
  
  return (
    <div>
      <h1 style={{marginLeft: "100px"}}>Our Most Popular Destinations</h1>
      <div className='cardLine' >
        {locations.map((e)=>
            <DestinationCard image={e.image} location={e.location} state={e.state} type={e.type} idealDays={e.idealDays} description={e.description} touristSpots={e.touristSpots} basePrice={e.basePrice}/>
          
        )
      }
      </div>
      <div className='cardLine' >
        {locations2.map((e)=>
          <DestinationCard image={e.image} location={e.location} state={e.state} type={e.type} idealDays={e.idealDays} description={e.description} touristSpots={e.touristSpots} basePrice={e.basePrice}/>
        )
      }
      </div>
      
      

      

    </div>
  )
}
