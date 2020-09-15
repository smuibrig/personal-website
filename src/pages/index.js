import React from "react";
import { Link } from "gatsby";

export default function Home() {
    return (
        <div className="content-wrapper" id="center">
            <div className="content-wrapper" id="name-title">
                <h1>Sophie Müller-Uibrig</h1>
                <h2 id="position">Junior Web Developer</h2>
            </div>
            <div id="circle-wrapper">
                <div id="circle"></div>
            </div>
            <div id="short-bio">
                Hi! I'm Sophie a Junior Web Developer with a background in
                Linguistics. Frameworks and libraries I currently enjoy working
                with are: React.js, Gatsby, Vue.js, jQuery, Handlebars,
                Node.js/Express, Jest. I'm also in the process of learning
                TypeScript.
            </div>
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
                <a href="mailto:sophiemulleruibrig@gmail.com">mail</a>
            </div>
        </div>
    );
}
