import { useRef } from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const listRef = useRef();
  return (
    <div>
      <section className="container-home">
        <div className="home-text">
          <h1 className="h1-home">
            Find A <span className="color-green-white">Job</span> That{" "}
            <span className="color-green-white">Matches</span> Your Passion
          </h1>
          <button className="button-opportunities">
            <Link to={"/employments"}> See opportunities</Link>
          </button>
        </div>
      </section>
      {/*
      <section className="carousel-home">
        <h2 className="titcarousel-home">These brands trust us!</h2>
        <div className="maincarousel-home">
          <div className="slidercarousel-home">
            <div className="imgscarousel-home">
              <ul ref={listRef}>
                <li>
                  <img
                    src="accenture-logo-1.png"
                    alt="Accenture"
                    className="imgcarousel-home"
                  />
                </li>
                <li>
                  <img
                    src="Adidas-logo-1.png"
                    alt="Adidas"
                    className="imgcarousel-home"
                  />
                </li>
                <li>
                  <img
                    src="Glassdoor-Logo-1.png"
                    alt="Glassdoor"
                    className="imgcarousel-home"
                  />
                </li>
                <li>
                  <img
                    src="Globant-logo-1.png"
                    alt="Globant"
                    className="imgcarousel-home"
                  />
                </li>
                <li>
                  <img
                    src="LinkedIn-Logo-1.png"
                    alt="Linkedin"
                    className="imgcarousel-home"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
  </section>*/}
    </div>
  );
}
