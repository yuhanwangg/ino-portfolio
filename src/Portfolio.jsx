import React, { useState, useMemo } from 'react';
import './Portfolio.css';
import MusicPlayer from './components/MusicPlayer.jsx';
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import ArtStallCarousel from './components/ArtStallCarousel.jsx';
import ConventionList from "./components/ConventionList";

const PORTFOLIO_ITEMS = [
  { id: 1, category: 'art', image: 'artworks/norway belvoedkv.webp' },
  { id: 2, category: 'art', image: 'artworks/sanji cooking.webp' },
  { id: 3, category: 'art', image: 'artworks/monster_trio.webp' },
  { id: 4, category: 'art', image: 'artworks/batman.webp' },
  { id: 5, category: 'art', image: 'artworks/bruce.webp' },
  { id: 6, category: 'art', image: 'artworks/techno 10 million project.webp' },
  { id: 7, category: 'art', image: 'artworks/sunkyu high school.webp' },
  { id: 8, category: 'art', image: 'artworks/kris_and_frisk.webp' },
  { id: 9, category: 'art', image: 'artworks/gym_sesh.webp' },
  { id: 10, category: 'art', image: 'artworks/dante_all_three.webp' },
  { id: 11, category: 'art', image: 'artworks/dante_vergil.webp' },
  { id: 12, category: 'art', image: 'artworks/KAKYOINN.webp' },
  { id: 13, category: 'art', image: 'artworks/alley.webp' },
  { id: 14, category: 'art', image: 'artworks/hongice yeee.webp' },
  { id: 15, category: 'art', image: 'artworks/INK AND ERROR.webp' },
  { id: 16, category: 'stickers', image: 'stickers/jett_sticker.webp' },
  { id: 17, category: 'stickers', image: 'stickers/frieren.webp' },
  { id: 18, category: 'stickers', image: 'stickers/jjk.webp' },
  { id: 19, category: 'stickers', image: 'stickers/kny.webp' },
  { id: 20, category: 'keychains', image: 'keychains/sans_keychain.webp' },
  { id: 21, category: 'keychains', image: 'keychains/frisk_keychain.webp' },
  { id: 22, category: 'keychains', image: 'keychains/gekko_keychain.webp' },
  { id: 23, category: 'keychains', image: 'keychains/jett_keychain.webp' },
  { id: 24, category: 'stickers', image: 'stickers/fun_gang_sheet.webp' },
  { id: 25, category: 'stickers', image: 'stickers/tenna_sheet.webp' },
  { id: 26, category: 'stickers', image: 'stickers/susie_frisk_car.webp' },
  { id: 27, category: 'stickers', image: 'stickers/wide_susie.webp' },
  { id: 28, category: 'stickers', image: 'stickers/star_walker.webp' },
  { id: 29, category: 'stickers', image: 'stickers/gekko_sticker.webp' },
  { id: 30, category: 'stickers', image: 'stickers/vergil_chair_back.webp' },
  { id: 31, category: 'stickers', image: 'stickers/vergil_chair_front.webp' },
  { id: 32, category: 'art', image: 'artworks/castle_techno.webp' },
  { id: 33, category: 'art', image: 'artworks/heavens_gate.webp' },
  { id: 34, category: 'art', image: 'artworks/masquerade_techno.webp' },
  { id: 35, category: 'art', image: 'artworks/techno_birthday.webp' },
  { id: 36, category: 'stickers', image: 'stickers/batman_robin_sticker.webp' },
  { id: 37, category: 'stickers', image: 'stickers/dante_lonely_sticker.webp' },
  { id: 38, category: 'stickers', image: 'stickers/tim_drake_sticker.webp' },
];

const CONVENTION_EVENTS = [
  {
    title: "Oz Comic-Con Adelaide",
    date: "May 30-31 2026",
    table: "Table AA88",
    image: "map coming soon!.png"
  },
  {
    title: "AvCon",
    date: "July 4-5 2026",
    table: "Table N/A",
    image: "map coming soon!.png"
  }
];

