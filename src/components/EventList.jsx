import React, { useState } from 'react';
import EventCard from './EventCard';
import SearchBar from './SearchBar';
import { mockEvents } from '../data/mockData';

// Component
function EventList({ onSelectEvent }) {
  // State
  const [searchTerm, setSearchTerm] = useState('');

  // Filter
  const filteredEvents = mockEvents.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search */}
      <SearchBar onSearch={setSearchTerm} />
      
      {/* List */}
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onSelect={() => onSelectEvent(event)} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
