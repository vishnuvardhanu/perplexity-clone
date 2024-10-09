import React from "react";
import Top from "../assets/data/top.json";
import art from "../styles/articles.module.css";
import { useNavigate } from "react-router-dom";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

function Articles({ selectedCategory }) {
  
  return (
    <div className={art.content}>
      {
        Top.map((article) =>
        article.id % 4 === 0 ? (
          <BigCard article={article} />
        ) : (
          <SmallCard article={article} />
        )
      )}
    </div>
  );
}

export default Articles;
