import "./styles/Card.css";
// import newLocal from "../assets/image 12.png";

function Card(props: any) {
  console.log(props);
  
  return (
    <>
      <div className="card">
        <img
          src={`/src/assets/${props.image}.png`}
          alt="card-img1"
          className="card-img"
        />
        <p className="card-ratings">
          <i className="fa-solid fa-star"></i> {props.rating}
          <span className="card-location">
            ({props.count}) - {props.country}
          </span>
        </p>
        <p className="card-title">{props.title}</p>
        <p className="card-amt">
          <span className="price">From ${props.rate}</span> / Person
        </p>
      </div>
    </>
  );
}

export default Card;
