import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from './Context'

export default class TopMenu extends Component {
    static contextType = DataContext;

    state={
        userData: {}
    }
    componentDidMount() {
        const userData = localStorage.getItem('userData');
        let decoded = JSON.parse(userData);

        this.setState({
            userData: decoded
        })
    }

    render() {
        const {cart} = this.context;
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4" id="logo">
                        <Link to="/" className="logo-text">
                        Medi<span style={{color: '#39BAF0', fontSize: 40}}>STORE</span>
                        </Link>		
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={{display: 'none'}} id="navbar_hide">
                        <nav role="navigation" className="navbar navbar-inverse">
                        <Link to="/" style={{float: 'left'}} className="logo-text">
                            Medi<span style={{color: '#39BAF0', fontSize: 40}}>STORE</span>
                        </Link>
                        <div id="nav">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style={{background: '#8EBE08', border: 'none', marginRight: 0}}>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav site_nav_menu1">
                                <li className="first "><Link to="/">Home</Link></li>
                                <li><Link to="/aboutus">About us</Link></li>
                                <li><Link to="shipping_payment">Shipping &amp; Payment</Link></li>
                                <li><Link to="privacypolicy">Privacy Policy</Link></li>
                                <li><Link to="tac">Terms &amp; Conditions</Link></li>
                                <li><Link to="contactus">Contact Us</Link></li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                    </div>
                    <div className="col-md-4 col-md-offset-4 col-sm-offset-2  col-sm-6 col-xs-12">
                        <div id="top_right">
                        <div id="cart">
                            <div className="text">
                            <div className="img">
                                <Link to="cart"> <img className="img-responsive" src="images/cart.png" alt title width={26} height={27} /></Link>
                            </div><span>Your cart:</span>
                            {cart.length === 1 ? (
                                <span className="cart_items">({cart.length} item)</span>
                            ) : (
                                <span className="cart_items">({cart.length} items)</span>
                            )}
                            </div> 
                        </div>
                        <div id="bottom_right">
                            <div className="row">
                            <div className="col-md-6 col-xs-6 wd_auto">
                                <div className="left">
                                    {this.state.userData ? 
                                    <div className="login">
                                        <p>Hello, <b>{this.state.userData.name}</b></p>
                                    </div>
                                    : 
                                    <div className="login">
                                        <Link className="btn btn-default reg_button" to="login">Login</Link> 
                                        <Link className="btn btn-default reg_button" to="register">Signup</Link>
                                    </div>
                                    }
                                			
                                </div>
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
