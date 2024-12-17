import React from "react";
import "../styles/MainPage.css";
import { event } from "../data/data";
const MainPage = () => {
const events=event;
  return (
    <div className="main-page">
      <header className="main-page-banner">
        <h1>Astronomy Events</h1>
        <p>Explore the wonders of the universe with us!</p>
      </header>
      <section className="events-container">
        {events.map((event) => (
          <a
            key={event.id}
            href={event.link}
            rel="noopener noreferrer"
            className="event-card"
          >
            <img src={event.image} alt={event.title} className="card-image" />
            <div className="card-content">
              <h3>{event.title}</h3>
              <h4 className="card-subtitle">{event.subtitle}</h4>
              <p>Click to know more!</p>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};

export default MainPage;