const ART_STALL_EVENTS = [
  {
    id: 1,
    title: 'AnimeGo 2025',
    date: '26/10/2025',
    image: '/images/stall_event1.webp',
    preview:
      "My first ever artist alley experience will always be a special one, and AnimeGo had everything all at once! I met so many amazing local artists with the smaller venue...",
    full: `My first ever artist alley experience will always be a special one, and AnimeGo had everything all at once!
I met so many amazing local artists with the smaller venue. The cosplay community in Adelaide was just so
inspiring and wonderful to talk to. This truly made my dream come true to see so many like-minded individuals,
I felt a part of my inner child heal seeing art around me, which I have the community to thank. Of course the
first experience taught me how much I lacked with my display and brought the chaos I expected, for instance,
immediately running out of packaging, struggling with organisation behind my stall, and my square reader dying
in the middle of a transaction. The most memorable of these struggles was definitely
finishing a 30% weighted assignment that I realised was due at 5pm not 11:59pm as I first believed. I couldn't
of asked for a better first experience!`,
  },
  {
    id: 2,
    title: 'Supanova Adelaide 2025',
    date: '30/10/2025 - 1/11/2025',
    image: '/images/stall_event2.webp',
    preview:
      "This was a massive step up from the smaller AnimeGo event the week before! I was vastly underprepared with the stock as I had definitely not stocked enough for two conventions in a row. Despite this...",
    full: `This was a massive step up from the smaller AnimeGo event the week before! I was vastly underprepared with
the stock as I had definitely not stocked enough for two conventions in a row. Despite this, it was a great
experience! I learnt a lot about how to keep everything more organised, and started discussing commissions to
talk other business opportunities besides the merchandise I sold. The three days of 9am–6pm was truly brutal,
but so worth it. My highlights are always the amazing cosplayers and artists that I got to meet on the day.
It really inspired me to keep creating and make even better works for my future events.`,
  },
  {
    id: 3,
    title: 'AvCon Christmas Markets 2025',
    date: '12/12/2025 - 13/12/2025',
    image: '/images/stall_event3.webp',
    preview:
      "I had an amazing time with the AvCon Christmas markets, and I think this one especially hit a bit closer. Supporting and spreading awareness of charity organisations has always been a goal of mine with my art...",
    full: `I had an amazing time with the AvCon Christmas markets, and I think this one especially hit a bit closer.
Supporting and spreading awareness of charity organisations has always been a goal of mine with my art as well.
A lot of my inspiration and years drawing came from my time as a Technoblade fan. His passing impacted me a lot
mentally, and I think being able to raise money for the Sarcoma foundation in this event helped bring a part of
that healing to a close as well. Knowing that I can support something and help the community with these donations,
as well as the Games 4 Kids initiative, made me know that starting this stall was worth it. This was the last
artist alley I participated in the year, and what a sweet note it was to end 2025 off with!`,
  },

  {

  }
];

