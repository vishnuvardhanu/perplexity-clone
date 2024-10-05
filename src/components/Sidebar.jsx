import React from "react";
import sbstyl from "../styles/sidebar.module.css";
import bookimg from "../assets/BookLogo.png";
import headingimg from "../assets/Heading.png";
import close from "../assets/arrow.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const twitterlink = "https://x.com/perplexity_ai"
    const discordlink = "https://discord.com/invite/perplexity-ai"
  const navmenu = [
    {
      name: "Home",
      logo: (
        <svg
          height={16}
          aria-hidden="true"
          focusable="false"
          data-prefix="fak"
          data-icon="search"
          class="svg-inline--fa fa-search fa-fw fa-1x "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M236.8 288a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4zM434.9 398.7c-10.9 13.1-23 25.3-36.2 36.2l68.5 68.5 36.2-36.2-68.5-68.5zM236.8 32a204.8 204.8 0 1 1 0 409.6 204.8 204.8 0 1 1 0-409.6zm0 51.2a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 1 0 0-307.2z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Discover",
      path: "/discover",
      logo: (
        <svg
          aria-hidden="true"
          height={16}
          focusable="false"
          data-prefix="fak"
          data-icon="discover"
          class="svg-inline--fa fa-discover fa-fw fa-1x "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Library",
      logo: (
        <svg
          aria-hidden="true"
          height={16}
          focusable="false"
          data-prefix="fak"
          data-icon="library"
          class="svg-inline--fa fa-library fa-fw fa-1x "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M512 281.6H460.8V256C460.8 143 369 51.2 256 51.2S51.2 143 51.2 256v25.6H0V256C0 114.9 114.9 0 256 0S512 114.9 512 256v25.6zm-102.4 0H358.4V256c0-56.3-46.1-102.4-102.4-102.4s-102.4 46.1-102.4 102.4v25.6H102.4V256c0-84.8 68.8-153.6 153.6-153.6s153.6 68.8 153.6 153.6v25.6zm-51.2 51.2c-41.9 0-79 20.5-102.4 51.8c-23.4-31.4-60.5-51.8-102.4-51.8H0V384H153.6c42.2 0 76.8 34.6 76.8 76.8v25.6h51.2V460.8c0-42.2 34.6-76.8 76.8-76.8H512V332.8H358.4zM256 307.2a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Sign in",
      logo: (
        <svg
          aria-hidden="true"
          height={16}
          focusable="false"
          data-prefix="far"
          data-icon="right-to-bracket"
          class="svg-inline--fa fa-right-to-bracket fa-fw fa-1x "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className={sbstyl.bar}>
      {/* Top Section */}
      <div className={sbstyl.top}>
        {/* Header */}
        <div className={sbstyl.hd}>
          <span className={sbstyl.lg}>
            <img src={bookimg} height={40} alt="Book" />
            <img src={headingimg} width={105} alt="Heading" />
          </span>
          <span className={sbstyl.cls}>
            <img src={close} height={20} alt="" />
          </span>
        </div>

        {/* Search */}
        <div className={sbstyl.search}>
          <div className={sbstyl.srchbox}>
            <span>New Thread</span>
            <div className={sbstyl.opt}>
              <span>Ctrl</span>
              <span>I</span>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <div className={sbstyl.menulist}>
          {navmenu.map((nav, index) => (
            <div className={sbstyl.navitem} key={index}>
              {nav.path == "/discover" && (
                <span>
                  <NavLink to={nav.path} className={sbstyl.mnlink}>
                    {nav.logo}
                    Discover
                  </NavLink>
                </span>
              )}
              {nav.path != "/discover" && (
                <span>
                  {nav.logo}
                  <p>{nav.name}</p>
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Signup button */}
        <button className={sbstyl.btn}>Sign Up</button>
      </div>
      {/* Bottom Section */}
      <div className={sbstyl.btm}>
        {/* Try more info */}
        <div className={sbstyl.try}>
          <h4>Try Pro</h4>
          <p>Upgrade for image upload, smarter AI, and more Pro Search.</p>
        </div>
        {/* Learn more */}
        <div className={sbstyl.lrnmr}>
          <svg
            aria-hidden="true"
            height={16}
            focusable="false"
            data-prefix="far"
            data-icon="arrow-up-right"
            class="svg-inline--fa fa-arrow-up-right fa-fw fa-1x"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M328 96c13.3 0 24 10.7 24 24V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9L73 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l231-231H88c-13.3 0-24-10.7-24-24s10.7-24 24-24H328z"
            ></path>
          </svg>
          <p>Learn More</p>
        </div>
        {/* Socail links */}
        <div className={sbstyl.scl}>
          <div className={sbstyl.dwnld}>
            <a href="">
              <svg
                aria-hidden="true"
                height={14}
                focusable="false"
                data-prefix="far"
                data-icon="mobile-screen"
                class="svg-inline--fa fa-mobile-screen fa-fw fa-1x"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M64 448c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16V368H64v80zm0-128H320V64c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16V320zM16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                ></path>
              </svg>
              <p>Download</p>
            </a>
          </div>
          <div className={sbstyl.links}>
            <span>
              <a href={twitterlink}>
                <svg
                  aria-hidden="true"
                  height={14}
                  focusable="false"
                  data-prefix="fab"
                  data-icon="x-twitter"
                  class="svg-inline--fa fa-x-twitter fa-fw fa-1x "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  ></path>
                </svg>
              </a>
            </span>
            <span>
              <a href={discordlink}>
                <svg
                  aria-hidden="true"
                  height={14}
                  focusable="false"
                  data-prefix="fab"
                  data-icon="discord"
                  class="svg-inline--fa fa-discord fa-fw fa-1x "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
