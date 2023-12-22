import { useState } from "react";
import "./devs.css";
import { Link } from "react-router-dom";

export default function Devs() {
  const [text, setText] = useState("");

  return (
    <div className="container-devs">
      <h1 className="title-devs">
        Search your <span>candidates</span>
      </h1>
      <div className="search-devs">
        <input
          type="text"
          placeholder="Search"
          className="search-devsname"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="container-checkboxes-devs">
          <div className="containerjob-devs">
            <img
              src="frontendicon.png"
              alt="Front-End"
              className="iconjobs-devs"
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
          <div className="containerjob-devs">
            <img
              src="backendicon.png"
              alt="Back-End"
              className="iconjobs-devs"
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
          <div className="containerjob-devs">
            <img
              src="fullstackicon.png"
              alt="Full-Stack"
              className="iconjobs-devs"
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
          <div className="containerjob-devs">
            <img src="uxuicon.png" alt="UX/UI" className="iconjobs-devs" />
            <label className="label-checkbox">
              <input
                type="checkbox"
                name="checkboxuxui"
                className="input-checkbox"
              />
              UX/UI
            </label>
          </div>
          <div className="containerjob-devs">
            <img
              src="testingqaicon.png"
              alt="Testing QA"
              className="iconjobs-devs"
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
          <div className="containerjob-devs">
            <img src="devops.png" alt="DevOps" className="iconjobs-devs" />
            <label className="label-checkbox">
              <input
                type="checkbox"
                name="checkboxdevsops"
                className="input-checkbox"
              />
              DevOps
            </label>
          </div>
          <div className="containerjob-devs">
            <img
              src="pmicon.png"
              alt="Project Manager"
              className="iconjobs-devs"
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
      </div>
      <div className="image-devs">
        <div className="profile-dev">
          <Link to={"/dev-profile"}>
            <img src="alejocabrera.svg" className="img-devs" alt="Carlos" />
          </Link>
          <p className="name-dev">Alejo Hurtado</p>
          <p className="work-dev">Front-End</p>
        </div>
        <div className="profile-dev">
          <Link to={"/dev-profile"}>
            <img src="andoni.svg" className="img-devs" alt="Alberto" />
          </Link>
          <p className="name-dev">Adoni Creed</p>
          <p className="work-dev">Testing QA</p>
        </div>
        <div className="profile-dev">
          <Link to={"/dev-profile"}>
            <img src="iban.svg" className="img-devs" alt="Freddy" />
          </Link>
          <p className="name-dev">Fernando Alonso</p>
          <p className="work-dev">UX/UI</p>
        </div>
        <div className="profile-dev">
          <Link to={"/dev-profile"}>
            <img src="juan.svg" className="img-devs" alt="Salomon" />
          </Link>
          <p className="name-dev">Keki Lombo</p>
          <p className="work-dev">Web Designer</p>
        </div>
        <div className="profile-dev">
          <Link to={"/dev-profile"}>
            <img src="soledad.svg" className="img-devs" alt="Contreras" />
          </Link>
          <p className="name-dev">Belén Acosta</p>
          <p className="work-dev">Proyect Manager</p>
        </div>
      </div>
    </div>
  );
}
