import "./styles/HeroSec.css";
import gridImage from "../assets/Group.png";

function HeroSec() {
  return (
    <>
      <div className="herosec">
        <div className="hero-container">
          <img className="hero-img" src={gridImage} alt="Grid Image" />
        </div>
        <h1 className="hero-head">Online Experiences</h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem
          magni, aperiam veritatis error reprehenderit perspiciatis laborum
          reiciendis nam delectus.
        </p>
      </div>
    </>
  );
}

export default HeroSec;
