import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../Footer'
import Header from '../Header'
import TopMenu from '../TopMenu'

export default class Login extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            email: "",
            password: ""    
        };
  
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }
  
    onSubmit(e) {
        e.preventDefault();
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
  
        const urlLogin =
        "http://localhost:8090/pharmacy-olshop1/login";
  
        const data = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
  
        Axios.post(urlLogin, data, headers)
        .then((response) => {
            let res = response.data;
            localStorage.setItem('userData', JSON.stringify(res))
              
            toast.info('welcome ', 
            {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            className: "custom-toast",
            autoClose: 2000,
            })
            this.props.history.push("/");
            
        })
        .catch((error) => {
            console.log(error)
            toast.info("username or password is not valid.", 
            {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                className: "custom-toast",
                autoClose: 2000,
            })
        });
    }
    render() {
        return (
            <div>
                <div>
                    <TopMenu />
                    <Header />
                    <div id="site_content">
                    <div className="container">
                        <div className="row">
                            <aside className="col-sm-3 hidden-xs" id="column-left">
                            <div className="list-group">
                            <Link className="list-group-item" to="login">Login</Link> 
                            <Link className="list-group-item" to="register">Register</Link> 
                            <Link className="list-group-item" to="changepassword">Forgotten Password</Link>
                            <Link className="list-group-item" to="myaccount">My Account</Link>
                            <Link className="list-group-item" to="orderhistory">Order History</Link> 
                            <Link className="list-group-item" to="transactions">Transactions</Link> 
                            </div>
                            </aside>
                            <div className="col-sm-9" id="content">            
                            <div className="breadcrumbs">
                            <Link to="/"><i className="fa fa-home" /></Link>
                            <Link to="#">Login</Link>
                            </div>
                            <div className="contentText">
                            <h1>Welcome, Please Sign In</h1>
                            <div className="row">
                                <div className="col-sm-6">
                                {/*<div class="well">!*/}
                                <h2>New Customer</h2>
                                <p>I am a new customer.</p>
                                <p>By creating an account at steroid-shop.to you will be able to shop faster, be up to date on an orders status,
                                    and keep track of the orders you have previously made.</p>
                                <Link className="btn btn-primary reg_button" to="register">
                                    <i className="fa fa-caret-right" />&nbsp;
                                    Continue
                                </Link>
                                {/*</div>!*/}
                                </div>
                                <div style={{borderLeft: '1px dashed #c1bebe'}} className="col-sm-6">
                                {/*<div class="well">!*/}
                                <h2>Returning Customer</h2>
                                <span>I am a returning customer</span>
                                <form onSubmit={this.onSubmit} role="form" className="form-horizontal add_margin">
                                    <div className="form-group">
                                    <label htmlFor="input-email" className="control-label col-sm-4">E-Mail Address</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="input-email" placeholder="E-Mail Address" defaultValue="email" name="email" />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="input-password" className="control-label col-sm-4">Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" id="input-password" placeholder="Password" defaultValue="password" name="password" />
                                    </div>
                                    </div>
                                    <p className="cat_name"> <Link to="changepassword">Forgot Password? Click here.</Link></p>
                                    {/*<input type="submit" value="Login" class="btn btn-primary reg_button" />!*/}
                                    <button className="btn btn-primary reg_button" value="Login" type="submit">
                                    <i className="fa fa-key" />&nbsp;
                                    Login                            
                                    </button>
                                </form>
                                {/*</div>!*/}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
