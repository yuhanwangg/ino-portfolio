import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);
  const portfolioItems = [
    { id: 1, category: 'art', image: 'artworks/norway belvoedkv.jpg' },
    { id: 2, category: 'art', image: 'artworks/sanji cooking.png' },
    { id: 3, category: 'art', image: 'artworks/monster_trio.png' },
    { id: 4, category: 'art', image: 'artworks/batman.png' },
    { id: 5, category: 'art', image: 'artworks/bruce.png' },
    { id: 6, category: 'art', image: 'artworks/techno 10 million project.jpg' },
    { id: 7, category: 'art', image: 'artworks/sunkyu high school.jpg' },
    { id: 8, category: 'art', image: 'artworks/kris_and_frisk.jpg' },
    { id: 9, category: 'art', image: 'artworks/gym_sesh.png' },
    { id: 10, category: 'art', image: 'artworks/dante_all_three.png' },
    { id: 11, category: 'art', image: 'artworks/dante_vergil.jpg' },
    { id: 12, category: 'art', image: 'artworks/KAKYOINN.jpg' },
    { id: 13, category: 'art', image: 'artworks/alley.png' },
    { id: 14, category: 'art', image: 'artworks/hongice yeee.jpg' },
    { id: 15, category: 'art', image: 'artworks/INK AND ERROR.jpg' },
    { id: 16, category: 'art', image: 'artworks/hongice yeee.jpg' },

    { id: 17, category: 'stickers', image: 'artworks/frieren.png' },
    { id: 18, category: 'stickers', image: 'artworks/jjk.png' },
    { id: 19, category: 'stickers', image: 'artworks/kny.png' },

    { id: 20, category: 'keychains', image: 'artworks/sans_keychain.png' },
    { id: 21, category: 'keychains', image: 'artworks/frisk_keychain.png' },
    { id: 22, category: 'keychains', image: 'artworks/gekko_keychain.png' },
    { id: 23, category: 'keychains', image: 'artworks/jett_keychain.png' },

    { id: 24, category: 'stickers', image: 'artworks/fun_gang_sheet.png' },
    { id: 25, category: 'stickers', image: 'artworks/tenna_sheet.png' },
    { id: 26, category: 'stickers', image: 'artworks/susie_frisk_car.png' },
    { id: 27, category: 'stickers', image: 'artworks/wide_susie.png' },
    { id: 28, category: 'stickers', image: 'artworks/star_walker.png' },
    { id: 29, category: 'stickers', image: 'artworks/gekko_sticker.png' },
    { id: 30, category: 'stickers', image: 'artworks/vergil_chair_back.png' },
    { id: 31, category: 'stickers', image: 'artworks/vergil_chair_front.png' },

    { id: 32, category: 'art', image: 'artworks/castle_techno.jpeg' },
    { id: 33, category: 'art', image: 'artworks/heavens_gate.jpeg' },
    { id: 34, category: 'art', image: 'artworks/masquerade_techno.jpeg' },
    { id: 35, category: 'art', image: 'artworks/techno_birthday.jpeg' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Archivo+Narrow:wght@400;500;600;700&family=Lora:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #f5f5f4;
          min-height: 100vh;
        }

        .font-dm-serif { font-family: 'DM Serif Display', serif; }
        .font-archivo { font-family: 'Archivo Narrow', sans-serif; }
        .font-lora { font-family: 'Lora', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          border-bottom: 2px solid #dc2626;
          background-color: #f5f5f4;
        }

        .logo img { height: 2.5rem; }

        nav {
          display: flex;
          gap: 2rem;
          font-size: 0.875rem;
        }

        nav a {
          color: #1f2937;
          text-decoration: none;
          transition: color 0.3s;
        }

        nav a:hover { color: #dc2626; }

        .hero-section {
          padding: 2rem 2rem;
          border-bottom: 2px solid #d1d5db;
          background-color: #f5f5f4;
        }

        .hero-container {
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .line-accent {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .line-accent .line {
          height: 1px;
          width: 4rem;
          background-color: #dc2626;
        }

        .line-accent .plus {
          color: #dc2626;
          font-family: monospace;
          font-size: 0.875rem;
        }

        .hero-id {
          color: #dc2626;
          font-family: monospace;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .hero-title {
        font-size: 8rem;
        font-weight: bold;
        margin-bottom: 1rem;
        line-height: 1;
        }

        .hero-title .italic { font-style: italic; }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }

        .hero-subtitle .name { color: #dc2626; }

        .pixel-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
          width: 5rem;
          height: 5rem;
          margin-bottom: 1.5rem;
        }

        .pixel-grid .pixel {
          background-color: #22d3ee;
          border-radius: 0.125rem;
        }

        .hero-info {
          font-size: 0.875rem;
          line-height: 1.75;
        }

        .hero-info p { margin-bottom: 0.5rem; }

        .hero-info .welcome {
          font-size: 0.75rem;
          color: #4b5563;
          margin-top: 1rem;
        }

        .hero-image-wrapper { 
          position: relative;
          width: 100%;
          height: 100%;
        }

        .year-bg {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 9rem;
          font-weight: bold;
          color: #dc2626;
          opacity: 0.2;
          z-index: 10;
        }

        .hero-image-container { 
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 32rem;
        }

        .red-background {
          display: none;
        }

        .hero-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-content 


        .about-section {
          padding: 4rem 2rem;
          border-bottom: 2px solid #d1d5db;
          background-color: #f5f5f4;
        }

        .about-container {
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .about-image-wrapper { position: relative; }

        .about-number {
          position: absolute;
          left: -2rem;
          top: -2rem;
          font-size: 9rem;
          font-weight: bold;
          color: #e5e7eb;
        }

        .about-image-container {
          position: relative;
          background-color: white;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .about-image-placeholder {
          width: 100%;
          height: 24rem;
          background: linear-gradient(to bottom right, #e9d5ff, #fbcfe8);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-header .line {
          height: 1px;
          width: 4rem;
          background-color: #000;
        }

        .section-header h2 {
          font-size: 0.875rem;
          font-weight: bold;
        }

        .section-header .line-flex {
          height: 1px;
          flex: 1;
          background-color: #000;
        }

        .about-text {
          font-size: 0.875rem;
          line-height: 1.75;
        }

        .about-text p { margin-bottom: 1rem; }

        .about-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .icon-box {
          width: 3rem;
          height: 3rem;
          background-color: #dc2626;
          border-radius: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.25rem;
          width: 3rem;
          height: 3rem;
        }

        .icon-grid .dot {
          background-color: #dc2626;
          border-radius: 0.125rem;
        }

        .about-title { margin-top: 2rem; }

        .about-title h3 {
          font-size: 3rem;
          font-weight: bold;
        }

        .about-title .me-italic { font-style: italic; }
        .about-title .plus {
          color: #22d3ee;
          margin-left: 0.5rem;
        }

        .projects-section {
          padding: 4rem 2rem;
          background-color: #f5f5f4;
        }

        .projects-container {
          max-width: 80rem;
          margin: 0 auto;
        }

        .portfolio-title-wrapper {
          position: relative;
          margin-bottom: 3rem;
        }

        .portfolio-title {
          font-size: 8rem;
          font-weight: bold;
        }

        .portfolio-title .italic { font-style: italic; }

        .red-square {
          position: absolute;
          top: 0;
          right: 0;
          width: 8rem;
          height: 8rem;
          background-color: #dc2626;
        }

        .portfolio-description {
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }




/* ---------- FILTER BUTTONS ---------- */
.filter-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #d1d5db;
  background-color: white;
  color: #1f2937;
  transition: all 0.3s;
}

.filter-btn:hover {
  border-color: #dc2626;
}

.filter-btn.active-all,
.filter-btn.active-art {
  background-color: #dc2626;
  color: white;
  border-color: #dc2626;
}

.filter-btn.active-stickers {
  background-color: #22d3ee;
  color: white;
  border-color: #22d3ee;
}

.filter-btn.active-keychains {
  background-color: #f59e0b;
  color: white;
  border-color: #f59e0b;
}

/* ---------- MASONRY GRID ---------- */
.portfolio-grid {
  column-count: 4;
  column-gap: 1rem;
}

/* Each item behaves like a masonry brick */
.portfolio-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

/* Hover */
.portfolio-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.2);
}

/* Images keep original aspect ratio */
.portfolio-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

/* Overlay */
.portfolio-item .overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0,0,0,0);
  transition: background-color 0.3s;
}

.portfolio-item:hover .overlay {
  background-color: rgba(0,0,0,0.15);
}

.art-stall-section {
  padding: 4rem 2rem;
  border-bottom: 2px solid #d1d5db;
  background-color: #f5f5f4;
}

.art-stall-container {
  max-width: 80rem;
  margin: 0 auto;
}

.art-stall-title-wrapper {
  position: relative;
  margin-bottom: 3rem;
}

.art-stall-title {
  font-size: 8rem;
  font-weight: bold;
}

.art-stall-title .italic {
  font-style: italic;
}

.art-stall-red-square {
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  height: 8rem;
  background-color: #dc2626;
}

/* Cards layout */
.art-stall-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.art-stall-card {
  background: white;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.art-stall-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.15);
}

.art-stall-card img {
  width: 100%;
  height: 24rem;
  object-fit: cover;
}

.art-stall-card-content {
  padding: 1.5rem;
}

.art-stall-card h4 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.art-stall-card p {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .art-stall-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .art-stall-title {
    font-size: 3rem;
  }

  .art-stall-grid {
    grid-template-columns: 1fr;
  }
}

/* Expand animation */
.art-stall-card-content p {
  transition: all 0.3s ease;
}

.read-more-btn {
  margin-top: 1rem;
  background: none;
  border: none;
  color: #dc2626;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.3s;
}

.read-more-btn:hover {
  opacity: 0.7;
}

.art-stall-card.expanded {
  transform: translateY(-6px);
}

/* ---------- CATEGORY STYLING (VISUAL ONLY) ---------- */
.portfolio-item.stickers,
.portfolio-item.keychains {
  background-color: transparent;
  box-shadow: none;
  padding: 0.75rem;
}

        footer p { font-size: 0.875rem; }

        .contact-section {
        padding: 4rem 2rem;
        background-color: #f5f5f4;
        border-bottom: 2px solid #d1d5db;
        }

        .contact-container {
        max-width: 80rem;
        margin: 0 auto;
        }

        .contact-content {
        text-align: center;
        max-width: 50rem;
        margin: 0 auto;
        }

        .contact-title {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        }

        .contact-title .italic {
        font-style: italic;
        }

        .contact-description {
        font-size: 1.125rem;
        margin-bottom: 3rem;
        color: #4b5563;
        }

        .social-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
        }

        .social-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        color: #1f2937;
        transition: transform 0.3s;
        }

        .social-link:hover {
        transform: translateY(-5px);
        }

        .social-icon {
        width: 5rem;
        height: 5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: bold;
        color: white;
        transition: all 0.3s;
        }

        .social-link.tumblr .social-icon {
        background-color: #35465c;
        }

        .social-link.tumblr:hover .social-icon {
        background-color: #001935;
        }

        .social-link.twitter .social-icon {
        background-color: #000000;
        }

        .social-link.twitter:hover .social-icon {
        background-color: #1a1a1a;
        }

        .social-link.youtube .social-icon {
        background-color: #ff0000;
        }

        .social-link.youtube:hover .social-icon {
        background-color: #cc0000;
        }

        .social-link span {
        font-size: 1rem;
        font-weight: 600;
        }

        @media (max-width: 1024px) {
          .hero-container,
          .about-container {
            grid-template-columns: 1fr;
          }
  .portfolio-grid {
    column-count: 3;
  }
        }

        @media (max-width: 768px) {
          nav {
            gap: 1rem;
            font-size: 0.75rem;
          }
          .hero-title { font-size: 5rem; }
          .portfolio-grid {
    column-count: 2;
          }
          .portfolio-title { font-size: 2.5rem; }
          .about-title h3 { font-size: 2rem; }
        }

        @media (max-width: 640px) {
          header {
            flex-direction: column;
            gap: 1rem;
          }
          nav {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
      <div>
        {/* Header */}
        <header>
          <div></div>
          <nav className="font-inter">
            <nav className="font-inter">
              <a href="#about">About Me</a>
              <a href="#projects">Portfolio</a>
              <a href="#contact">Contact</a>
            </nav>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="line-accent">
                <div className="line"></div>
                <div className="plus">+ + +</div>
              </div>
              <div className="hero-id">812391 // 21 // 99000</div>
              <h1 className="hero-title font-dm-serif">
                H<span className="italic">E</span>LL<span className="italic">O</span>.
              </h1>
              <p className="hero-subtitle font-lora">
                My name is<br />
                <span className="name">Ino — inozuart</span>
              </p>
              <div className="pixel-grid">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="pixel"></div>
                ))}
              </div>
              <div className="hero-info font-inter">
                <p><strong>Freelance Illustrator</strong></p>
                <p>University of Adelaide — 2025</p>
                <p>Graduate</p>
                <p className="welcome">Welcome to my portfolio website</p>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <div className="red-background"></div>
                <img
                  src="/artworks/duck girl clear.png"
                  alt="duck girl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Commissions Section */}

        {/* Art stall section */}
        <section id="art-stalling" className="art-stall-section">
          <div className="art-stall-container">

            <div className="section-header">
              <div className="line"></div>
              <h2 className="font-archivo">Artist Alleys</h2>
              <div className="line-flex"></div>
            </div>

            <div className="art-stall-title-wrapper">
              <h3 className="art-stall-title font-dm-serif">
                <span className="italic">A</span>RT ST<span className="italic">A</span>LLS
              </h3>
            </div>

            <p className="portfolio-description font-lora">
              It's always been a dream of mine to do art stalls since I first attended AvCon in 2019. I finally had the chance
              to do so at the end of 2025, and what an absolute dream it has been! Sharing my art,
              meeting other artists, and connecting with the community has been one of
              the highlights of that year.
            </p>

            <div className="art-stall-grid">

              {[
                {
                  id: 1,
                  title: "AnimeGo 2025",
                  image: "/artworks/stall_event1.png",
                  preview: "My first ever artist alley experience will always be a special one, and AnimeGo had everything all at once! I met so many amazing local artists with the smaller venue...",
                  full: `
                    My first ever artist alley experience will always be a special one, and AnimeGo had everything all at once!
                    I met so many amazing local artists with the smaller venue. The cosplay community in Adelaide was just so
                    inspiring and wonderful to talk to. This truly made my dream come true to see so many like-minded individuals,
                    I felt a part of my inner child heal seeing art around me, which I have the community to thank. Of course the
                    first experience taught me how much I lacked with my display and brought the chaos I expected, for instance,
                    immediately running out of packaging, struggling with organisation behind my stall, and my square reader dying
                    in the middle of a transaction. The most memorable of these struggles was definitely
                    finishing a 30% weighted assignment that I realised was due at 5pm not 11:59pm as I first believed. I couldn't
                    of asked for a better first experience!
                  `
                },
                {
                  id: 2,
                  title: "Supanova Adelaide 2025",
                  image: "/artworks/stall_event2.png",
                  preview: "This was a massive step up from the smaller AnimeGo event the week before! I was vastly underprepared with the stock as I had definitely not stocked enough for two conventions in a row. Despite this...",
                  full: `
                  This was a massive step up from the smaller AnimeGo event the week before! I was vastly underprepared with the stock as I had definitely not stocked enough for two conventions in a row. Despite this, it was a great experience! I learnt a lot about how to keep everything more organised, and started discussing commissions to talk other business opportunities besides the merchandise I sold. The three days of 9am-6pm was truly brutal, but so worth it. My highlights are always the amazing cosplayers and artists that I got to meet on the day. It really inspired me to keep creating and make even better works for my future events.
                  `
                },
                {
                  id: 3,
                  title: "AvCon Christmas Markets 2025",
                  image: "/artworks/stall_event3.png",
                  preview: "I had an amazing time with the AvCon Christmas markets, and I think this one especially hit a bit closer. Supporting and spreading awareness of charity organisations has always been a goal of mine with my art...",
                  full: `
                  I had an amazing time with the AvCon Christmas markets, and I think this one especially hit a bit closer. Supporting and spreading awareness of charity organisations has always been a goal of mine with my art as well. A lot of my inspiration and years drawing came from my time as a Technoblade fan. His passing impacted me a lot mentally, and I think being able to raise money for the Sarcoma foundation in this event helped bring a part of that healing to a close as well. Knowing that I can support something and help the community with these donations, as well as the Games 4 Kids initiative, made me know that starting this stall was worth it. This was the last artist alley I participated in the year, and what a sweet note it was to end 2025 off with!
                  `
                }
              ].map((event) => {
                const isExpanded = expandedCard === event.id;

                return (
                  <div key={event.id} className={`art-stall-card ${isExpanded ? "expanded" : ""}`}>
                    <img src={event.image} alt={event.title} />

                    <div className="art-stall-card-content">
                      <h4 className="font-archivo">{event.title}</h4>

                      <p className="font-inter">
                        {isExpanded ? event.full : event.preview}
                      </p>

                      <button
                        className="read-more-btn font-inter"
                        onClick={() =>
                          setExpandedCard(isExpanded ? null : event.id)
                        }
                      >
                        {isExpanded ? "Read Less —" : "Read More +"}
                      </button>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="projects-container">
            <div className="section-header">
              <div className="line"></div>
              <h2 className="font-archivo">Projects</h2>
              <div className="line-flex"></div>
            </div>

            <div className="portfolio-title-wrapper">
              <h3 className="portfolio-title font-dm-serif">
                P<span className="italic">O</span>RTF<span className="italic">O</span>L<span className="italic">I</span><span className="italic">O</span>
              </h3>
              <div className="red-square"></div>
            </div>

            <p className="portfolio-description font-lora">This is my portfolio containing my art, merchandise, and more. Use the filters below to check out my art portfolio, and to see what stickers and keychains I have available at my stall! Online shop will be coming soon...</p>

            {/* Filter Buttons */}
            <div className="filter-buttons">
              <button
                onClick={() => setActiveFilter('all')}
                className={`filter-btn font-inter ${activeFilter === 'all' ? 'active-all' : ''}`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter('art')}
                className={`filter-btn font-inter ${activeFilter === 'art' ? 'active-art' : ''}`}
              >
                Art Showcase
              </button>
              <button
                onClick={() => setActiveFilter('stickers')}
                className={`filter-btn font-inter ${activeFilter === 'stickers' ? 'active-stickers' : ''}`}
              >
                Stickers
              </button>
              <button
                onClick={() => setActiveFilter('keychains')}
                className={`filter-btn font-inter ${activeFilter === 'keychains' ? 'active-keychains' : ''}`}
              >
                Keychains
              </button>
            </div>

            {/* Portfolio Grid */}
            <div
              className={`portfolio-grid ${activeFilter === 'stickers'
                ? 'stickers-view'
                : activeFilter === 'keychains'
                  ? 'keychains-view'
                  : ''
                }`}
            >
              {filteredItems.map((item) => (
                <div key={item.id} className="portfolio-item">
                  <img
                    src={item.image}
                    alt={`Portfolio item ${item.id}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <div className="section-header">
              <div className="line"></div>
              <h2 className="font-archivo">Contact</h2>
              <div className="line-flex"></div>
            </div>

            <div className="contact-content">
              <h3 className="contact-title font-dm-serif">
                L<span className="italic">E</span>T'S C<span className="italic">O</span>NN<span className="italic">E</span>CT
              </h3>
              <p className="contact-description font-lora">
                Follow me on social media to see my latest work and updates!
              </p>

              <div className="social-links">
                <a href="https://tumblr.com/inozuart" target="_blank" rel="noopener noreferrer" className="social-link tumblr">
                  <div className="social-icon">T</div>
                  <span className="font-inter">Tumblr</span>
                </a>
                <a href="https://twitter.com/inozuart" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <div className="social-icon">𝕏</div>
                  <span className="font-inter">Twitter</span>
                </a>
                <a href="https://youtube.com/@inozuart" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <div className="social-icon">▶</div>
                  <span className="font-inter">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div>
            <p className="font-inter">© 2025 Ino - inozuart. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;