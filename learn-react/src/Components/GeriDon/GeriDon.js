import React from "react";
import "./GeriDon.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const GeriDon = () => {
  return (
    <div className="position-relative contan">
      <Link className="position-absolute geridon-icon" to="/">
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default GeriDon;
