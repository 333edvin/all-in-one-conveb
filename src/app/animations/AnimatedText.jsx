// components/AnimatedText.js
"use client"; // For Next.js to render this component on the client side

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ lines, animationProps = {}, textstyle }) => {
  const textRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.1, // Adjust this to the desired visibility threshold
  });

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            duration: 1.8,
            ease: "power4.out",
            ...animationProps, 
          },
        });

        tl.fromTo(
          textRef.current.querySelectorAll(".line span"),
          { y: 100, skewY: 7 ,opacity:0}, // Starting state
          { y: 0, skewY: 0, stagger: { amount: 0.5 } ,opacity:1} // Ending state
        );
      }, textRef);

      // Clean up the GSAP context when the component unmounts
      return () => ctx.revert();
    }
  }, [inView, animationProps]);

  return (
    <div className="container mx-auto p-4" ref={(node) => {
      ref(node);
      textRef.current = node; // Make sure textRef is properly assigned
    }}>
      {lines.map((text, index) => (
        <div key={index} className="line overflow-hidden">
          <span className={`block ${textstyle}`}>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
