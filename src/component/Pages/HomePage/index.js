import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import herobanner from "./assets/hero-banner.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <div className="headerMain">
        <div className="headerMain2">
          <div className="headerColOne">
            <h1>Perfect place for your business promotion✌️</h1>
            <p>
              Businesses generally promote their brand, products, and services
              by identifying audience.
            </p>
            <button>Get Started</button>
          </div>
          <div className="headerColTwo">
            <img src={herobanner} alt="jkd" />
          </div>
        </div>
      </div>
      {/* Header End  */}

      {/* Cta Starts */}
      <div className="ctaOneMainDiv">
        <div className="ctaOneHeading">
          <h2>How it works</h2>
          <p>
            Businesses generally promote their brand, products, and services by
            identifying audience.
          </p>
        </div>
        <div className="ctaOneMainDiv2">
          <div className="ctaOneMainDiv2Inner">
            <div className="ctaOneColOne ctaOneCol">
              <img src={img1} alt="" />
              <h3>Schedule appointment</h3>
              <p>
                Businesses generally promote their brand, products, and services
                by identifying audience or users.
              </p>
            </div>
            <div className="ctaOneColTwo ctaOneCol">
              <img src={img2} alt="" />
              <h3>Schedule appointment</h3>
              <p>
                Businesses generally promote their brand, products, and services
                by identifying audience or users.
              </p>
            </div>
            <div className="ctaOneColThree ctaOneCol">
              <img src={img3} alt="" />
              <h3>Schedule appointment</h3>
              <p>
                Businesses generally promote their brand, products, and services
                by identifying audience or users.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Cta Ends */}

      {/* about us starts  */}
      <div className="aboutMainContainer">
        <div className="aboutColOne"></div>
        <div className="aboutColTwo"></div>
      </div>

      {/* about us ends */}
    </>
  );
}
