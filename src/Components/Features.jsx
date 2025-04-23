import React from 'react';
import '../Styles/Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Cloud Applications',
      description: 'Complete SaaS suite that enables you to differentiate, innovate, and transform your business.'
    },
  ];

  return (
    <section className="features">
      <div className="features-header">
        <h2>Our Cloud Solutions</h2>
        <p>Discover how Oracle can transform your business with leading-edge technology</p>
      </div>
      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-item">
            <span className="feature-icon">{feature.icon}</span>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;