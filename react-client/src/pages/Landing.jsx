import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby echo park normcore hashtag, listicle narwhal vibecession
            flannel crucifix chillwave hot chicken. Vexillologist humblebrag +1
            unicorn gatekeep. Butcher helvetica yr, vaporware lumbersexual
            polaroid edison bulb roof party narwhal man braid tumblr shoreditch
            try-hard knausgaard. Fashion axe mlkshk hammock hexagon, neutral
            milk hotel sus master cleanse poke tattooed cornhole pour-over. Bruh
            wayfarers meggings meh hella, neutral milk hotel shoreditch seitan
            fingerstache. Microdosing tacos helvetica iPhone meh sriracha.
            Kombucha cloud bread palo santo gentrify raw denim hella skateboard
            green juice 8-bit vibecession vape blackbird spyplane you probably
            haven't heard of them.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
