import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import bg_img from "../../images/slider_img1.jpg";
import aboutImg from "../../images/slider_img4.jpg";

export default function About() {
  const AboutPage = styled.div`
    .pageTitle {
      background-position: center;
      background-size: cover;
      background-image: linear-gradient(
          90deg,
          rgb(7 113 194 / 80%),
          transparent
        ),
        url(${bg_img});
    }
  `;
  return (
    <>
      <AboutPage>
        <section className="pageTitle py-5">
          <Container className="py-md-4">
            <Row>
              <Col md={12}>
                <div className="pageTitle_inner">
                  <h2 className="mb-0 text-white fw-bolder fs-1">About</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="aboutText py-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="about_text">
                  <h2 className="mb-0 fw-bolder fs-1">Why Choose us</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum adipisci, earum vitae officiis modi accusantium
                    officia sit ab quam, deleniti quaerat eius harum blanditiis,
                    repudiandae dolores laudantium perferendis maxime
                    consectetur?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum adipisci, earum vitae officiis modi accusantium
                    officia sit ab quam, deleniti quaerat eius harum
                    blanditiis...
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="pageTitle_inner">
                  <img
                    src={aboutImg}
                    alt="Why Choose Us"
                    className="img-fluid d-block rounded"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="aboutText py-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="pageTitle_inner">
                  <img
                    src={aboutImg}
                    alt="Why Choose Us"
                    className="img-fluid d-block rounded"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="about_text">
                  <h2 className="mb-0 fw-bolder fs-1">Why Choose us</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum adipisci, earum vitae officiis modi accusantium
                    officia sit ab quam, deleniti quaerat eius harum blanditiis,
                    repudiandae dolores laudantium perferendis maxime
                    consectetur?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum adipisci, earum vitae officiis modi accusantium
                    officia sit ab quam, deleniti quaerat eius harum
                    blanditiis...
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AboutPage>
    </>
  );
}
