import React, { useState, useContext, useEffect } from "react";
import art from "../styles/articles.module.css";
import { AppContext } from "../context/ContextProvider";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import top from "../assets/data/top.json";
import tech from "../assets/data/tech.json";
import finance from "../assets/data/finance.json";
import arts from "../assets/data/arts.json";
import sports from "../assets/data/sports.json";
import entertainment from "../assets/data/entertainment.json";

function Articles({ selectedCategory }) {
  const { currentArticle, setCurrentArticle } = useContext(AppContext);
  const [data, setData] = useState(top);
  
  useEffect(() => {
    if (selectedCategory === "Top") {
      setCurrentArticle(top);
      setData(top);
    } else if (selectedCategory === "Tech & Science") {
      setCurrentArticle(tech);
      setData(tech);
    } else if (selectedCategory === "Finance") {
      setCurrentArticle(finance);
      setData(finance);
    } else if (selectedCategory === "Arts & Culture") {
      setCurrentArticle(arts);
      setData(arts);
    } else if (selectedCategory === "Sports") {
      setCurrentArticle(sports);
      setData(sports);
    } else if (selectedCategory === "Entertainment") {
      setCurrentArticle(entertainment);
      setData(entertainment);
    } else {
      setCurrentArticle(top); // Default case
      setData(top);
    }
  }, [selectedCategory, setCurrentArticle]);

  return (
    <div className={art.content}>
      {Array.isArray(currentArticle) && currentArticle.length > 0 ? (
        currentArticle.map((article) =>
          article.id % 4 === 0 ? (
            <BigCard key={article.id} article={article} />
          ) : (
            <SmallCard key={article.id} article={article} />
          )
        )
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
}

export default Articles;
