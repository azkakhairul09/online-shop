import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer1">
                    <div className="container-fluid footer-background">
                    <div className="row">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-3 col-xs-12 txt-center">
                            <Link to="/">
                                <span className="logo-text">LOGOTEXT</span>
                            </Link>
                            </div>
                            <div className="col-md-7 col-sm-6 col-xs-12">
                            <div id="footer_menu">
                                <Link to="/">Home</Link> | 
                                <a href="#">About Us</a> | 
                                <a href="#">Shipping &amp; Payment</a> | 
                                <a href="#">Privacy Policy</a> <br className="disable_content" />
                                <a href="#">Terms &amp; Conditions</a> | 
                                <a href="#">Contact Us</a>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-12">
                            <div id="social_icons" className="pull-right">
                                <a href="#" className="btn btn-default reg_button"><i className="fa fa-facebook" /></a>
                                <a href="#" className="btn btn-default reg_button"><i className="fa fa-twitter" /></a>
                                <a href="#" className="btn btn-default reg_button"><i className="fa fa-yahoo" /></a>
                                <a href="#" className="btn btn-default reg_button"><i className="fa fa-envelope" /></a>
                                <a href="#" className="btn btn-default reg_button"><i className="fa fa-linkedin" /></a>	
                            </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="copyright">
                                {/*Do not remove Backlink from footer of the template. To remove it you can purchase the Backlink !*/}
                                © 2017 All right reserved. Designed by
                                <a href="http://www.themevault.net/" target="_blank">ThemeVault.</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
