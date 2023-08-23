import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { inView, motion, useAnimation, useInView } from "framer-motion";
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
          hidden: {opacity: 0, x: -100},
          visible: {opacity: 1, x: 0}
      }}
        transition={{ duration: 2, delay: 0.5 }}
        initial="hidden"
        animate={handleAnimation}
      >
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
      </motion.div>
    </footer>
  );
};

export default Footer;
