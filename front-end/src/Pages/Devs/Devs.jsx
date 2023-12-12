import { useState } from "react";
import "./devs.css";

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
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxfront"
              className="input-checkbox"
            />
            Front-End
          </label>
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxback"
              className="input-checkbox"
            />
            Back-End
          </label>
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxfull"
              className="input-checkbox"
            />
            Full-Stack
          </label>
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxuxui"
              className="input-checkbox"
            />
            UX/UI
          </label>
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxqa"
              className="input-checkbox"
            />
            Testing/QA
          </label>
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxdevsops"
              className="input-checkbox"
            />
            DevOps
          </label>
          <label className="label-checkbox">
            <input
              type="checkbox"
              name="checkboxpm"
              className="input-checkbox"
            />
            Proyect Manager
          </label>
        </div>
      </div>
      <div className="image-devs">
        <div className="profile-dev">
          <img src="alejocabrera.svg" alt="Carlos" />
          <p className="name-dev">Alejo Hurtado</p>
          <p className="work-dev">Front-End</p>
        </div>
        <div className="profile-dev">
          <img src="andoni.svg" alt="Alberto" />
          <p className="name-dev">Adoni Creed</p>
          <p className="work-dev">Testing QA</p>
        </div>
        <div className="profile-dev">
          <img src="iban.svg" alt="Freddy" />
          <p className="name-dev">Fernando Alonso</p>
          <p className="work-dev">UX/UI</p>
        </div>
        <div className="profile-dev">
          <img src="juan.svg" alt="Salomon" />
          <p className="name-dev">Keki Lombo</p>
          <p className="work-dev">Web Designer</p>
        </div>
        <div className="profile-dev">
          <img src="soledad.svg" alt="Contreras" />
          <p className="name-dev">Salomon Contreras</p>
          <p className="work-dev">Proyect Manager</p>
        </div>
      </div>
    </div>
  );
}
