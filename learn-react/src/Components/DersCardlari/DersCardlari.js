import React from "react";
import "./DersCardlari.css";
import { Link } from "react-router-dom";

const DersCardlari = (props) => {
  const truncate = (str, num) =>
    str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str;

  return (
    <>
      <div className="col-md-4 col-sm-6 content-card">
        <div className="card-big-shadow ">
          <Link
            to="/Egzersiz"
            state={{ data: props.sinif, desun: props.dersAdi }}
          >
            <div
              className="card card-just-text"
              data-background="color"
              data-color={props.color}
              data-radius="none"
            >
              <div className="content">
                <h4 className="title">{props.dersAdi}</h4>
                <p className="description">{truncate(props.aciklama, 150)}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DersCardlari;
