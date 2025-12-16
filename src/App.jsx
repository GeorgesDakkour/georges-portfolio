import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      {/* Tech Background */}
      <div className="particles">
        {[...Array(35)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">Georges Dakkour</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section" data-aos="fade-up">
        <h1>
          Hi, I'm <span>Georges Dakkour</span>
        </h1>
        <p>
          Full-Stack Developer passionate about building clean, modern, and
          scalable web apps.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science graduate who loves solving problems with code.
          I specialize in web and mobile development using React, Node.js, and
          Flutter.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="projects-grid">

          {/* Weather Project */}
          <div className="project-card" data-aos="fade-up">
            <h3>Weather Dashboard</h3>
            <p>Live weather tracking app built with API and modern UI.</p>
            <a
              href="https://weather-dashboard-flax-one.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">View Project</button>
            </a>
          </div>

          {/* E-Commerce Project */}
          <div className="project-card" data-aos="fade-up">
            <h3>E-Commerce</h3>
            <p>Full e-commerce website with products, cart, and checkout.</p>
            <a
              href="https://ecommerce-eight-puce-74.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">View Project</button>
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let's work together!</p>
        <p>
          Email:{" "}
          <a href="mailto:georgesdakkour11@gmail.com">
            georgesdakkour11@gmail.com
          </a>
        </p>
      </section>

      {/* Social Links */}
      <section className="socials" data-aos="fade-up">
        <a
          href="https://github.com/GeorgesDakkour"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/georgesdakkour"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a href="mailto:georgesdakkour11@gmail.com">
          <FaEnvelope size={28} />
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Georges Dakkour — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