const FILTER_ACTIVE_CLASS = {
  all: 'active-all',
  art: 'active-art',
  stickers: 'active-stickers',
  keychains: 'active-keychains',
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const filteredItems = useMemo(
    () =>
      activeFilter === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  return (
    <div>
      <header>
        <div>{/* logo placeholder */}</div>
        <nav className="font-inter">
          <a href="#about">/ About Me</a>
          <a href="#projects">/ Portfolio</a>
          <a href="#contact">/ Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="line-accent">
              <div className="line" />
              <div className="plus">+ + +</div>
            </div>
            <div className="hero-id">812391 // 21 // 99000</div>
            <h1 className="hero-title font-dm-serif">
              H<span className="italic">E</span>LL<span className="italic">O</span>.
            </h1>
            <p className="hero-subtitle font-lora">
              My name is <span className="name">Ino</span>
            </p>

            <div className="hero-info font-inter">
              <p><strong>Freelance Illustrator</strong></p>
              <p>Kaurna Land</p>
              <MusicPlayer />
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img src="/artworks/duck girl clear.webp" alt="Ino's illustration of a duck girl" />
            </div>
          </div>
        </div>
      </section>

      <section id="art-stalling" className="art-stall-section">
        <div className="art-stall-container">
          <div className="section-header">
            <div className="line" />
            <h2 className="font-inter">Artist Alleys</h2>
            <div className="line-flex" />
          </div>

          <div className="art-stall-title-wrapper">
            <h3 className="art-stall-title font-dm-serif">
              <span className="italic">A</span>RT ST<span className="italic">A</span>LLS
            </h3>
          </div>

          <div className="portfolio-section">
            <div className="portfolio-content">
              <p className="portfolio-description font-lora">
                Illustration has been a passion of mine ever since I was kid wanting to draw my favourite characters onto paper. I love
                bringing to life these wonderful characters that made me who I am today, where every piece of me I see a reflection in
                the media and art I consume.</p>

              <p className="portfolio-description font-lora">It's always been a dream of mine to do art stalls since I first attended AvCon in 2019. I finally had the chance
                to do so at the end of 2025, and what an absolute dream it has been! Sharing my art,
                meeting other artists, and connecting with the community has been one of
                the highlights of that year.
              </p>
            </div>

            <ConventionList events={CONVENTION_EVENTS} />
          </div>

          <ArtStallCarousel
            events={ART_STALL_EVENTS}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <div className="line" />
            <h2 className="font-inter">Projects</h2>

            <div className="line-flex" />
          </div>

          <div className="portfolio-title-wrapper">
            <h3 className="portfolio-title font-dm-serif">
              P<span className="italic">O</span>RTF<span className="italic">O</span>L<span className="italic">I</span><span className="italic">O</span>
            </h3>
            <div className="red-square" aria-hidden="true" />
          </div>

          <p className="portfolio-description font-lora">
            This is my portfolio containing my art, merchandise, and more! Use the filters below to check out my art
            portfolio, and to see what stickers and keychains I have available at my stall! Online shop will be coming
            soon...
          </p>

          {/* <section id="best-works" className="best-works-section">
            <div className="favourite-works">
              <div className="section-header">
                <h1 className="font-lora">Favourite Works</h1>
              </div>
            </div>
            <p className="portfolio-description font-lora">
              These are some of my favourite works! For my full portfolio of works, scroll down
            </p>
          </section> */}

          <div className="filter-buttons" role="group" aria-label="Filter portfolio by category">
            {[
              { value: 'all', label: 'All Projects' },
              { value: 'art', label: 'Art Showcase' },
              { value: 'stickers', label: 'Stickers' },
              { value: 'keychains', label: 'Keychains' },
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`filter-btn font-inter ${activeFilter === value ? FILTER_ACTIVE_CLASS[value] : ''}`}
                aria-pressed={activeFilter === value}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className={`portfolio-item ${item.category}`}>
                <img
                  src={item.image}
                  alt={`Portfolio item ${item.id}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="overlay" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-header">
            <div className="line" />
            <h2 className="font-inter">Contact</h2>
            <div className="line-flex" />
          </div>

          <div className="contact-content">
            <h3 className="contact-title font-dm-serif">
              L<span className="italic">E</span>T'S C<span className="italic">O</span>NN<span className="italic">E</span>CT
            </h3>
            <p className="contact-description font-lora">
              Follow me on social media to see my latest work and updates!
            </p>

            <div className="social-links">
              {[
                { href: 'https://tumblr.com/inozuart', cls: 'tumblr', icon: 'T', label: 'Tumblr' },
                { href: 'https://twitter.com/inozuart', cls: 'twitter', icon: '𝕏', label: 'Twitter' },
                { href: 'https://youtube.com/@inozuart', cls: 'youtube', icon: '▶', label: 'YouTube' },
              ].map(({ href, cls, icon, label }) => (
                <a
                  key={cls}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${cls}`}
                  aria-label={`Visit Ino on ${label}`}
                >
                  <div className="social-icon">{icon}</div>
                  <span className="font-inter">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p className="font-inter">© 2025 Ino - inozuart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;