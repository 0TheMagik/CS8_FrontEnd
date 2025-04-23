import React from 'react';
import '../Styles/Solutions.css';

const Solutions = () => {
return (
    <section className="solutions">
        <div className="solutions-content">
            <h2>Enterprise Solutions for Every Industry</h2>
            <p>
            Oracle provides tailored solutions to help organizations across industries
            overcome their most complex challenges and achieve their business goals.
            </p>
            <div className="solution-tabs">
            <button className="tab active">Finance</button>
            <button className="tab">Healthcare</button>
            <button className="tab">Manufacturing</button>
            <button className="tab">Retail</button>
            <button className="tab">Public Sector</button>
            </div>
            <div className="solution-details">
            <h3>Oracle Cloud ERP for Finance</h3>
            <p>
                Transform your finance operations with Oracle Cloud ERP. Our integrated suite 
                helps finance teams improve efficiency, enhance decision-making, and drive 
                business growth with powerful automation and analytics capabilities.
            </p>
            <ul className="solution-features">
                <li>Automated financial processes</li>
                <li>Real-time reporting and analytics</li>
                <li>AI-powered forecasting</li>
                <li>Global compliance and risk management</li>
            </ul>
            <button className="solution-btn">Explore Finance Solutions</button>
            </div>
        </div>
        <div className="solutions-image">
            <div className="image-container"></div>
        </div>
    </section>
    );
};

export default Solutions;