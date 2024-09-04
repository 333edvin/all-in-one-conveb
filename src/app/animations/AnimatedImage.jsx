// components/RevealImage.js
"use client"; // For Next.js to render this component on the client side

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const RevealImage = ({ src, alt , clsname }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 }, // Starting state
      {
        opacity: 1,
        scale: 1,
        duration: 1, // Duration of the animation
        ease: "power3.out", // Easing function for smooth animation
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%', // Animation starts when the top of the image is 80% from the top of the viewport
          end: 'top 30%', // Animation ends when the top of the image is 30% from the top of the viewport
          scrub: true, // Tie the animation to the scroll position
          markers: false, // Set to true to visualize scroll trigger markers
        },
      }
    );
  }, []);

  return (
    <div className="relative">
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        className={clsname}
      />
    </div>
  );
};

export default RevealImage;
