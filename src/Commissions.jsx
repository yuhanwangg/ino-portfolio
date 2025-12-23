import React from 'react';

const Commissions = () => {
    const examplesLineFlat = [
        { size: 'Headshot', price: '$XX', background: 'Simple', additional: 'X days' },
        { size: 'Headshot', price: '$XX', background: 'Simple', additional: 'X days' },
        { size: 'Headshot', price: '$XX', background: 'Simple', additional: 'X days' },
    ];

    const examplesRendered = [
        { size: 'Headshot', price: '$XX', additional: 'Additional', background: 'Simple' },
        { size: 'Headshot', price: '$XX', additional: 'Additional', background: 'Simple' },
        { size: 'Headshot', price: '$XX', additional: 'Additional', background: 'Simple' },
    ];

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

        .commissions-hero {
          padding: 4rem 2rem;
          background-color: #f5f5f4;
        }

        .commissions-container {
          max-width: 80rem;
          margin: 0 auto;
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

        .commissions-title {
          font-size: 6rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1;
        }

        .commissions-title .italic { font-style: italic; }

        .status-badge {
          display: inline-block;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .commissions-intro {
          font-size: 0.875rem;
          line-height: 1.75;
          max-width: 50rem;
          margin-bottom: 1rem;
        }

        .commissions-intro p { margin-bottom: 0.5rem; }

        .section-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 3rem 0 2rem 0;
        }

        .section-divider .arrow {
          font-size: 1.5rem;
          color: #1f2937;
        }

        .section-divider h2 {
          font-size: 1.125rem;
          font-weight: 600;
        }

        .section-divider .line-flex {
          height: 1px;
          flex: 1;
          background-color: #1f2937;
        }

        .prices-section {
          padding: 3rem 0;
        }

        .prices-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .prices-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.5fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .price-column h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .price-box {
          background-color: #d1d5db;
          min-height: 20rem;
          border-radius: 0.25rem;
        }

        .notes-text {
          font-size: 0.75rem;
          line-height: 1.6;
        }

        .notes-text p { margin-bottom: 0.75rem; }

        .examples-section {
          padding: 3rem 0;
        }

        .examples-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .examples-category {
          margin-bottom: 3rem;
        }

        .examples-category h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .example-item {
          display: flex;
          flex-direction: column;
        }

        .example-image {
          background-color: #d1d5db;
          height: 20rem;
          border-radius: 0.25rem;
          margin-bottom: 1rem;
        }

        .example-details {
          font-size: 0.75rem;
          line-height: 1.6;
        }

        .example-details p { margin-bottom: 0.25rem; }

        .process-section {
          padding: 3rem 0;
        }

        .process-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .process-step {
          margin-bottom: 2rem;
        }

        .process-step h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .process-content {
          font-size: 0.875rem;
          line-height: 1.75;
        }

        .process-content p { margin-bottom: 0.5rem; }

        .process-content ul {
          list-style: disc;
          margin-left: 1.5rem;
          margin-top: 0.5rem;
        }

        .process-content li { margin-bottom: 0.25rem; }

        footer {
          background-color: #dc2626;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
          margin-top: 4rem;
        }

        footer p { font-size: 0.875rem; }

        @media (max-width: 1024px) {
          .prices-grid {
            grid-template-columns: 1fr;
          }
          .examples-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .commissions-title { font-size: 4rem; }
          .prices-title,
          .examples-title,
          .process-title { font-size: 2rem; }
          .examples-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
            <div>
                {/* Header */}
                <header>
                    <div></div>
                    <nav className="font-inter">
                        <a href="#about">About Me</a>
                        <a href="#projects">Projects</a>
                        <a href="#commissions">Commissions</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </header>

                {/* Commissions Hero */}
                <section className="commissions-hero">
                    <div className="commissions-container">
                        <div className="line-accent">
                            <div className="line"></div>
                            <div className="plus">+ + +</div>
                        </div>

                        <h1 className="commissions-title font-dm-serif">
                            C<span className="italic">O</span>MM<span className="italic">I</span>SS<span className="italic">I</span><span className="italic">O</span>NS.
                        </h1>

                        <div className="status-badge font-archivo">Currently Open</div>

                        <div className="commissions-intro font-inter">
                            <p>Please note that I am still studying and working, hence commissions may take up to a month or more to complete depending on the complexity.</p>
                            <p>If urgency is required I am happy to discuss details.</p>
                        </div>

                        {/* Prices Section */}
                        <div className="section-divider">
                            <span className="arrow">→</span>
                            <h2 className="font-archivo">Prices</h2>
                            <div className="line-flex"></div>
                        </div>

                        <div className="prices-section">
                            <h3 className="prices-title font-dm-serif">PRICES</h3>
                            <div className="prices-grid">
                                <div className="price-column">
                                    <h3 className="font-archivo">Lined/Flat Colours</h3>
                                    <div className="price-box"></div>
                                </div>
                                <div className="price-column">
                                    <h3 className="font-archivo">Rendered/Complex</h3>
                                    <div className="price-box"></div>
                                </div>
                                <div className="price-column">
                                    <h3 className="font-archivo">Notes</h3>
                                    <div className="notes-text font-inter">
                                        <p>I will not draw NSFW, Mecha or Furry (I do not have the skills to do so ...).</p>
                                        <p>If the request is something I am personally uncomfortable with, I will decline.</p>
                                        <p>Base prices are subject to change depending on complexity of character (i.e. gadgets, patterns, colours etc.)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Examples Section */}
                        <div className="examples-section">
                            <h3 className="examples-title font-dm-serif">EXAMPLES + PRICE</h3>

                            <div className="examples-category">
                                <h4 className="font-archivo">Lined/Flat Colours</h4>
                                <div className="examples-grid">
                                    {examplesLineFlat.map((example, index) => (
                                        <div key={index} className="example-item">
                                            <div className="example-image"></div>
                                            <div className="example-details font-inter">
                                                <p>Size: {example.size}</p>
                                                <p>Price: {example.price}</p>
                                                <p>Background: {example.background}</p>
                                                <p>Additional: {example.additional}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="examples-category">
                                <h4 className="font-archivo">Rendered/Complex</h4>
                                <div className="examples-grid">
                                    {examplesRendered.map((example, index) => (
                                        <div key={index} className="example-item">
                                            <div className="example-image"></div>
                                            <div className="example-details font-inter">
                                                <p>Size: {example.size}</p>
                                                <p>Price: {example.price}</p>
                                                <p>Background: {example.background}</p>
                                                <p>Additional: {example.additional}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Process Section */}
                        <div className="process-section">
                            <h3 className="process-title font-dm-serif">PROCESS</h3>

                            <div className="process-step">
                                <h4 className="font-archivo">1. Contact</h4>
                                <div className="process-content font-inter">
                                    <p>Please contact me via Twitter (where I am most active) about commission inquiries. When you request a quote, please include the following details:</p>
                                    <ul>
                                        <li>Commission style — Lined or Complex</li>
                                        <li>Sizing — headshot, waist full body etc.</li>
                                        <li>Any extent details/reference sheets of characters — moodboards, poses etc/</li>
                                        <li>Any deadlines required</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="process-step">
                                <h4 className="font-archivo">2. Initial Sketch</h4>
                                <div className="process-content font-inter">
                                    <p>I will provide an initial sketch of the given description. If you are happy to continue, I will then ask for a 25% deposit and begin. Payment options can be discussed. Please let me know anything you would like to change/alter in this process.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <h4 className="font-archivo">3. Finalising</h4>
                                <div className="process-content font-inter">
                                    <p>Updates will be sent along the way. If there are any parts you would like changed, do not hesitate to tell me! When I’m finished with the piece, I’ll ask for the remaining 75%. The final art piece will be sent via email or other means you would like. </p>
                                </div>
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

export default Commissions;