import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImg1 from '../../images/slider_img1.jpg';
import sliderImg2 from '../../images/slider_img2.jpg';
import sliderImg3 from '../../images/slider_img3.jpg';
import styled from 'styled-components';

const Slider = () => {
    const SliderHome = styled.div`
        .carousel-item{
            position: relative;
            :before{
                position: absolute;
                top: 0;
                content: "";
                left: 0;
                height: 100%;
                width: 100%;
                background-image: linear-gradient(90deg,rgb(6 112 194 / 89%) 10%,transparent 70%);
            }
            img{
                height: 300px;
                object-fit: cover;
            }
            .carousel-caption{
                bottom: unset;
                top: 50%;
                transform: translateY(-50%);
                text-align: left;
                left: 10%;
                right: 10%;
            }
        }
    `;
    return (
        <>
            <SliderHome>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sliderImg1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sliderImg2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sliderImg3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </SliderHome>
        </>
    )
};

export default Slider;