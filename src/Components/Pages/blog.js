import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg_img from "../../images/slider_img1.jpg";
import BlogImg from "../../images/slider_img4.jpg";

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
              <Col md={3} className="my-3">
                <div className="blogbox shadow rounded-3 overflow-hidden">
                  <Link to="" className="blogImg">
                    <Image
                      src={BlogImg}
                      alt="Blog Image"
                      className="img-fluid d-block"
                    />
                  </Link>
                  <div className="blog_content p-3">
                    <h4>Blog Name</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <Link to="" className="btn btn-primary cusbtn px-3 btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={3} className="my-3">
                <div className="blogbox shadow rounded-3 overflow-hidden">
                  <Link to="" className="blogImg">
                    <img
                      src={BlogImg}
                      alt="Blog Image"
                      className="img-fluid d-block"
                    />
                  </Link>
                  <div className="blog_content p-3">
                    <h4>Blog Name</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <Link to="" className="btn btn-primary cusbtn px-3 btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={3} className="my-3">
                <div className="blogbox shadow rounded-3 overflow-hidden">
                  <Link to="" className="blogImg">
                    <img
                      src={BlogImg}
                      alt="Blog Image"
                      className="img-fluid d-block"
                    />
                  </Link>
                  <div className="blog_content p-3">
                    <h4>Blog Name</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <Link to="" className="btn btn-primary cusbtn px-3 btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={3} className="my-3">
                <div className="blogbox shadow rounded-3 overflow-hidden">
                  <Link to="" className="blogImg">
                    <img
                      src={BlogImg}
                      alt="Blog Image"
                      className="img-fluid d-block"
                    />
                  </Link>
                  <div className="blog_content p-3">
                    <h4>Blog Name</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <Link to="" className="btn btn-primary cusbtn px-3 btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </BlogList>
    </>
  );
};
