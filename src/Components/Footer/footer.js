import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(){
    return(
        <>
            <footer className="bg-dark py-3">
                <Container>
                    <Row>
                        <Col>
                            <p className="mb-0 text-center text-white">© Copyright 2022 Visiontrek. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}