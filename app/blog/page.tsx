import React from 'react';

const Blog = () => {
  return (
    <div className="blogPage">
      <h1 className="pageTitle">How We Plan Your Perfect Travel Trips</h1>
      <div className="blogContent">
        <p className="introText">
          At [Your Website Name], we understand that travel is not just about visiting new places, but about creating unforgettable memories.
          Our expert team specializes in crafting personalized travel experiences that are tailored to your preferences and interests.
        </p>

        <h2 className="sectionTitle">Our Approach to Travel Planning</h2>
        <p className="sectionContent">
          Planning a trip can be overwhelming with so many options and details to consider. That’s where we come in. We take the time to understand your travel goals, whether it's an adventurous getaway, a relaxing retreat, or exploring a city’s culture. Our team of travel experts ensures every aspect is well-organized, from transportation to accommodation, so you can focus on enjoying your journey.
        </p>

        <h2 className="sectionTitle">Why Choose Us?</h2>
        <ul className="benefitsList">
          <li>Customized Itinerary: We create travel plans that cater to your unique interests and needs.</li>
          <li>Expert Advice: Our team has years of experience in the travel industry, ensuring quality recommendations.</li>
          <li>Stress-Free Planning: We handle all the logistics so you can relax and enjoy your trip.</li>
          <li>24/7 Support: We are available throughout your trip for any assistance you may need.</li>
        </ul>

        <h2 className="sectionTitle">Our Favorite Destinations</h2>
        <p className="sectionContent">
          From the bustling streets of Tokyo to the serene beaches of Bali, we have connections and insights to help you discover the best destinations. Here are a few of our top recommendations:
        </p>
        <ol className="destinationList">
          <li>Paris – The city of light, culture, and romance.</li>
          <li>Tokyo – A city blending traditional and modern vibes.</li>
          <li>New York – An energetic hub of diversity and opportunity.</li>
          <li>Sydney – Known for its stunning beaches and iconic landmarks.</li>
        </ol>

        <p className="closingText">
          Whether you’re looking for an adventure, relaxation, or cultural exploration, we’re here to help you plan the perfect trip. Reach out to us today and start your journey with confidence!
        </p>
      </div>
    </div>
  );
};

export default Blog;
