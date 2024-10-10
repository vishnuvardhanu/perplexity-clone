import React,{useContext} from "react";
import sc from "../styles/smallcard.module.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/ContextProvider";

function SmallCard({ article }) {
  const navigate = useNavigate();
  const {currentArticle, setCurrentArticle} = useContext(AppContext);
  const handleClick = () => {
    setCurrentArticle(article);
    navigate('/article');
  };
  return (
    <div
      itemType="button"
      onClick={handleClick}
      key={article.id}
      className={sc.smlcard}
    >
      <div className={sc.smlimg}>
        <img src={article.title.img} alt="Image Not Found" />
      </div>
      <div className={sc.content}>{article.title.text}</div>
      <div className={sc.intro}>{article.introduction}</div>
      <div className={sc.ft}>
        <span>
          <img
            src={article.profile}
            alt="p"
            height={20}
          />
          <p>{article.author}</p>
        </span>
        <span className={sc.save}>
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
          <span class={sc.tip}>Save to bookmarks</span>
        </span>
      </div>
    </div>
  );
}

export default SmallCard;
