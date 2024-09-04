
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AnimatedCard = ({ content, index ,title }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { x: -200, opacity: 0 },  
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%', // Animation starts when the top of the card is 80% from the top of the viewport
          end: 'top 60%', 
          scrub: 1, 
          markers: false, 
        },
        delay: index * 0.2, 
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="card text-white text-center p-4 "
      style={{ marginBottom: '1rem' }}
    >
    <p>{title}</p>
    <p>{content}</p>
    </div>
  );
};

export default AnimatedCard;
