import React from "react";
import { Link } from "gatsby";

export default function Home() {
    return (
        <div>
            <div className="content-wrapper" id="name-title">
                <h1>Sophie Müller-Uibrig</h1>
                <h2 id="position">Junior Web Developer</h2>
            </div>
            <div id="circle"></div>
            <div className="links-wrapper">
                <Link to="/about/">about</Link>
                <a
                    href="https://github.com/smuibrig"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a href={"/CV.pdf"} download="CV-sophie-mueller-uibrig.pdf">
                    CV
                </a>
                <a href="https://www.linkedin.com/in/sophiemulleruibrig/">
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
