import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-color">
                    <div className="row">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <nav role="navigation" className="navbar navbar-inverse" id="nav_show">
                            <div id="nav">
                                <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                </div>
                                <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav site_nav_menu1">
                                    <li className="first "><Link to="/">Home</Link></li>
                                    <li><Link to="aboutus">About us</Link></li>
                                    <li><Link to="shipping_payment">Shipping &amp; Payment</Link></li>
                                    <li><Link to="privacypolicy">Privacy Policy</Link></li>
                                    <li><Link to="tac">Terms &amp; Conditions</Link></li>
                                    <li><Link to="contactus">Contact Us</Link></li>
                                </ul>
                                </div>
                            </div>
                            </nav>
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
