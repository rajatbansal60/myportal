import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import bg_img from "../../images/slider_img1.jpg";

export const Blog = () => {
  const BlogList = styled.div`
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
      <BlogList>
        <section className="pageTitle py-5">
          <Container className="py-md-4">
            <Row>
              <Col md={12}>
                <div className="pageTitle_inner">
                  <h2 className="mb-0 text-white fw-bolder fs-1">Blog</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="blogList py-4">
          <Container className="py-md-4">
            <Row>
              <Col md={12} className="my-3">
                <div className="blogbox">
                  <h2 className="mb-0 text-white fw-bolder fs-1">Blog Name</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </BlogList>
    </>
  );
};
