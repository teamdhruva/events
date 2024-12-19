import React from 'react';
import '../styles/StargazingEvent.css'; // Import the CSS file for styling
import { events } from '../data/data';
import { useNavigate } from "react-router-dom";

const StargazingEvent = () => {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate("/");
      };
    const sortedEvents = events.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="stargazing-page">
             <div className="stargazing-page-banner">
                <h1>STARGAZING EVENTS</h1>
                <p>Explore the wonders of the night sky with our exclusive stargazing events!</p>
            </div>
            <button className="return-button" onClick={handleReturn}>Return to Home</button> 
            <div className="StargazingEvent-container">
                {sortedEvents.map((event, index) => (
                   <div
                   key={index}
                   className={`StargazingEvent-card ${event.status ? 'expandable' : ''}`}
               >
                   <div className="StargazingEvent-card-image">
                       <img src={event.image} alt={event.title} />
                   </div>
                   <div className="StargazingEvent-card-details">
                       {event.status && <span className="status-indicator">🔴 Upcoming</span>}
                       <h3 className="StargazingEvent-title">{event.title}</h3>
                       <p className="StargazingEvent-description">
                           {event.description} 
                           {event.link && (
                               <a
                                   href={event.link}
                                   className="stargazing-event-card"
                                   target="_blank"
                                   rel="noreferrer"
                               >
                                   Watch
                               </a>
                           )}
                       </p>
                       <p className="StargazingEvent-date">{event.date}</p>
                   </div>
               </div>               
                ))}
            </div>
        </div>
    );
};

export default StargazingEvent;
