import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="section1-footer">
        <h1 className="title-footer">
          HereMe<span style={{ color: "rgb(74, 255, 255)" }}>Now</span>!
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
        </div>
        <div className="links-contact-footer">
          <a href="#">Contactanos</a>
          <a href="#">Soporte tecnico</a>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Trabaja con nosotros</a>
        </div>
        <div>
          <h2 className="title-nos-footer">Us:</h2>
          <ul className="names-footer">
            <li>
              <a
                href="https://www.linkedin.com/in/salomoncjl/"
                className="name-footer"
                target="_blank"
              >
                Contreras, Salomon
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alejo-hurtado-testa-53b14a216/"
                className="name-footer"
                target="_blank"
              >
                Hurtado Testa, Alejo
              </a>
            </li>
            <li>
              <a href="" className="name-footer" target="_blank">
                Zumaran, Bejamin
              </a>
            </li>
            <li>
              <a href="" className="name-footer" target="_blank">
                Escobar, Abdi Daniel
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section2-footer">
        <p>&copy; 2023 HereMeNow! - All rights reserved.</p>
      </div>
    </div>
  );
}
