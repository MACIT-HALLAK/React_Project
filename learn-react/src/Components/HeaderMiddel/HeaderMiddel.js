import "./HeaderMiddel.css";
import slider from "../../assets/images/ilkokul.jpeg";
import slider1 from "../../assets/images/slider2.jpeg";
import slider2 from "../../assets/images/slider3.jpeg";

const HeaderMiddel = () => {
  return (
    <div className="wrapper-slider ">
      <div className="wrapper-content">
        <div className="header-text div-slider">
          <h3 className="header-title">Matematiği Öğren</h3>
          <h2 className="header-body">Hadi Başla</h2>
          <div className="header-button" htmlFor="able"></div>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide div-slider"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner img-raduis">
            <div className="carousel-item active">
              <img src={slider1} className="d-block w-100 diddi"/>
            </div>
            <div className="carousel-item">
              <img src={slider} className="d-block w-100 diddi"/>
            </div>
            <div className="carousel-item">
              <img src={slider2} className="d-block w-100 diddi"/>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddel;
