// import { PropTypes } from "prop-types";
import "./ButtonBar.css";

// ButtonBar.propTypes = {
//   btnName: PropTypes.string,
//   href: PropTypes.string,
//   imageURL: PropTypes.string,
// };

export default function ButtonBar({ btnName, imageURL, href}) {

  
  return (
    <>
      {typeof btnName === "string" ? (
        <button className="relative hover:bg-gray-200 w-full h-full cursor-pointer">
          <a href={href}>{btnName}</a>
        </button>
      ) : (
        <button className="relative w-full h-full cursor-pointer">
          <a href={href}>
            <img
              src={imageURL}
              alt=""
              className="relative hover:w-10 hover:h-10 hover:left-5 h-11 top-0 w-11 left-4"
            />
          </a>
        </button>
      )}
    </>
  );
}


