import "./aboutUs.css";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    // Extraer el fragmento de la URL
    const fragment = window.location.hash;

    // Verificar si hay un fragmento y si existe un elemento con ese ID
    if (fragment) {
      const targetElement = document.querySelector(fragment);
      if (targetElement) {
        // Desplazarse al elemento
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); // Ejecutar solo una vez al cargar la página

  return (
    <div className="container-about">
      <div className="main-about">
        <h1 className="title-about">
          We're HereMe<span>Now</span>!
        </h1>
        <p className="text-about">
          Welcome to HereMeNow!, where our mission is to connect talent with
          opportunity. Founded by Alejo, Salomon, and Daniel, our team is
          passionate about revolutionizing the way people find meaningful
          employment. <br />
          We envision a world where the job search process is not just a
          transaction but a transformative journey. We believe in empowering
          individuals to discover career paths that align with their passions
          and skills. <br />
          Embark on a journey of endless possibilities with HereMeNow!. Whether
          you're a job seeker ready to explore new horizons or an employer
          seeking top-tier talent, we invite you to be part of our story. <br />
          <br /> Discover. Connect. Thrive.
        </p>
      </div>
      <section className="contactcontainer-about" id="contact">
        <h1 className="titlecontact-about">
          Contact <span>Us!</span>
        </h1>
        <div className="contactform-about">
          <img src="contactus.svg" alt="Contact" className="imgcontact-about" />
          <form className="form-about">
            <label className="labelcontact-about">
              Your name
              <input type="text" className="inputcontact-about" required />
            </label>
            <label className="labelcontact-about">
              E-mail
              <input type="text" className="inputcontact-about" required />
            </label>
            <label className="labelcontact-about">
              Phone number
              <input type="number" className="inputcontact-about" required />
            </label>
            <label className="labelcontact-about">
              Let a message!
              <textarea
                cols="40"
                rows="5"
                className="inputcontact-about"
              ></textarea>
            </label>
            <div className="btndiv-about">
              <button className="btnready-about">Ready!</button>
            </div>
            <p className="redsocialsform-about">Follow Us on:</p>
            <div className="redsocialicons-about">
              <img
                src="google.png"
                alt="Google"
                style={{ width: "35px", height: "35px" }}
              />
              <img
                src="linkedinicon.png"
                alt="Linkedin"
                style={{ width: "35px", height: "35px" }}
              />
              <img
                src="instagramicon.png"
                alt="Instagram"
                style={{ width: "35px", height: "35px" }}
              />
              <img
                src="facebookicon.png"
                alt="Facebook"
                style={{ width: "35px", height: "35px" }}
              />
              <img
                src="whatsappicon.png"
                alt="WhatsApp"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
          </form>
        </div>
      </section>
      <section className="technical-about" id="technicalsupport">
        <h1 className="titletechnical-about">
          Any problems? <br /> Contact our <span>Technical Support</span>
        </h1>
        <div className="technicalsupport-about">
          <form className="formtechnical-about">
            <select className="selecttechnical-about">
              <option value="">Select your problem</option>
              <option value="">Platform</option>
              <option value="">Applications</option>
              <option value="">Employments</option>
              <option value="">Users</option>
            </select>
            <input
              type="email"
              placeholder="Your email"
              required
              className="inputtechnical-about"
            />
            <input
              type="text"
              placeholder="Your name"
              required
              className="inputtechnical-about"
            />
            <textarea
              cols={40}
              rows={5}
              placeholder="Talk about your problem"
              required
              className="inputtechnical-about"
            />
            <div className="btnform-about">
              <input
                type="button"
                value="Send Problem"
                className="btntechnical-about"
              />
            </div>
          </form>
          <img
            src="technicalicon.png"
            alt="Technical Support"
            className="imgtechnical-about"
          />
        </div>
      </section>
      <section className="frecuently-about" id="frecuentlyquestions">
        <h1 className="titlefrecu-about">Frecuently Asked Questions</h1>
        <div className="questions-about">
          <div className="questions1-about">
            <p className="titquestion-about">Question #1</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
            <p className="titquestion-about">Question #2</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
            <p className="titquestion-about">Question #3</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
            <p className="titquestion-about">Question #4</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
            <p className="titquestion-about">Question #5</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
          </div>
          <div className="questions2-about">
            <p className="titquestion-about">Question #6</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
            <p className="titquestion-about">Question #7</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
            <p className="titquestion-about">Question #8</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
            <p className="titquestion-about">Question #9</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
            <p className="titquestion-about">Question #10</p>
            <span className="texquestion-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              animi quis, consequuntur obcaecati quidem quasi autem sed ipsam
              necessitatibus sunt laboriosam qui, odio minus fuga cupiditate.
              Laudantium dignissimos dolor aliquid nemo dolorem. Fugiat tenetur
              ut obcaecati quidem placeat.
            </span>
          </div>
        </div>
      </section>
      <section className="joinus-about" id="joinus">
        <h1 className="titjoinus-about">Would you like work for HereMeNow?</h1>
        <p className="tit2joinus-about">Join Our Team!</p>
        <div className="containerformjoinus-about">
          <form className="formjoinus-about">
            <input
              type="text"
              placeholder="Your full name"
              className="inputjoinus-about"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              className="inputjoinus-about"
              required
            />
            <input
              type="number"
              placeholder="Your expected remuneration"
              className="inputjoinus-about"
              required
            />
            <textarea
              placeholder="Why do you want this jod?"
              className="inputjoinus-about"
              required
            />
            <div className="btncontainerjoinus-about">
              <input
                type="button"
                value="Send application"
                className="btnjoinus-about"
              />
            </div>
          </form>
        </div>
        <p className="textjoinusfin-about">Thanks for Trust on Us!</p>
      </section>
    </div>
  );
}
