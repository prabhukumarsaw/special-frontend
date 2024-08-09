import React from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import RentalCard from "../Shared/RentalCard";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

const Tours = () => {
  return (
    <div>
      <CommonSection title="Car Rentals" />

      <section className="car-rentals-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h2>Our Perfect Cab Service</h2>
              <p>
                Our dedicated team offers the best taxi booking services in Chandigarh,
                providing an excellent travel experience. Hire our best cab services in
                Chandigarh, which give expert guidance and ensure the best-known car rental
                services in the city.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <RentalCard />
            </Col>
            {/* Add more RentalCard components here if needed */}
          </Row>
        </Container>
      </section>

      <Newsletter />
    </div>
  );
};

export default Tours;
