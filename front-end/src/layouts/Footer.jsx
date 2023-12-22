import { Link, NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="section1-footer">
        <h1 className="title-footer">
          HereMe<span style={{ color: "#6BB5FB" }}>Now</span>!
        </h1>
        <div className="section1-nav-footer">
          <NavLink to={"/"} className="item-nav-footer">
            Home
          </NavLink>
          <NavLink to={"/employments"} className="item-nav-footer">
            Employments
          </NavLink>
          <NavLink to={"/devs"} className="item-nav-footer">
            Devs
          </NavLink>
          <NavLink to={"/aboutus"} className="item-nav-footer">
            About Us
          </NavLink>
        </div>
        <div className="links-contact-footer">
          <a href="/aboutus#contact">Contact Us</a>
          <a href="/aboutus#technicalsupport">Technical Support</a>
          <a href="/aboutus#frecuentlyquestions">Frequently Asked Questions</a>
          <a href="/aboutus#joinus">Join Our Team</a>
        </div>
        <div>
          <h2 className="title-nos-footer">No Country c15-56</h2>
          <ul className="names-footer">
            <li>
              <a
                href="https://www.linkedin.com/in/salomoncjl/"
                className="name-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contreras, Salomón
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alejo-hurtado-testa-53b14a216/"
                className="name-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hurtado Testa, Alejo
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/benzum566"
                className="name-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zumaran, Bejamin
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdidanielescobarm/"
                className="name-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escobar, Abdi Daniel
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section2-footer">
        <p className="copy-letras">
          &copy; 2023 HereMeNow! - All rights reserved.
        </p>
      </div>
    </div>
  );
}
