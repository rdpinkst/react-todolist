import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiCopyright } from "@mdi/js";
import "../styles/footerApp.css";

function FooterApp() {
  return (
    <footer className="footer-app">
      <p>
        Copyright <Icon className="copyright" path={mdiCopyright} title="copyright" size={.6} /> 2022
        rdpinkst 
        <a href="https://github.com/rdpinkst"><Icon path={mdiGithub} size={.6} /></a>
      </p>
    </footer>
  );
}

export default FooterApp;
