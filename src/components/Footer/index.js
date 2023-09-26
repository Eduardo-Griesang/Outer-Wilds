import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

const Footer = () => {
  const footer = useRef(null);
  const inview = useInView(footer, { once: true });

  const handleAnimation = useAnimation();

  useEffect(() => {
    if (inview) {
      handleAnimation.start("visible");
    }
  }, [inview]);

  return (
    <footer className="footer" ref={footer}>
      <motion.div
        className="footer-div"
        variants={{
          hidden: {opacity: 0, x: -90},
          visible: {opacity: 1, x: 0}
      }}
        transition={{ duration: 2, delay: 0.5 }}
        initial="hidden"
        animate={handleAnimation}
      >
        <h5>Developed by Eduardo Griesang</h5>

        <nav>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/eduardo-griesang-0b779921b/" aria-label="My Linkedin">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  style={{ color: "#ff7d25" }}
                />
              </a>
            </li>

            <li>
              <a href="https://github.com/Eduardo-Griesang" aria-label="My Git-Hub">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  style={{ color: "#ff7d25" }}
                />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/eduardo_griesang/" aria-label="My Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  style={{ color: "#ff7d25" }}
                />
              </a>
            </li>

            <li>
              <a href="mailto:eduardogriesang1@gmail.com?subject=Just saw the fanmade Outer Wilds website" aria-label="Send me an Email">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  style={{ color: "#ff7d25" }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </footer>
  );
};

export default Footer;
