import React, { useEffect, useState } from "react";
import art from "../styles/scrollspy.module.css";

function ScrollSpy({ content, scrollContainerRef }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const headings = [
        document.querySelector("#heading0"),
        document.querySelector("#heading1"),
        document.querySelector("#heading2"),
        document.querySelector("#heading3"),
        document.querySelector("#heading4"),
      ];

      let currentSection = "";

      headings.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const scrollTop = scrollContainer.scrollTop; 
          if (scrollTop >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
          }
        }
      });

      setActiveSection(currentSection);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll); // Attach scroll listener to the div
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll); // Cleanup
      }
    };
  }, [scrollContainerRef]); 
  return (
    <div className={art.sb}>
      <ul className={art.sbul}>
        <li className={`${activeSection === "heading0" ? art.active : ""} ${art.sbli}`}>
          <a href="#heading0"  className={art.sba}>Introduction</a>
        </li>
        <li className={`${activeSection === "heading1" ? art.active : ""} ${art.sbli}`}>
          <a href="#heading1" className={art.sba}>{content[0].heading}</a>
        </li>
        <li className={`${activeSection === "heading2" ? art.active : ""} ${art.sbli}`}>
          <a href="#heading2" className={art.sba}>{content[1].heading}</a>
        </li>
        <li className={`${activeSection === "heading3" ? art.active : ""} ${art.sbli}`}>
          <a href="#heading3" className={art.sba}>{content[2].heading}</a>
        </li>
        <li className={`${activeSection === "heading4" ? art.active : ""} ${art.sbli}`}>
          <a href="#heading4" className={art.sba}>{content[3].heading}</a>
        </li>
      </ul>
    </div>
  );
}

export default ScrollSpy;
