import React from 'react';
import './TestimonialsCarousel.css';

const testimonials = [
  { text: "DigiGlobal Solutions transformed our business!", author: "Client A", avatar: "https://i.pravatar.cc/150?img=1" },
  { text: "Outstanding service and support.", author: "Client B", avatar: "https://i.pravatar.cc/150?img=2" },
  { text: "Highly recommend for web and mobile app development.", author: "Client C", avatar: "https://i.pravatar.cc/150?img=3" },
];

const TestimonialsCarousel = () => {
  return (
    <div className="testimonials-carousel">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={testimonial.avatar} alt={`${testimonial.author}'s avatar`} className="avatar" />
          <p>"{testimonial.text}"</p>
          <span>- {testimonial.author}</span>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsCarousel;
