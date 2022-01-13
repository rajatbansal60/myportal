import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginFrom = () => {
    const Cusform = styled.div`
        padding: 15px;
        h2 {
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            position: relative;
            padding-bottom: 5px;
            line-height: normal;
            :before{
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                height: 3px;
                width: 100px;
                bottom: 0;
                background: linear-gradient(45deg, #0d6efd, #212529);
                border-radius: 4px;
            }
            :after {
                content: '';
                position: absolute;
                left: 57%;
                transform: translateX(-50%);
                height: 3px;
                width: 7px;
                bottom: 0px;
                background: #fff;
                border-radius: 0;
            }
        }
        form{
            label{
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .5px;
                text-transform: uppercase;
                line-height: normal;
                margin-bottom: 1px;
            }
            .form-control{
                border: 1px solid #ddd;
                font-size: 14px;
                min-height: 40px;
                padding: 7px 15px;
                :focus{
                    box-shadow: 0 2px 12px rgba(0,0,0,.1);
                    border-color: #eee;
                }
            }
            button{
                font-size: 14px;
                font-weight: 400;
                text-transform: uppercase;
                letter-spacing: .5px;
                padding: 7px 45px;
                box-shadow: inset 0 -4px 1px rgba(0,0,0,.1);
                border-radius: 7px;
            }
        }
    `;
    return (
        <Cusform>
            <h2>Login</h2>
            <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-2 py-1" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <div className="login_btm">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Link to="#" className='ms-3 text-decoration-none'>Forget Password</Link>
                </div>
            </Form>
        </Cusform>
    )
}
