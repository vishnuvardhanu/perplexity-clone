import React, { useContext, useRef } from "react";
import { AppContext } from "../context/ContextProvider";
import art from "../styles/article.module.css";
import ArticleHeader from "../components/ArticleHeader";
import Sources from "../components/Sources";
import ExtraSources from "../components/ExtraSources";
import ScrollSpy from "../components/ScrollSpy";

function Article() {
  const { currentArticle, setCurrentArticle } = useContext(AppContext);
  const content = currentArticle.content;
  const scrollContainerRef = useRef(null);

  return (
    <div className={art.pg} ref={scrollContainerRef}>
      <ArticleHeader heading={currentArticle.title.text} />
      <div className={art.contentbox}>
        <div className={art.introimg}>
          <img src={currentArticle.title.img} alt="Image Not found" />
        </div>
        <div className={art.ctntbox}>
          <div className={art.content}>
            <p className={art.title}>{currentArticle.title.text}</p>
            {/* Author Information and meta data */}
            <div className={art.athrinfo}>
              {/* Author profile */}
              <div className={art.athr}>
                <img src={currentArticle.profile} alt="" />
                <span>
                  <p>Curated by {currentArticle.author}</p>
                  <p>2 min read</p>
                </span>
              </div>
              {/* meta data */}
              <div className={art.mtdt}>
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    height={12}
                    data-prefix="far"
                    data-icon="clock"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                    ></path>
                  </svg>
                  <p>{currentArticle.md.time}</p>
                </span>
                <span>
                  <svg
                    aria-hidden="true"
                    height={12}
                    focusable="false"
                    data-prefix="far"
                    data-icon="eye"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                    ></path>
                  </svg>
                  <p>{currentArticle.md.views}</p>
                </span>
                <span>
                  <svg
                    aria-hidden="true"
                    height={12}
                    focusable="false"
                    data-prefix="far"
                    data-icon="code-fork"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 35.8-23.5 66.1-56 76.3V192c0 22.1 17.9 40 40 40H304c22.1 0 40-17.9 40-40V156.3c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V192c0 48.6-39.4 88-88 88H248v75.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V280H144c-48.6 0-88-39.4-88-88V156.3C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                    ></path>
                  </svg>
                  <p>{currentArticle.md.followups}</p>
                </span>
              </div>
            </div>
            {/*Introduction*/}
            <div className={art.introduction}>
              <span>{currentArticle.introduction.charAt(0)}</span>
              {currentArticle.introduction.slice(1)}
            </div>
            <Sources
              sources={currentArticle.sources}
              extra={currentArticle.sourcesextra}
            />

            <div className={art.articlecontent} ref={scrollContainerRef}>
              {content.map((c, index) => (
                <div key={index} className={art.data}>
                  <span className={art.dthd} id={`heading${index + 1}`}>
                    {c.heading}
                  </span>
                  {c.img && (
                    <img src={c.img} className={art.hdimg} alt={c.heading} />
                  )}
                  <p className={art.dtdesc}>{c.description}</p>
                  {c.points.length > 0 && (
                    <ul className={art.list}>
                      {c.points.map((point, pointIndex) => (
                        <li key={pointIndex} className={art.pt}>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ExtraSources sources={currentArticle.sources} />
                </div>
              ))}
            </div>
          </div>
          <ScrollSpy
            content={content}
            scrollContainerRef={scrollContainerRef}
          />
        </div>
      </div>
    </div>
  );
}

export default Article;
