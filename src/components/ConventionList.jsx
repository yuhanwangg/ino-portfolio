import React, { useState } from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import "./ConventionList.css";

const ConventionList = ({ events }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="con-schedule">
            <h3 className="schedule-title font-lora">Upcoming Conventions</h3>
            <p className="schedule-description font-lora">Click the cards to see a map of where I'll be tabling!</p>
            <div className="event-grid">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="event-card font-inter"
                        onClick={() => setSelectedImage(event.image)}
                    >
                        <h4 class>{event.title}</h4>

                        <p className="event-meta">
                            <FaCalendar /> {event.date}
                        </p>

                        <p className="event-meta">
                            <FaMapMarkerAlt /> {event.table}
                        </p>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div
                    className="image-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Convention"
                        className="modal-image"
                    />
                </div>
            )}
        </div>
    );
};

export default ConventionList;