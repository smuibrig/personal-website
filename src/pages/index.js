import React, { useEffect } from "react";
import { Link } from "gatsby";

export default function Home() {
    const palette = [
        "lightcoral",
        "lightsalmon",
        "lightseagreen",
        "lightskyblue",
        "lightpink",
    ];

    function color() {
        return palette[Math.floor(Math.random() * palette.length)];
    }

    useEffect(() => {
        const links = document.querySelectorAll(".color-link");
        links.forEach((l) => {
            l.style.color = color();
        });
    });

    return (
        <div className="content-wrapper" id="center">
            <div className="content-wrapper" id="name-title">
                <h1>Sophie Müller-Uibrig</h1>
                <h2 id="position">Junior Web Developer</h2>
            </div>
            <div id="circle-wrapper">
                <div id="circle">&lt;h1&gt;Hi!&lt;/h1&gt;</div>
            </div>
            <div id="short-bio">
                I'm Sophie a Junior Web Developer with a{" "}
                <Link className="color-link" to="/about/">
                    background
                </Link>{" "}
                in Linguistics. Find my code and latest projects on{" "}
                <a
                    href="https://github.com/smuibrig"
                    className="color-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                . To learn about my education and professional experience you
                can either download my{" "}
                <a
                    href={"/CV.pdf"}
                    className="color-link"
                    download="CV-sophie-mueller-uibrig.pdf"
                >
                    CV
                </a>
                , or visit my{" "}
                <a
                    className="color-link"
                    href="https://www.linkedin.com/in/sophiemulleruibrig/"
                >
                    LinkedIn
                </a>{" "}
                profile. Interested in working with me? Feel free to {"  "}
                <a
                    className="color-link"
                    href="mailto:sophiemulleruibrig@gmail.com"
                >
                    reach out
                </a>
                .
            </div>
        </div>
    );
}
