import React from "react";
import sbstyl from "../styles/sidebar.module.css";

function NavbarBottomSection() {
  const twitterlink = "https://x.com/perplexity_ai";
  const discordlink = "https://discord.com/invite/perplexity-ai";
  return (
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
                  fill="currentColor"
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarBottomSection;
