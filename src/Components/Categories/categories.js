import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import catImg1 from '../../images/slider_img4.jpg';
import catImg2 from '../../images/slider_img5.jpg';
import catImg3 from '../../images/slider_img6.jpg';
import catImg4 from '../../images/slider_img2.jpg';
import styled from 'styled-components';

const Categories = () => {
    const CategoriesSection = styled.section`
        .catgory_box{
            height: 100%;
            display:flex;
            flex-direction: column;
            border-radius: 4px;
            overflow: hidden;
            transition: all 1.1s ease;
            :hover{
                transform: translateY(-10px);
                img{
                    transform: scale(1.3);
                }
            }
            .category_img {
                overflow: hidden;
                img {
                    height: 200px !important;
                    width: 100%;
                    object-fit: cover;
                    display: block;
                    transition: all 2.5s ease;
                }
            }
            .category_content{
                flex: 1;
                padding: 20px;
                p{
                    font-size: 14px;
                }
                .cusbtn{
                    font-size: 14px;
                    text-transform: uppercase;
                    font-weight: 500;
                    padding: 7px 25px
                }
            }
        }
    `;
    return (
        <>
            <CategoriesSection className='py-5'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='cusheading text-center pb-4'>
                                <h2 className='fw-bolder'>
                                    <span className='me-2 pb-1 align-text-bottom'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/msoeawqm.json"
                                            trigger="loop"
                                            colors="primary:#121331,secondary:#08a88a">
                                        </lord-icon>
                                    </span>
                                    Categories
                                </h2>
                            </div>
                        </Col>
                        <Col md={3} className='my-3'>
                            <div className='catgory_box shadow'>
                                <div className='category_img'>
                                    <img src={catImg1} alt='Category' className='img-fluid' />
                                </div>
                                <div className='category_content'>
                                    <h5>Category Name</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <Link to="#" className="btn btn-primary cusbtn">View Item</Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className='my-3'>
                            <div className='catgory_box shadow'>
                                <div className='category_img'>
                                    <img src={catImg2} alt='Category' className='img-fluid' />
                                </div>
                                <div className='category_content'>
                                    <h5>Category Name</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <Link to="#" className="btn btn-primary cusbtn">View Item</Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className='my-3'>
                            <div className='catgory_box shadow'>
                                <div className='category_img'>
                                    <img src={catImg3} alt='Category' className='img-fluid' />
                                </div>
                                <div className='category_content'>
                                    <h5>Category Name</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <Link to="#" className="btn btn-primary cusbtn">View Item</Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className='my-3'>
                            <div className='catgory_box shadow'>
                                <div className='category_img'>
                                    <img src={catImg4} alt='Category' className='img-fluid' />
                                </div>
                                <div className='category_content'>
                                    <h5>Category Name</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <Link to="#" className="btn btn-primary cusbtn">View Item</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </CategoriesSection>
        </>
    )
};

export default Categories;