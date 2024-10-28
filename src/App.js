import React, { useState } from 'react';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import './App.css';

// Component
function App() {
  // State
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="App">
      <p className='eventspot'>EventSpot Lite</p>
      
      {/* Event List */}
      <EventList onSelectEvent={setSelectedEvent} />
      
      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default App;
