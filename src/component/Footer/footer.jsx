import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-5 ">
            <div className="container">
                <div className="row">
                    {/* Brand */}
                    <div className="col-md-3 mb-3">
                        <h4 className="fw-bold text-primary">MyShop</h4>
                        <p className="small">
                            Premium quality smartphones and accessories at the best prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-3">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-light text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="text-light text-decoration-none">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-light text-decoration-none">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-light text-decoration-none">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="col-md-3 mb-3">
                        <h5 className="fw-bold mb-3">Customer Service</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/faq" className="text-light text-decoration-none">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link to="/shipping" className="text-light text-decoration-none">
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link to="/policy" className="text-light text-decoration-none">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-light text-decoration-none">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-3 mb-3">
                        <h5 className="fw-bold mb-3">Stay Updated</h5>
                        <form>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email"
                                />
                                <button className="btn btn-primary" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <hr className="bg-light" />

                {/* Bottom Footer */}
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="mb-0 small">&copy; {new Date().getFullYear()} MyShop. All Rights Reserved.</p>
                    <div className="d-flex justify-content-center align-items-center gap-5">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light mx-2">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light mx-2">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light mx-2">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
