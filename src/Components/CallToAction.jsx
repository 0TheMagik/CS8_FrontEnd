import React from 'react';
import '../Styles/CallToAction.css';

const CallToAction = () => {
    return (
        <section className="cta">
            <div className="cta-content">
                <h2>Ready to Transform Your Business?</h2>
                <p>
                    Start your journey with Oracle Cloud today and experience enterprise-grade 
                    performance, security, and innovation. Our experts are ready to help you 
                    design the perfect solution for your business needs.
                </p>
                <div className="cta-buttons">
                    <button className="cta-primary-btn">Start Free Trial</button>
                    <button className="cta-secondary-btn">Contact Sales</button>
                </div>
            </div>
            <div className="cta-stats">
                <div className="stat-item">
                    <div className="stat-number">430,000+</div>
                    <div className="stat-text">Customers Worldwide</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">180+</div>
                    <div className="stat-text">Countries Covered</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">40+</div>
                    <div className="stat-text">Years of Innovation</div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;