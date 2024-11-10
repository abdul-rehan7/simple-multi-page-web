import React from 'react';

const destinations = [
  {
    name: "Paris",
    description: "The city of light, known for its art, fashion, and culture.",
    image: "/paris.jpg",
  },
  {
    name: "Tokyo",
    description: "A bustling metropolis blending traditional culture and modernity.",
    image: "/tokyo.jpg",
  },
  {
    name: "New York",
    description: "The city that never sleeps, full of energy and endless opportunities.",
    image: "/new-york.jpg",
  },
  {
    name: "Sydney",
    description: "A vibrant city with stunning beaches and iconic landmarks.",
    image: "/sydney.jpg",
  },
];

const Destinations = () => {
  return (
    <div className="destinationsPage">
      <h1 className="pageTitle">Explore Destinations</h1>
      <div className="destinationsContainer">
        {destinations.map((destination, index) => (
          <div key={index} className="destinationCard">
            <img src={destination.image} alt={destination.name} className="destinationImage" />
            <div className="cardContent">
              <h2 className="destinationName">{destination.name}</h2>
              <p className="destinationDescription">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
