import React from 'react';

// Component
function EventModal({ event, onClose }) {
  // Check
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        
        {/* Name */}
        <h2>{event.name}</h2>
        
        {/* Image */}
        <img src={event.image} alt={event.name} className="event-image" />
        
        {/* Date */}
        <p><strong>Date:</strong> {event.date}</p>
        
        {/* Location */}
        <p><strong>Location:</strong> {event.location}</p>
        
        {/* Description */}
        <p><strong>Description:</strong> {event.description}</p>
      </div>
    </div>
  );
}

export default EventModal;
