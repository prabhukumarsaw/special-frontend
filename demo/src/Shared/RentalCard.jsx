import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./Tourcard.css";
import crysta from '../assets/images/innova-crysta-1.jpg'

const RentalCard = () => {
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <Link to="">
            <img src={crysta} alt="tour" />
          </Link>
          <span>Featured</span>
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> Ranchi
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>
              <span>Not Rated</span>
            </span>
          </div>

          <h5 className="tour__title">
            <Link to="">
              xyz
            </Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              $90 <span>/Per Person</span>
            </h5>
            <button className="btn booking__btn">
              <Link to="">Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RentalCard;
