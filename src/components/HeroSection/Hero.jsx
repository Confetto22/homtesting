import "./Hero.css";
import heroBg from "../../assets/images/josh-eckstein-nkUioaswtvM-unsplash.jpg";
import Navbar from "../Nav/Navbar";

const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero_content">
        <div className="hero_bg">
          <img src={heroBg} className="heroBg" />
          <h1 className="hero_heading">
            <span className="firstLetter">H</span>OUSE{" "}
            <span className="firstLetter">O</span>F{" "}
            <span className="firstLetter">M</span>YSTERY <br />
            CHAPEL INTERNATIONAL
          </h1>
          <h2 id="auto_type">home for the lost and broken</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
