import React from "react";
import top from "../assets/data/top.json";
import ra from "../styles/remainingarticles.module.css";
import MiniCard from "./MiniCard";


function SuggestedArticles({ currentid,title }) {

  const remainigarticles = top
    .filter((item) => item.id !== currentid && title!==item.title.text)
    .slice(0, 4);

  return (
    <div className={ra.section}>
      <div className={ra.hd}>
        <span>
          <svg
            aria-hidden="true"
            height={18}
            focusable="false"
            data-prefix="fak"
            data-icon="page"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M369.6 313.6c-41.9 0-79 20.5-102.4 51.8c-23.4-31.4-60.5-51.8-102.4-51.8H36.8v51.2h128c42.2 0 76.8 34.6 76.8 76.8v25.6h51.2V441.6c0-42.2 34.6-76.8 76.8-76.8h128V313.6h-128zM292.8 32H241.6V211.2h51.2V32zM68.4 103.6L32.1 139.8 158.9 266.5l36.2-36.2L68.4 103.6zm397.9 .2L339.5 230.5l36.2 36.2L502.4 140l-36.2-36.2z"
            ></path>
          </svg>
        </span>
        <p>Keep Reading</p>
      </div>
      <div className={ra.list}>
        {remainigarticles.map((article, index) => (
            <MiniCard article={article} index={index}/>
        ))}
      </div>
      
    </div>
  );
}

export default SuggestedArticles;
