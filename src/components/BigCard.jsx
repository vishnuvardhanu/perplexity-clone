import React from "react";
import art from "../styles/bigcard.module.css";

function BigCard({ article }) {
  const handleClick = () => {
    console.log(article)
  };
  return (
    <div
      itemType="button"
      onClick={handleClick}
      key={article.id}
      className={art.bgcard}
    >
      <div className={art.bgimg}>
        <img src={article.title.img} alt="Image Not Found" />
      </div>
      <div className={art.bgcontent}>
        <div className={art.hd}>{article.title.text}</div>
        <div className={art.intro}>{article.introduction}</div>
        <div className={art.ft}>
          <span>
            <img
              src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail"
              alt="p"
              height={20}
            />
            <p>{article.author}</p>
          </span>
          <span className={art.save}>
            <svg
              aria-hidden="true"
              height={14}
              focusable="false"
              data-prefix="far"
              data-icon="bookmark"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
              ></path>
            </svg>
            <span class={art.tip}>Save to bookmarks</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
