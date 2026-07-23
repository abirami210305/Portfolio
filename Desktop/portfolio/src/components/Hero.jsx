import profile from "../assets/profile.jpg";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Hero() {
  return (
    <section className="hero" id="home">

      <img
        src={profile}
        alt="Abirami Elangovan"
        className="profile-image"
      />

      <h3>👋 Hello, I'm</h3>

      <h1>Abirami Elangovan</h1>

      <h2>Full Stack Developer</h2>

      <p>
       Java • Spring Boot • React • MySQL • JavaScript
      </p>
      <p className="hero-desc">
I enjoy building responsive web applications and continuously learning modern technologies to solve real-world problems.
</p>

      <div className="hero-buttons">
    <a href="/resume.pdf" download className="btn">
        📄 Download Resume
    </a>

    <a href="#contact" className="btn">
        📩 Contact Me
    </a>
</div>
      <div className="social-icons">

  <a
    href="https://github.com/abirami210305"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/abirami-elangovan"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>

  <a href="mailto:abiramiabiramielango@gmail.com">
    <FaEnvelope />
  </a>

</div>
    </section>
  );
}

export default Hero;