import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
return (
    <section className="hero">
        <div className="hero-content">
            <h1>Innovate with Confidence</h1>
            <h2>Oracle Cloud Applications and Cloud Platform</h2>
            <p>
            Accelerate your business with complete, integrated cloud solutions 
            for enterprise applications, data, and infrastructure.
            </p>
            <div className="hero-buttons">
            <button className="primary-btn">Start Free Trial</button>
            <button className="secondary-btn">Watch Demo</button>
            </div>
        </div>
        <div className="hero-image">
            <div className="image-placeholder"></div>
        </div>
        </section>
    );
};

export default Hero;