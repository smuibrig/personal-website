import React, { useEffect } from "react";
import { setColor, palette } from "../utils";

export default function About() {
    useEffect(() => {
        const links = document.querySelectorAll(".color-link");
        links.forEach((l) => {
            l.style.color = setColor(palette);
        });
    });

    return (
        <div>
            <div className="content-wrapper">
                <h3>About</h3>
                <p className="about-section">
                    My love for coding first sparked while finishing my{" "}
                    <a
                        className="color-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.uni-potsdam.de/de/studium/studienangebot/masterstudium/master-a-z/linguistik-kommunikation-variation-mehrsprachigkeit-master"
                    >
                        MA in Communications and Linguistics
                    </a>{" "}
                    when I enrolled in a Computational Linguistics course which
                    entailed language processing with Python.
                </p>
                <p className="about-section">
                    After gaining some professional experience in Marketing and
                    Communications in the Berlin tech sector, I realised that I
                    would like to learn the craft of building web applications
                    myself.
                </p>
                <p className="about-section">
                    I quit my job and fully committed to learning how to
                    program. As a Linguist, I put careful consideration into
                    which programming language to focus on. JavaScript made the
                    cut: it is the core technology that empowers interactive web
                    applications, both on the frontend and server side with
                    Node.js.
                </p>
                <p className="about-section">
                    Since Web technologies, frameworks and libraries are vast
                    and numerous, I sought guidance in my study endeavour and
                    after researching different alternatives, I enrolled at{" "}
                    <a
                        className="color-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.spiced-academy.com/en"
                    >
                        SPICED Academy
                    </a>{" "}
                    , an intense three months bootcamp based in Berlin.
                </p>
                <p className="about-section">
                    After building my first{" "}
                    <a
                        href="https://jump-petition.herokuapp.com/register"
                        className="color-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        full stack web apps
                    </a>
                    , working with{" "}
                    <a
                        href="https://github.com/smuibrig/millennial-terminal"
                        className="color-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        third party APIs
                    </a>{" "}
                    and using frontend frameworks such as React.js, Vue.js and
                    Gatsby, I'm ready to learn more on the job from experienced
                    colleagues while helping the team I’d join make steady
                    progress on their goals. Please have a look at some of my
                    previous code on{" "}
                    <a
                        href="https://github.com/smuibrig"
                        className="color-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <a
                    href="https://sophiecod.es"
                    className="color-link"
                    rel="noopener noreferrer"
                    id="go-back-link"
                >
                    Go back
                </a>
            </div>
        </div>
    );
}
