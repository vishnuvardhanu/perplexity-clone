import React, { useState } from "react";
import s from "../styles/search.module.css";

function Search() {
  const [inp, setInp] = useState("");

  const handleChange = (e) => {
    setInp(e.target.value);
  };
  
  return (
    <div className={s.box}>
      <div className={s.inp}>
        <input
          type="text"
          value={inp}
          onChange={handleChange}
          placeholder="Ask follow-up "
        />
        <div className={s.things}>
          <div className={s.swtch}>
            <div className={s.ball}>.</div>
          </div>
          <p>Pro</p>
          <span className={`${s.icon} ${inp ? s.active : ""}`}>
            <svg
              aria-hidden="true"
              height={14}
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
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
