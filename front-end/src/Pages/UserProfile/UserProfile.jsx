import "./userProfile.css";

export default function UserProfile() {
  return (
    <div className="container-profile">
      <div className="user-profile">
        <div className="usersocial-profile">
          <img src="alejoc.svg" alt="Alejo Hurtado" className="img-profile" />
          <div className="usermedias-profile">
            <div className="redsocial-profile">
              <img src="linkedin.svg" alt="Linkedin" />
              <p>/alejohurtado</p>
            </div>
            <div className="redsocial-profile">
              <img src="github.svg" alt="GitHub" />
              <p>/alejohurtado</p>
            </div>
            <div className="redsocial-profile">
              <img src="personalweb.svg" alt="Personal Site" />
              <p>/alejohurtado</p>
            </div>
          </div>
        </div>
        <div className="userabout-profile">
          <h1 className="userjob-profile">Front-End</h1>
          <h2 className="username-profile">Alejo Hurtado</h2>
          <p className="usertextabout-profile">
            Hello! I am Alejo Hurtado, a web designer with a passion for
            creating captivating digital experiences. Throughout my career, I
            have had the privilege of working on various projects ranging from
            corporate websites to interactive applications. My approach is
            focused on merging functionality and aesthetics to deliver solutions
            that are not only visually appealing but also efficient and
            user-friendly.
          </p>
          <h3 className="userskills-profile">Skills</h3>
          <img src="logotechs.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
