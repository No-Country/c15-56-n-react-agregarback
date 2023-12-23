import { useState } from "react";
import { Link } from "react-router-dom";
import "./employments.css";
import Modal from "../../components/Modal";

export default function Employments() {
  const [text, setText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const modalFunc = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className="container-employ">
      <div className="main-employ">
        <span className="const-title-search">
          <h1 className="title-employ">
            Find your dream jobs through{" "}
            <span style={{ color: "#4466FB" }}>HereMeNow</span> easily!
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="search-employ"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </span>
        <img src="maletin.svg" alt="Maletin" className="maletin-employ" />
      </div>
      <div className="container-checkboxes">
        <div className="containerjob-employ">
          <img
            src="frontendicon.png"
            alt="Front-End"
            className="iconjobs-employ"
          />
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxfront"
              className="input-checkbox"
            />
            Front-End
          </label>
        </div>
        <div className="containerjob-employ">
          <img
            src="backendicon.png"
            alt="Back-End"
            className="iconjobs-employ"
          />
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxback"
              className="input-checkbox"
            />
            Back-End
          </label>
        </div>
        <div className="containerjob-employ">
          <img
            src="fullstackicon.png"
            alt="Full-Stack"
            className="iconjobs-employ"
          />
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxfull"
              className="input-checkbox"
            />
            Full-Stack
          </label>
        </div>
        <div className="containerjob-employ">
          <img src="uxuicon.png" alt="UX/UI" className="iconjobs-employ" />
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxuxui"
              className="input-checkbox"
            />
            UX/UI
          </label>
        </div>
        <div className="containerjob-employ">
          <img
            src="testingqaicon.png"
            alt="Testing QA"
            className="iconjobs-employ"
          />
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxqa"
              className="input-checkbox"
            />
            Testing/QA
          </label>
        </div>
        <div className="containerjob-employ">
          <img src="devops.png" alt="DevOps" className="iconjobs-employ" />
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxdevsops"
              className="input-checkbox"
            />
            DevOps
          </label>
        </div>
        <div className="containerjob-employ">
          <img
            src="pmicon.png"
            alt="Project Manager"
            className="iconjobs-employ"
          />
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxpm"
              className="input-checkbox"
            />
            Project Manager
          </label>
        </div>
      </div>
      <section className="cont-all-employs">
        <div className="vista-employ">
          <h1 className="title-vista-employ">Desarrollador Full-Stack MERN</h1>
          <div className="vista-employ-columns">
            <p className="team-vista-employ">Maximo Team</p>
            <div className="salary-employ">
              <img
                src="icSalary.svg"
                alt="Icon Salary"
                className="icon-cash-local"
              />
              <span>
                <p className="salary-vista-employ">$14.000 - $25.000</p>
                <p className="paysalary-vista-employ">Monthly salary</p>
              </span>
            </div>
            <div className="location-employ">
              <img
                src="icLocation.svg"
                alt="Icon Location"
                className="icon-cash-local"
              />
              <span>
                <p className="locat-vista-employ">London - England</p>
                <p className="type-vista-employ">Remote/Hybrid</p>
              </span>
            </div>
            <img src="Favorito.svg" alt="Icon Favorito" />
            <a href="#" className="btndetail-vista-emloy">
              <Link to={"/employments-details"}>More details</Link>
            </a>
            <a href="" className="btnaplly-vista-employ" onClick={modalFunc}>
              Apply Now
            </a>
          </div>
        </div>
        <div className="vista-employ">
          <h1 className="title-vista-employ">Lead UI/UX Designer</h1>
          <div className="vista-employ-columns">
            <p className="team-vista-employ">Gonzales Azul</p>
            <div className="salary-employ">
              <img
                src="icSalary.svg"
                alt="Icon Salary"
                className="icon-cash-local"
              />
              <span>
                <p className="salary-vista-employ">$14.000 - $25.000</p>
                <p className="paysalary-vista-employ">Monthly salary</p>
              </span>
            </div>
            <div className="location-employ">
              <img
                src="icLocation.svg"
                alt="Icon Location"
                className="icon-cash-local"
              />
              <span>
                <p className="locat-vista-employ">London - England</p>
                <p className="type-vista-employ">Remote/Hybrid</p>
              </span>
            </div>
            <img src="Favorito.svg" alt="Icon Favorito" />
            <a href="#" className="btndetail-vista-emloy">
              <Link to={"/employments-details"}>More details</Link>
            </a>
            <a href="#" className="btnaplly-vista-employ" onClick={modalFunc}>
              Apply Now
            </a>
          </div>
        </div>
        <div className="vista-employ">
          <h1 className="title-vista-employ">Desarrollador Full-Stack JAVA</h1>
          <div className="vista-employ-columns">
            <p className="team-vista-employ">Maximo Team</p>
            <div className="salary-employ">
              <img
                src="icSalary.svg"
                alt="Icon Salary"
                className="icon-cash-local"
              />
              <span>
                <p className="salary-vista-employ">$14.000 - $25.000</p>
                <p className="paysalary-vista-employ">Monthly salary</p>
              </span>
            </div>
            <div className="location-employ">
              <img
                src="icLocation.svg"
                alt="Icon Location"
                className="icon-cash-local"
              />
              <span>
                <p className="locat-vista-employ">London - England</p>
                <p className="type-vista-employ">Remote/Hybrid</p>
              </span>
            </div>
            <img src="Favorito.svg" alt="Icon Favorito" />
            <a href="#" className="btndetail-vista-emloy">
              <Link to={"/employments-details"}>More details</Link>
            </a>
            <a href="#" className="btnaplly-vista-employ" onClick={modalFunc}>
              Apply Now
            </a>
          </div>
        </div>
        <div className="vista-employ">
          <h1 className="title-vista-employ">Desarrollador PHP</h1>
          <div className="vista-employ-columns">
            <p className="team-vista-employ">Maximo Team</p>
            <div className="salary-employ">
              <img
                src="icSalary.svg"
                alt="Icon Salary"
                className="icon-cash-local"
              />
              <span>
                <p className="salary-vista-employ">$14.000 - $25.000</p>
                <p className="paysalary-vista-employ">Monthly salary</p>
              </span>
            </div>
            <div className="location-employ">
              <img
                src="icLocation.svg"
                alt="Icon Location"
                className="icon-cash-local"
              />
              <span>
                <p className="locat-vista-employ">London - England</p>
                <p className="type-vista-employ">Remote/Hybrid</p>
              </span>
            </div>
            <img
              src="Favorito.svg"
              alt="Icon Favorito"
              className="max-w-[54] max-h-[54px]"
            />
            <a href="#" className="btndetail-vista-emloy">
              <Link to={"/employments-details"}>More details</Link>
            </a>
            <a href="#" className="btnaplly-vista-employ" onClick={modalFunc}>
              Apply Now
            </a>
          </div>
        </div>
      </section>
      <div className="navigation-employ">
        <a href="#" className="btn-nav-employ">
          {"<< Previous"}
        </a>
        <div className="nav-num-employ">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <a href="#" className="btn-nav-employ">
          {"Next >>"}
        </a>
      </div>
      <Modal isOpen={modalOpen} isClosed={() => setModalOpen(false)} />
    </div>
  );
}
