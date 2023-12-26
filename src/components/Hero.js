// Import necessary hooks from React and motion component from framer-motion
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "./logo.svg";

// Define the Hero component
export default function Hero() {
  // Use a state variable to track whether the user has started scrolling
  const [scrollStarted, setScrollStarted] = useState(false);

  // Use an effect hook to add a scroll event listener when the component mounts
  useEffect(() => {
    // Define a function to handle the scroll event
    const handleScroll = () => {
      // If the user has scrolled down, set scrollStarted to true
      if (window.scrollY > 0) {
        setScrollStarted(true);
      } else {
        // If the user has scrolled back to the top, set scrollStarted to false
        setScrollStarted(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Render the component
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative">
      {/* Use the motion component from framer-motion to animate the logo */}
      <motion.div
        initial={{
          top: "50%",
          left: "50%",
          y: "-50%",
          x: "-50%",
          height: "50%",
        }} // Initial position and size of the logo
        animate={
          scrollStarted
            ? { top: "10%", left: "10%", y: "0%", x: "0%", height: "4rem" }
            : { top: "50%", left: "50%", y: "-50%", x: "-50%", height: "50%" }
        } // Position and size of the logo after the user starts scrolling
        transition={{ duration: 0.5 }} // Transition effect
        className="fixed" // CSS class
      >
        {/* The logo image */}
        <img src={logo} alt="Logo" className="h-full object-contain" />
      </motion.div>

      {/* Use the motion component from framer-motion to animate the text */}
      <motion.div
        initial={{
          top: "80%",
          right: "50%",
          y: "-50%",
          x: "50%",
          height: "auto",
          fontSize: "4rem",
        }} // Initial position and size of the text
        animate={
          scrollStarted
            ? {
                top: "10%",
                right: "10%",
                y: "0%",
                x: "0%",
                height: "4rem",
                fontSize: "2rem",
              }
            : {
                top: "80%",
                right: "50%",
                y: "-50%",
                x: "50%",
                height: "auto",
                fontSize: "4rem",
              }
        } // Position and size of the text after the user starts scrolling
        transition={{ duration: 0.5 }} // Transition effect
        className="fixed text-4xl sm:text-3xl md:text-2xl lg:text-4xl flex items-center" // CSS classes
      >
        {/* The text */}
        Gakko
      </motion.div>

      {/* Two divs to allow for scrolling */}
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
