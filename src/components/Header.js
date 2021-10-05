import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ImgMetaMask from '../static/images/metamask.svg';
import ImgPhantom from '../static/images/phantom_black.svg';
import ImgCircle from '../static/images/circle.svg';
import ImgArtyste from '../static/images/artyste_logo.svg';
import { logout } from '../actions/userActions';

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header className="p-3 bg-gray-dark">
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className='text-white me-4 fs-4 '><img className="navbar-brand " src={ImgArtyste} alt="" height="40" />Artyste</div>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/galleries/">Galleries</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/artists/">Artists</Link>
                            </li>
                        </ul>

                        {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item className="fa fa-user-edit me-2">Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/signin'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}

                        <div className="text-end d-flex">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"/></button>
                                        <ul className="dropdown-menu dropdown-menu-end pt-2">
                                            <li><a className="dropdown-item" href=""><i className="fa fa-palette me-2"/>My Arts</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-user-edit me-2"/>My Account</a></li>
                                            <li><a className="dropdown-item" href=""><i className="fa fa-sign-out-alt me-2"/>Logout</a></li>
                                        </ul>
                            </div>
                        </div>

                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><img className='me-2' src={ImgCircle} height="25px"/>US$ 0.00</button>
                                            <ul className="dropdown-menu dropdown-menu-end pt-2">
                                                <li><a className="dropdown-item" href=""><i className="fa fa-wallet me-2"/>My Wallet</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-money-check-alt me-2"/>Add Funds</a></li>
                                            </ul>
                        </div>

                                <a className="btn btn-outline-secondary me-2 ">
                                    <img className="" alt="" src={ImgMetaMask} height="25px"/>
                                </a>

                                <a className="btn btn-outline-secondary">
                                    <img className="" alt="" src={ImgPhantom} height="25px"/>
                                </a>


                </div>


            </Container>
        </header>

    );
}

export default Header;
