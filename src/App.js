import "./App.css";
import React, { useState } from "react";
import Question from "./FAQS/Question";
import data from "./FAQS/data";
import VID from "./@lenstokxyz.mp4";
import POAP from "./poapicon.png";
import LOGO from "./LenstokLogo.png";
import ARROW from "./Arrowpoap.png";

const POAPFORM = "https://my.forms.app/form/63d3d150103d2e402d955c5d";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="App">
      <div>
        <headerup>
          <p>
            {" "}
            Currently in alpha, still lots of bugs.. happy for feedback🙏🌱
          </p>
        </headerup>

        <div id="icon-container">
          <span id="lens-follow-icon" data-handle="lenstokxyz" />
          <a
            href="https://twitter.com/lenstokxyz"
            className="fa fa-twitter"
            target="_blank"
            rel="noreferrer noopener"
            aria-hidden={true}
          />
          <a href={POAPFORM} target="_blank" rel="noreferrer" className="fa">
            <img src={POAP} alt="poapicon" className="poap" />
          </a>
          <img src={ARROW} width="42" height="62"></img>
        </div>

        <h1 className="gradient-text">LensTok</h1>

        <div className="toppara">
          <h3>
            A video sharing social media platform. tldr: decentralised TikTok
          </h3>
          <h3>Share your video content on your own terms!</h3>
        </div>

        <div className="container">
          <div className="button-container">
            <a
              href="https://lens-do-it.vercel.app/"
              className="top-button"
              target="_blank"
              rel="noreferrer"
            >
              1. Claim a .test handle
            </a>
            <p>↓</p>
            <a
              href="https://lenstok-gamma.vercel.app/"
              className="bottom-button"
              target="_blank"
              rel="noreferrer"
            >
              2. Play with the Dapp!
            </a>
          </div>
        </div>

        <video src={VID} autoplay loop muted width="65%" controls />

        <main>
          {/* The FAQ bit */}
          <div className="containerabc" style={{ marginBottom: "0rem" }}>
            <h3>FAQ's:</h3>
            <section className="info">
              {questions.map((question) => (
                <Question key={question.id} {...question} />
              ))}
            </section>
          </div>
        </main>

        <footer>
          <p style={{ lineHeight: "25px" }}>@lenstokxyz</p>
          <img src={LOGO} alt="logo" className="logo"></img>
        </footer>
      </div>
    </div>
  );
}

export default App;
