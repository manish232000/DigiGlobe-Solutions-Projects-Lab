import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import Card from '../Card/Card';
import { MY_HEADERS } from '../../constant';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const boxRef = useRef(null);
  let url="192.168.31.81:3000/api/pet";
  let url2='https://petadoptionweb.vercel.app/api/pet';
  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(url2, {
          method: "GET",
          headers: {
            "API_KEY": "prashik_bahadure",
            ...MY_HEADERS,
          }
        });
        
        
        const data = await response.json();
        

        setTestimonials(data);
         // Assuming your API returns an array of testimonials
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array means this runs once on mount

  const btnPressPrev = () => {
    const box = boxRef.current;
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
    }
  };

  const btnPressNext = () => {
    const box = boxRef.current;
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
    }
  };

  return (
    <div id='testi'>
      <button id='leftbtn' onClick={btnPressPrev}>&lt;</button>
      <div id="innerT" ref={boxRef}>
        {testimonials.map((testimonial, index) => (
          
          <Card
            id={testimonial._id}
            key={testimonial.id || index} // Use index as a callback if id is not available
            img={testimonial.imgURL}
            name={testimonial.name}
            age={testimonial.age}
            color={testimonial.color}
            breed={testimonial.breed}
            description={testimonial.description}
            image={testimonial.imgURL}
          />
        ))}
        
       
      </div>
      <button id='rightbtn' onClick={btnPressNext}>&gt;</button>
    </div>
  );
};

export default Testimonials;
