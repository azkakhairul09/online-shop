import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../Footer'
import Header from '../Header'
import TopMenu from '../TopMenu'

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: "",
            phone: "",
            email: "",
            password: "",
            confirm: ""
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

        const urlRegistration =
        "http://localhost:8090/pharmacy-olshop1/registration";
        

        const registration = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        }

        if (this.state.confirm !== this.state.password) {
            toast.info('password is does not match ', 
            {
              position: toast.POSITION.TOP_CENTER,
              hideProgressBar: true,
              className: "custom-toast",
              autoClose: 2000,
            })
        } else {
            Axios.post(urlRegistration, registration, headers)
            .then((response) => {
                console.log(response)
                toast.info('registration success ', 
                {
                  position: toast.POSITION.TOP_CENTER,
                  hideProgressBar: true,
                  className: "custom-toast",
                  autoClose: 2000,
                })
                this.props.history.push("/login");
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                <TopMenu />
                <Header />
                <div id="site_content">
                    <div className="container">
                    <div className="row"><aside className="col-sm-3 hidden-xs" id="column-left">
                        <div className="list-group">
                            <Link className="list-group-item" to="login">Login</Link> 
                            <Link className="list-group-item" to="register">Register</Link> 
                            <Link className="list-group-item" to="changepassword">Forgotten Password</Link>
                            <Link className="list-group-item" to="myaccount">My Account</Link>
                            <Link className="list-group-item" to="orderhistory">Order History</Link> 
                            <Link className="list-group-item" to="transactions">Transactions</Link> 
                        </div>
                        </aside>
                        <div className="col-sm-9" id="content">            <div className="breadcrumbs">
                            <Link to="/"><i className="fa fa-home" /></Link>
                            <Link to="register">Register</Link>
                        </div>
                        <h1>My Account Information</h1>
                        <p> <small><strong className="define_note" /></small>If you already have an account with us, please login at the 
                            <Link to="login"> login page</Link>.</p>
                        <form className="form-horizontal" onSubmit={this.onSubmit}>
                            <div className="contentText">  
                            <fieldset id="account">
                                <h1>Your Personal Details</h1>
                                <div style={{display: 'none'}} className="form-group required">
                                <label className="col-sm-2 control-label">Customer Group</label>
                                <div className="col-sm-10">
                                    <div className="radio">
                                    <label>
                                        <input type="radio" defaultChecked="checked" defaultValue={1} name="customer_group_id" />
                                        Default</label>
                                    </div>
                                </div>
                                </div>
                                <div className="form-group required">
                                <label htmlFor="input-fullname" className="col-sm-2 control-label">Full Name</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={this.onChange} className="form-control" id="input-fullname" placeholder="Full Name" name="name" />
                                </div>
                                </div>
                                <div className="form-group required">
                                <label htmlFor="input-email" className="col-sm-2 control-label">E-Mail</label>
                                <div className="col-sm-10">
                                    <input type="email" onChange={this.onChange} className="form-control" id="input-email" placeholder="E-Mail" name="email" />
                                </div>
                                </div>
                                <div className="form-group required">
                                <label htmlFor="input-phone" className="col-sm-2 control-label">Phone</label>
                                <div className="col-sm-10">
                                    <input type="tel" onChange={this.onChange} className="form-control" id="input-phone" placeholder="Phone" name="phone" />
                                </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <h1>Your Password</h1>
                                <div className="form-group required">
                                <label htmlFor="input-password" className="col-sm-2 control-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" onChange={this.onChange} className="form-control" id="input-password" placeholder="Password" name="password" />
                                </div>
                                </div>
                                <div className="form-group required">
                                <label htmlFor="input-confirm" className="col-sm-2 control-label">Password Confirm</label>
                                <div className="col-sm-10">
                                    <input type="password" onChange={this.onChange} className="form-control" id="input-confirm" placeholder="Password Confirm" name="confirm" />
                                </div>
                                </div>
                            </fieldset>
                            <div className="buttons">
                                <div className="pull-right">I have read and agree to the <Link className="agree" to="privacypolicy"><b>Privacy Policy</b></Link>                                                        <input type="checkbox" defaultValue={1} name="agree" />
                                &nbsp;
                                <button type="submit" className="btn btn-primary reg_button">SUBMIT DATA</button>
                                </div>
                            </div>
                            </div>
                        </form>
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
