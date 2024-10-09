import React from "react";
import sr from "../styles/sources.module.css";

function Sources({ sources, sourcesextra }) {
  return (
    <div className={sr.cont}>
      {sources.map((source, index) => (
        <div key={index} className={sr.card}>
          <p className={sr.hd}>{source.heading}</p>
          <span className={sr.info}>
            <img src={source.img} alt="" />
            <p>{source.author}</p>
            <p>. {index+1}</p>
          </span>
          <span className={sr.tip}>
            <span className={sr.info}>
            <img src={source.img} alt="" />
            <p>{source.author}</p>
            </span>
            <p className={sr.hding}>{source.heading}</p>
            <p className={sr.desc}>{source.description}</p>
        </span>
        </div>
      ))}
      <div className={sr.card2}>
        More...
      </div>
    </div>
  );
}

export default Sources;
