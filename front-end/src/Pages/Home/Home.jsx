import { useEffect, useRef, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { data } from "../../assets/dataimgs";

export default function Home() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  const goToSlide = (slideindex) => {
    setCurrentIndex(slideindex);
  };

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

      <section className="carousel-home">
        <h2 className="titcarousel-home">These brands trust us!</h2>
        <div className="maincarousel-home">
          <div className="slidercarousel-home">
            <div
              className="leftarrow-home"
              onClick={() => {
                scrollToImage("prev");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
            </div>
            <div
              className="rightarrow-home"
              onClick={() => {
                scrollToImage("next");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
            <div className="imgscarousel-home">
              <ul ref={listRef}>
                {data.map((item) => {
                  return (
                    <li key={item.id}>
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                        className="imgcarousel-home"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dotscontainer-home">
              {data.map((_, idx) => (
                <div
                  key={idx}
                  className={`dotcontaineritem-home ${
                    idx === currentIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(idx)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-caret-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
