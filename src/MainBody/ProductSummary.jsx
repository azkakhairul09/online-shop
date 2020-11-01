import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductSummary extends Component {
    render() {
        return (
            <div>
            <div id="header">
                <div className="container">
                <div id="welcomeLine" className="row">
                    <div className="span6">Welcome!<strong> User</strong></div>
                    <div className="span6">
                    <div className="pull-right">
                        <Link to="product_summary"><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white" /> [ 3 ] Itemes in your cart </span> </Link> 
                    </div>
                    </div>
                </div>
                {/* Navbar ================================================== */}
                <div id="logoArea" className="navbar">
                    <Link id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    </Link>
                    <div className="navbar-inner">
                    <Link className="brand" to="/"><img src="themes/images/logo.png" alt="Bootsshop" /></Link>
                    <form className="form-inline navbar-search" method="post" action="products">
                        <input id="srchFld" className="srchTxt" type="text" />
                        <select className="srchTxt">
                        <option>All</option>
                        <option>CLOTHES </option>
                        <option>FOOD AND BEVERAGES </option>
                        <option>HEALTH &amp; BEAUTY </option>
                        <option>SPORTS &amp; LEISURE </option>
                        <option>BOOKS &amp; ENTERTAINMENTS </option>
                        </select> 
                        <button type="submit" id="submitButton" className="btn btn-primary">Go</button>
                    </form>
                    <ul id="topMenu" className="nav pull-right">
                        <li className><Link to="products">All Products</Link></li>
                        <li className>
                        <a href="#login" role="button" data-toggle="modal" style={{paddingRight: 0}}><span className="btn btn-large btn-success">Login</span></a>
                        <div id="login" className="modal hide fade in" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="false">
                            <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">�</button>
                            <h3>Login Block</h3>
                            </div>
                            <div className="modal-body">
                            <form className="form-horizontal loginFrm">
                                <div className="control-group">								
                                <input type="text" id="inputEmail" placeholder="Email" />
                                </div>
                                <div className="control-group">
                                <input type="password" id="inputPassword" placeholder="Password" />
                                </div>
                                <div className="control-group">
                                <label className="checkbox">
                                    <input type="checkbox" /> Remember me
                                </label>
                                </div>
                            </form>		
                            <button type="submit" className="btn btn-success">Sign in</button>
                            <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            {/* Header End====================================================================== */}
            <div id="mainBody">
                <div className="container">
                <div className="row">
                    <div className="span9">
                    <ul className="breadcrumb">
                        <li><Link to="/">Home</Link> <span className="divider">/</span></li>
                        <li className="active"> SHOPPING CART</li>
                    </ul>
                    <h3>  SHOPPING CART [ <small>3 Item(s) </small>]<Link to="products" className="btn btn-large pull-right"><i className="icon-arrow-left" /> Continue Shopping </Link></h3>	
                    <hr className="soft" />
                    <table className="table table-bordered">
                        <tbody><tr><th> I AM ALREADY REGISTERED</th></tr>
                        <tr> 
                            <td>
                            <form className="form-horizontal">
                                <div className="control-group">
                                <label className="control-label" htmlFor="inputUsername">Username</label>
                                <div className="controls">
                                    <input type="text" id="inputUsername" placeholder="Username" />
                                </div>
                                </div>
                                <div className="control-group">
                                <label className="control-label" htmlFor="inputPassword1">Password</label>
                                <div className="controls">
                                    <input type="password" id="inputPassword1" placeholder="Password" />
                                </div>
                                </div>
                                <div className="control-group">
                                <div className="controls">
                                    <button type="submit" className="btn">Sign in</button> OR <Link to="register" className="btn">Register Now!</Link>
                                </div>
                                </div>
                                <div className="control-group">
                                <div className="controls">
                                    <Link to="forgetpass" style={{textDecoration: 'underline'}}>Forgot password ?</Link>
                                </div>
                                </div>
                            </form>
                            </td>
                        </tr>
                        </tbody></table>		
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity/Update</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Tax</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td> <img width={60} src="themes/images/products/4.jpg" alt /></td>
                            <td>MASSA AST<br />Color : black, Material : metal</td>
                            <td>
                            <div className="input-append"><input className="span1" style={{maxWidth: 34}} placeholder={1} id="appendedInputButtons" size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
                            </td>
                            <td>$120.00</td>
                            <td>$25.00</td>
                            <td>$15.00</td>
                            <td>$110.00</td>
                        </tr>
                        <tr>
                            <td> <img width={60} src="themes/images/products/8.jpg" alt /></td>
                            <td>MASSA AST<br />Color : black, Material : metal</td>
                            <td>
                            <div className="input-append"><input className="span1" style={{maxWidth: 34}} placeholder={1} size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
                            </td>
                            <td>$7.00</td>
                            <td>--</td>
                            <td>$1.00</td>
                            <td>$8.00</td>
                        </tr>
                        <tr>
                            <td> <img width={60} src="themes/images/products/3.jpg" alt /></td>
                            <td>MASSA AST<br />Color : black, Material : metal</td>
                            <td>
                            <div className="input-append"><input className="span1" style={{maxWidth: 34}} placeholder={1} size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
                            </td>
                            <td>$120.00</td>
                            <td>$25.00</td>
                            <td>$15.00</td>
                            <td>$110.00</td>
                        </tr>
                        <tr>
                            <td colSpan={6} style={{textAlign: 'right'}}>Total Price:	</td>
                            <td> $228.00</td>
                        </tr>
                        <tr>
                            <td colSpan={6} style={{textAlign: 'right'}}>Total Discount:	</td>
                            <td> $50.00</td>
                        </tr>
                        <tr>
                            <td colSpan={6} style={{textAlign: 'right'}}>Total Tax:	</td>
                            <td> $31.00</td>
                        </tr>
                        <tr>
                            <td colSpan={6} style={{textAlign: 'right'}}><strong>TOTAL ($228 - $50 + $31) =</strong></td>
                            <td className="label label-important" style={{display: 'block'}}> <strong> $155.00 </strong></td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <td> 
                            <form className="form-horizontal">
                                <div className="control-group">
                                <label className="control-label"><strong> VOUCHERS CODE: </strong> </label>
                                <div className="controls">
                                    <input type="text" className="input-medium" placeholder="CODE" />
                                    <button type="submit" className="btn"> ADD </button>
                                </div>
                                </div>
                            </form>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table table-bordered">
                        <tbody><tr><th>ESTIMATE YOUR SHIPPING </th></tr>
                        <tr> 
                            <td>
                            <form className="form-horizontal">
                                <div className="control-group">
                                <label className="control-label" htmlFor="inputCountry">Country </label>
                                <div className="controls">
                                    <input type="text" id="inputCountry" placeholder="Country" />
                                </div>
                                </div>
                                <div className="control-group">
                                <label className="control-label" htmlFor="inputPost">Post Code/ Zipcode </label>
                                <div className="controls">
                                    <input type="text" id="inputPost" placeholder="Postcode" />
                                </div>
                                </div>
                                <div className="control-group">
                                <div className="controls">
                                    <button type="submit" className="btn">ESTIMATE </button>
                                </div>
                                </div>
                            </form>				  
                            </td>
                        </tr>
                        </tbody></table>		
                    <Link to="products" className="btn btn-large"><i className="icon-arrow-left" /> Continue Shopping </Link>
                    <Link to="login" className="btn btn-large pull-right">Next <i className="icon-arrow-right" /></Link>
                    </div>
                </div></div>
            </div>
            {/* MainBody End ============================= */}
            {/* Footer ================================================================== */}
            <div id="footerSection">
                <div className="container">
                <div className="row">
                    <div className="span3">
                    <h5>ACCOUNT</h5>
                    <Link to="login">YOUR ACCOUNT</Link>
                    <Link to="login">PERSONAL INFORMATION</Link> 
                    <Link to="login">ADDRESSES</Link> 
                    <Link to="login">DISCOUNT</Link>  
                    <Link to="login">ORDER HISTORY</Link>
                    </div>
                    <div className="span3">
                    <h5>INFORMATION</h5>
                    <Link to="contact">CONTACT</Link>  
                    <Link to="register">REGISTRATION</Link>  
                    <Link to="legal_notice">LEGAL NOTICE</Link>  
                    <Link to="tac">TERMS AND CONDITIONS</Link> 
                    <Link to="faq">FAQ</Link>
                    </div>
                    <div className="span3">
                    <h5>OUR OFFERS</h5>
                    <Link to="#">NEW PRODUCTS</Link> 
                    <Link to="#">TOP SELLERS</Link>  
                    <Link to="special_offer">SPECIAL OFFERS</Link>  
                    <Link to="#">MANUFACTURERS</Link> 
                    <Link to="#">SUPPLIERS</Link> 
                    </div>
                    <div id="socialMedia" className="span3 pull-right">
                    <h5>SOCIAL MEDIA </h5>
                    <Link to="#"><img width={60} height={60} src="themes/images/facebook.png" title="facebook" alt="facebook" /></Link>
                    <Link to="#"><img width={60} height={60} src="themes/images/twitter.png" title="twitter" alt="twitter" /></Link>
                    <Link to="#"><img width={60} height={60} src="themes/images/youtube.png" title="youtube" alt="youtube" /></Link>
                    </div> 
                </div>
                <p className="pull-right">© Bootshop</p>
                </div>{/* Container End */}
            </div>
            </div>
        )
    }
}
