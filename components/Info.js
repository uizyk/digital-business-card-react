import React from "react";

export default function Info(){
    return(
        <section className="info">
            <img src="./images/IMG_4106.jpg"/>
            <div>
                <h2> Sam Kim </h2>
                <p> Front-End Developer </p>
                <p><a href="https://uizyk.github.io">uizyk.github.io</a></p>
            </div>
            <div className="buttons">
                    <button className="email-button">
                        <a href="mailto:uizykim@gmail.com">
                            <i class="fa-solid fa-envelope"></i> Email
                        </a>
                    </button>
                
                
                    <button className="linked-in-button">
                        <a href="https://www.linkedin.com/in/uizykim/">
                            <i class="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                    </button>
            </div>
        </section>
    )
}