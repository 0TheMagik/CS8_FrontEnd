import React from 'react';
import '../Styles/Testimonials.css';

const Testimonials = () => {
const testimonials = [
    {
        id: 1,
        quote: "Oracle Cloud has transformed our operations, reducing our IT costs by 30% while improving our system performance.",
        author: "Sarah Johnson",
        position: "CIO, Global Financial Services"
    },
    {
        id: 2,
        quote: "The flexibility and scalability of Oracle's cloud solutions have been critical to our digital transformation journey.",
        author: "Michael Chen",
        position: "VP of Technology, Healthcare Systems Inc."
    },
    {
        id: 3,
        quote: "Oracle's integrated applications helped us streamline our supply chain and improve customer satisfaction by 25%.",
        author: "Jennifer Rodriguez",
        position: "COO, International Retail Group"
    }
];

return (
    <section className="testimonials">
        <div className="testimonials-header">
            <h2>What Our Customers Say</h2>
            <p>Learn how Oracle is helping organizations worldwide accelerate innovation</p>
        </div>
        <div className="testimonials-container">
            {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
                <div className="quote-mark">"</div>
                <p className="quote">{testimonial.quote}</p>
                <div className="author-info">
                <div className="author-avatar"></div>
                <div className="author-details">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        <div className="client-logos">
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
        </div>
    </section>
    );
};

export default Testimonials;