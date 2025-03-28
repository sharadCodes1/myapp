import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import '../componentsstyle/Main.css'
import vid from '../bgvideo.mp4'
import SearchSection from './SearchSection'
import Destinations from './Destinations'

// Import packages data
const packages = [
  {
    id: 1,
    name: "Heritage Explorer",
    duration: "7 Days",
    price: 45000,
    destinations: ["Agra", "Jaipur", "Delhi"],
    includes: [
      "Luxury Hotel Stays",
      "Private Transportation",
      "Professional Guide",
      "Breakfast & Dinner",
      "Monument Entry Fees",
      "Airport Transfers"
    ],
    highlights: [
      "Taj Mahal Sunrise Tour",
      "Amber Fort Elephant Ride",
      "Food Walking Tour",
      "Cultural Shows"
    ],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500"
  },
  {
    id: 2,
    name: "Beach Paradise",
    duration: "5 Days",
    price: 35000,
    destinations: ["Goa", "Mumbai"],
    includes: [
      "Beach Resort Stay",
      "Water Sports Activities",
      "Party Passes",
      "Breakfast",
      "Airport Transfers",
      "Cruise Dinner"
    ],
    highlights: [
      "Sunset Cruise",
      "Water Sports Package",
      "Beach Parties",
      "Heritage Walk"
    ],
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=500"
  },
  {
    id: 3,
    name: "Mountain Retreat",
    duration: "6 Days",
    price: 40000,
    destinations: ["Ladakh", "Manali"],
    includes: [
      "Boutique Hotels & Camps",
      "4x4 Vehicle",
      "Adventure Activities",
      "All Meals",
      "Permits",
      "Oxygen Support"
    ],
    highlights: [
      "Pangong Lake Camping",
      "Monastery Visit",
      "Mountain Biking",
      "Local Home Stay"
    ],
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=500"
  },
  {
    id: 4,
    name: "Spiritual Journey",
    duration: "8 Days",
    price: 38000,
    destinations: ["Varanasi", "Rishikesh", "Haridwar"],
    includes: [
      "Heritage Hotel Stay",
      "Meditation Sessions",
      "Yoga Classes",
      "Vegetarian Meals",
      "River Ceremonies",
      "Local Guide"
    ],
    highlights: [
      "Ganga Aarti",
      "Meditation Retreat",
      "Temple Tours",
      "Spiritual Guidance"
    ],
    image: "https://images.unsplash.com/photo-1595815771614-ade9d346a975?w=500"
  },
  {
    id: 5,
    name: "Kerala Backwaters",
    duration: "6 Days",
    price: 42000,
    destinations: ["Kochi", "Munnar", "Alleppey", "Kerala"],
    includes: [
      "Houseboat Stay",
      "Resort Accommodation",
      "All Meals",
      "Private Transfers",
      "Ayurvedic Massage",
      "Cultural Shows"
    ],
    highlights: [
      "Backwater Cruise",
      "Tea Plantation Visit",
      "Kathakali Performance",
      "Spice Garden Tour"
    ],
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80"
  }
];

const Main = () => {
  return (
    <div className="main">
      <div className="hero-section">
        <video src={vid} muted autoPlay loop type="video/mp4"></video>
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world's most beautiful destinations with us</p>
        </div>
      </div>
      <SearchSection packages={packages} />
      <Destinations />
    </div>
  )
}

export default Main
