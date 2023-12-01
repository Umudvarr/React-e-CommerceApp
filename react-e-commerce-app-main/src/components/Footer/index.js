import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by{" "}
        <a href="https://github.com/Umudvarr" target="_blank">
          <b>Umudvar</b>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
