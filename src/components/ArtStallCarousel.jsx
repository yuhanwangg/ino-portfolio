import React, { useMemo, useRef } from 'react';
import { FaCalendar } from "react-icons/fa";
import './ArtStallCarousel.css';

const ArtStallCarousel = ({ events, expandedCard, setExpandedCard }) => {
    const carouselRef = useRef(null);

    const sortedEvents = useMemo(() => {
        return [...events].sort((a, b) => b.id - a.id);
    }, [events]);

    const featuredEventId = sortedEvents[0]?.id;

    const scroll = (direction) => {
        const container = carouselRef.current;
        if (!container) return;

        const cardWidth = 340;

        container.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="carousel-wrapper">
            <button className="carousel-btn left" onClick={() => scroll('left')}>
                ‹
            </button>

            <div className="art-stall-carousel" ref={carouselRef}>
                {sortedEvents.map((event) => {
                    const isExpanded = expandedCard === event.id;
                    const isFeatured = event.id === featuredEventId;

                    return (
                        <div
                            key={event.id}
                            className={`art-stall-card ${isFeatured ? 'featured' : ''}`}
                        >
                            {isFeatured && (
                                <div className="featured-badge">Recent Event</div>
                            )}

                            <img src={event.image} alt={event.title} />

                            <div className="art-stall-card-content">
                                <h4 className="font-lora">{event.title}</h4>

                                <p className="event-meta font-lora">
                                    <FaCalendar /> {event.date}
                                </p>

                                <p className="font-lora">
                                    {isExpanded ? event.full : event.preview}
                                </p>

                                <button
                                    className="read-more-btn font-lora"
                                    onClick={() =>
                                        setExpandedCard((prev) =>
                                            prev === event.id ? null : event.id
                                        )
                                    }
                                >
                                    {isExpanded ? 'Read Less —' : 'Read More +'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="carousel-btn right" onClick={() => scroll('right')}>
                ›
            </button>
        </div>
    );
};

export default ArtStallCarousel;