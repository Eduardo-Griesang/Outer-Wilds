import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Developed by Eduardo Griesang</h3>

      <nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-griesang-0b779921b/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                style={{ color: "#ff7d25" }}
              />
            </a>
          </li>

          <li>
            <a href="https://github.com/Eduardo-Griesang">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{ color: "#ff7d25" }}
              />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/eduardo_griesang/">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#ff7d25" }}
              />
            </a>
          </li>

          <li>
            <a href="mailto:eduardogriesang1@gmail.com?subject=Just saw the fanmade Outer Wilds website">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                style={{ color: "#ff7d25" }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
