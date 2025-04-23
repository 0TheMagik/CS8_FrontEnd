import React from 'react';
import '../Styles/Features.css';

const Features = () => {
const features = [
    {
        id: 1,
        icon: '🚀',
        title: 'Cloud Applications',
        description: 'Complete SaaS suite that enables you to differentiate, innovate, and transform your business.'
    },
    {
        id: 2,
        icon: '🔒',
        title: 'Secure Infrastructure',
        description: 'Enterprise-grade cloud infrastructure designed for high performance and unmatched security.'
    },
    {
        id: 3,
        icon: '📊',
        title: 'Data Analytics',
        description: 'Transform data into actionable insights with our comprehensive analytics solutions.'
    },
    {
        id: 4,
        icon: '🤖',
        title: 'AI & ML Integration',
        description: 'Leverage artificial intelligence and machine learning to automate and enhance your processes.'
    }
];

return (
    <section className="features">
        <div className="features-header">
            <h2>Our Cloud Solutions</h2>
            <p>Discover how Oracle can transform your business with leading-edge technology</p>
        </div>
        <div className="features-grid">
            {features.map(feature => (
            <div className="feature-card" key={feature.id}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#" className="learn-more">Learn more →</a>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Features;