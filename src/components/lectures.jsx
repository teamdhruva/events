import React from "react";
import "../styles/Lectures.css";
import { lectures } from "../data/data";
import { useNavigate } from "react-router-dom";

const Lectures = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  return (
    <div className="lectures-page">
      <div className="lectures-page-banner">
        <h1>LECTURES</h1>
        <p>Stay updated with our upcoming lectures on astronomy and space science.</p>
      </div>
      <button className="return-button" onClick={handleReturn}>Return to Home</button>
      <div className="lectures-container">
        {lectures.map((lecture) => (
          <div className="lectures-card" key={lecture.id}>
            <div className="lectures-card-image">
              <img src={lecture.image} alt={lecture.title} />
            </div>
            <div className="lectures-card-details">
              <h2 className="lectures-title">{lecture.title}</h2>
              <p className="lectures-description">{lecture.description}</p>
              <p className="lectures-date">{lecture.date}</p>
              <h4 className="lectures-speaker">
                Speaker:{" "}
                <a
                  href={lecture.speakerWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lectures-speaker-link"
                >
                  {lecture.speaker}
                </a>
              </h4>
              <a
                href={lecture.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lectures-link"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lectures;
