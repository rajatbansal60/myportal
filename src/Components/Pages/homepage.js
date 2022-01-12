import React from 'react';
import Slider from '../Slider/slider';
import Categories from '../Categories/categories';
import { Container, Row, Col } from 'react-bootstrap';

export default function Homepage(){
    return(
        <>
            <Slider />
            <Categories />
        </>
    )
}