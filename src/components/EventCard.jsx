

import React, { useState } from 'react';


// Component
function EventCard({ event, onSelect }) {
  // State
  const [isActive, setIsActive] = useState(false);

  // Handler
  const handleClick = () => {
    setIsActive(!isActive);
    onSelect(event); // Pass the event to onSelect
  };

  return (
    <div
      className={`event-card ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {/* Image */}
      <img
        src={event.image}
        alt={event.name}
        className="event-image"
      />

      {/* Name */}
      <div className="card-body">
        <h2 className="card-title">{event.name}</h2>
        <p className="card-date">{event.date}</p>
        <p className="card-location">{event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
