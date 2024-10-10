import React from "react";
import art from "../styles/relatedarticles.module.css";

function RelatedArticles({ related }) {
  return (
    <div className={art.box}>
      <div className={art.hd}>
        <span>
          <svg
            aria-hidden="true"
            height={17}
            focusable="false"
            data-prefix="fak"
            data-icon="new-thread"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M467.2 115.2H313.6v51.2H467.2V115.2zm25.6 153.6H262.4V320H492.8V268.8zM262.4 115.2H32v51.2H262.4V115.2zm0 102.4H32v51.2H262.4V217.6zm0 102.4H32v51.2H262.4V320zm230.4 51.2H262.4v51.2H492.8V371.2zM416 64H364.8V217.6H416V64z"
            ></path>
          </svg>
        </span>
        <p>Related</p>
      </div>
      {related.map((p, index) => (
        <div className={art.point}>
          <p>{p}</p>
          <span>
            <svg
              aria-hidden="true"
              height={16}
              focusable="false"
              data-prefix="far"
              data-icon="plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"
              ></path>
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

export default RelatedArticles;
