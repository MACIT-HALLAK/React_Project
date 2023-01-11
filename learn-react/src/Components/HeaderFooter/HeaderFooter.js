import "./HeaderFooter.css";
import { Link } from "react-router-dom";

const HeaderFooter = (props) => {
  return (
    <div className="wrapper-cart">
      <div className="wrapper-element we">
        <h1>{props.name}</h1>
        <Link
          className="but-element"
          to="/Egzersiz"
          state={{ data: props.text, ders: props.id }}
        >
          Egzersiz
        </Link>
        <Link
          className="but-element"
          to="/Derslerim"
          state={{ ders: props.id, sinif: props.text }}
        >
          Konular
        </Link>
      </div>
      <div className="wrapper-element ">
        <img className="hf-img" src={props.img} />
      </div>
    </div>
  );
};

export default HeaderFooter;
