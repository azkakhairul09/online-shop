import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Products extends Component {
    render() {
        return (
            <div>
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
                        {/* Sidebar ================================================== */}
                        <div id="sidebar" className="span3">
                        <div className="well well-small"><Link id="myCart" to="product_summary"><img src="themes/images/ico-cart.png" alt="cart" />3 Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></Link></div>
                        <ul id="sideManu" className="nav nav-tabs nav-stacked">
                            <li className="subMenu open"><a> ELECTRONICS [230]</a>
                            <ul>
                                <li><Link className="active" to="products"><i className="icon-chevron-right" />Cameras (100) </Link></li>
                                <li><Link to="products"><i className="icon-chevron-right" />Computers, Tablets &amp; laptop (30)</Link></li>
                                <li><Link to="products"><i className="icon-chevron-right" />Mobile Phone (80)</Link></li>
                                <li><Link to="products"><i className="icon-chevron-right" />Sound &amp; Vision (15)</Link></li>
                            </ul>
                            </li>
                            <li className="subMenu"><a> CLOTHES [840] </a>
                            <ul style={{display: 'none'}}>
                                <li><Link to="products"><i className="icon-chevron-right" />Women's Clothing (45)</Link></li>
                                <li><Link to="products"><i className="icon-chevron-right" />Women's Shoes (8)</Link></li>												
                                <li><Link to="products"><i className="icon-chevron-right" />Women's Hand Bags (5)</Link></li>	
                                <li><Link to="products"><i className="icon-chevron-right" />Men's Clothings  (45)</Link></li>
                                <li><Link to="products"><i className="icon-chevron-right" />Men's Shoes (6)</Link></li>												
                                <li><Link to="products"><i className="icon-chevron-right" />Kids Clothing (5)</Link></li>												
                                <li><Link to="products"><i className="icon-chevron-right" />Kids Shoes (3)</Link></li>												
                            </ul>
                            </li>
                            <li className="subMenu"><a>FOOD AND BEVERAGES [1000]</a>
                            <ul style={{display: 'none'}}>
                                <li><Link to="products"><i className="icon-chevron-right" />Angoves  (35)</Link></li>
                                <li><Link to="products"><i className="icon-chevron-right" />Bouchard Aine &amp; Fils (8)</Link></li>												
                                <li><Link to="products"><i className="icon-chevron-right" />French Rabbit (5)</Link></li>	
                                <li><Link to="products"><i className="icon-chevron-right" />Louis Bernard  (45)</Link></li>
                                <li><Link to="products"><i className="icon-chevron-right" />BIB Wine (Bag in Box) (8)</Link></li>												
                                <li><Link to="products"><i className="icon-chevron-right" />Other Liquors &amp; Wine (5)</Link></li>												
                                <li><Link to="products"><i className="icon-chevron-right" />Garden (3)</Link></li>												
                                <li><Link to="products"><i className="icon-chevron-right" />Khao Shong (11)</Link></li>												
                            </ul>
                            </li>
                        </ul>
                        <br />
                        <div className="thumbnail">
                            <img src="themes/images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods" />
                            <div className="caption">
                            <h5>Payment Methods</h5>
                            </div>
                        </div>
                        </div>
                        {/* Sidebar end=============================================== */}
                        <div className="span9">
                        <ul className="breadcrumb">
                            <li><Link to="/">Home</Link> <span className="divider">/</span></li>
                            <li className="active">Products Name</li>
                        </ul>
                        <h3> Products Name <small className="pull-right"> 40 products are available </small></h3>	
                        <hr className="soft" />
                        <p>
                            Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - that is why our goods are so popular and we have a great number of faithful customers all over the country.
                        </p>
                        <hr className="soft" />
                        <form className="form-horizontal span6">
                            <div className="control-group">
                            <label className="control-label alignL">Sort By </label>
                            <select>
                                <option>Priduct name A - Z</option>
                                <option>Priduct name Z - A</option>
                                <option>Priduct Stoke</option>
                                <option>Price Lowest first</option>
                            </select>
                            </div>
                        </form>
                        <div id="myTab" className="pull-right">
                            <Link to="#listView" data-toggle="tab"><span className="btn btn-large"><i className="icon-list" /></span></Link>
                            <Link to="#blockView" data-toggle="tab"><span className="btn btn-large btn-primary"><i className="icon-th-large" /></span></Link>
                        </div>
                        <br className="clr" />
                        <div className="tab-content">
                            <div className="tab-pane" id="listView">
                            <div className="row">	  
                                <div className="span2">
                                <img src="themes/images/products/3.jpg" alt />
                                </div>
                                <div className="span4">
                                <h3>New | Available</h3>				
                                <hr className="soft" />
                                <h5>Product Name </h5>
                                <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                </p>
                                <Link className="btn btn-small pull-right" to="product_details">View Details</Link>
                                <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                <form className="form-horizontal qtyFrm">
                                    <h3> $140.00</h3>
                                    <label className="checkbox">
                                    <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <Link to="product_details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></Link>
                                    <Link to="product_details" className="btn btn-large"><i className="icon-zoom-in" /></Link>
                                </form>
                                </div>
                            </div>
                            <hr className="soft" />
                            <div className="row">	  
                                <div className="span2">
                                <img src="themes/images/products/1.jpg" alt />
                                </div>
                                <div className="span4">
                                <h3>New | Available</h3>				
                                <hr className="soft" />
                                <h5>Product Name </h5>
                                <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                </p>
                                <Link className="btn btn-small pull-right" to="product_details">View Details</Link>
                                <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                <form className="form-horizontal qtyFrm">
                                    <h3> $140.00</h3>
                                    <label className="checkbox">
                                    <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <Link to="product_details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></Link>
                                    <Link to="product_details" className="btn btn-large"><i className="icon-zoom-in" /></Link>
                                </form>
                                </div>
                            </div>
                            <hr className="soft" />
                            <div className="row">	  
                                <div className="span2">
                                <img src="themes/images/products/3.jpg" alt />
                                </div>
                                <div className="span4">
                                <h3>New | Available</h3>				
                                <hr className="soft" />
                                <h5>Product Name </h5>
                                <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                </p>
                                <Link className="btn btn-small pull-right" to="product_details">View Details</Link>
                                <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                <form className="form-horizontal qtyFrm">
                                    <h3> $140.00</h3>
                                    <label className="checkbox">
                                    <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <Link to="product_details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></Link>
                                    <Link to="product_details" className="btn btn-large"><i className="icon-zoom-in" /></Link>
                                </form>
                                </div>
                            </div>
                            <hr className="soft" />
                            <div className="row">	  
                                <div className="span2">
                                <img src="themes/images/products/3.jpg" alt />
                                </div>
                                <div className="span4">
                                <h3>New | Available</h3>				
                                <hr className="soft" />
                                <h5>Product Name </h5>
                                <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                </p>
                                <Link className="btn btn-small pull-right" to="product_details">View Details</Link>
                                <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                <form className="form-horizontal qtyFrm">
                                    <h3> $140.00</h3>
                                    <label className="checkbox">
                                    <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <Link to="product_details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></Link>
                                    <Link to="product_details" className="btn btn-large"><i className="icon-zoom-in" /></Link>
                                </form>
                                </div>
                            </div>
                            <hr className="soft" />
                            <div className="row">	  
                                <div className="span2">
                                <img src="themes/images/products/3.jpg" alt />
                                </div>
                                <div className="span4">
                                <h3>New | Available</h3>				
                                <hr className="soft" />
                                <h5>Product Name </h5>
                                <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                </p>
                                <Link className="btn btn-small pull-right" to="product_details">View Details</Link>
                                <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                <form className="form-horizontal qtyFrm">
                                    <h3> $140.00</h3>
                                    <label className="checkbox">
                                    <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <Link to="product_details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></Link>
                                    <Link to="product_details" className="btn btn-large"><i className="icon-zoom-in" /></Link>
                                </form>
                                </div>
                            </div>
                            <hr className="soft" />
                            <div className="row">	  
                                <div className="span2">
                                <img src="themes/images/products/3.jpg" alt />
                                </div>
                                <div className="span4">
                                <h3>New | Available</h3>				
                                <hr className="soft" />
                                <h5>Product Name </h5>
                                <p>
                                    Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                    that is why our goods are so popular..
                                </p>
                                <Link className="btn btn-small pull-right" to="product_details">View Details</Link>
                                <br className="clr" />
                                </div>
                                <div className="span3 alignR">
                                <form className="form-horizontal qtyFrm">
                                    <h3> $140.00</h3>
                                    <label className="checkbox">
                                    <input type="checkbox" />  Adds product to compair
                                    </label><br />
                                    <Link to="product_details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></Link>
                                    <Link to="product_details" className="btn btn-large"><i className="icon-zoom-in" /></Link>
                                </form>
                                </div>
                            </div>
                            <hr className="soft" />
                            </div>
                            <div className="tab-pane  active" id="blockView">
                            <ul className="thumbnails">
                                <li className="span3">
                                <div className="thumbnail">
                                    <Link to="product_details"><img src="themes/images/products/3.jpg" alt /></Link>
                                    <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <p> 
                                        I'm a paragraph. Click here 
                                    </p>
                                    <h4 style={{textAlign: 'center'}}><Link className="btn" to="product_details"> <i className="icon-zoom-in" /></Link> <Link className="btn" to="#">Add to <i className="icon-shopping-cart" /></Link> <Link className="btn btn-primary" to="#">€222.00</Link></h4>
                                    </div>
                                </div>
                                </li>
                                <li className="span3">
                                <div className="thumbnail">
                                    <Link to="product_details"><img src="themes/images/products/3.jpg" alt /></Link>
                                    <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <p> 
                                        I'm a paragraph. Click here 
                                    </p>
                                    <h4 style={{textAlign: 'center'}}><Link className="btn" to="product_details"> <i className="icon-zoom-in" /></Link> <Link className="btn" to="#">Add to <i className="icon-shopping-cart" /></Link> <Link className="btn btn-primary" to="#">€222.00</Link></h4>
                                    </div>
                                </div>
                                </li>
                                <li className="span3">
                                <div className="thumbnail">
                                    <Link to="product_details"><img src="themes/images/products/3.jpg" alt /></Link>
                                    <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <p> 
                                        I'm a paragraph. Click here 
                                    </p>
                                    <h4 style={{textAlign: 'center'}}><Link className="btn" to="product_details"> <i className="icon-zoom-in" /></Link> <Link className="btn" to="#">Add to <i className="icon-shopping-cart" /></Link> <Link className="btn btn-primary" to="#">€222.00</Link></h4>
                                    </div>
                                </div>
                                </li>
                                <li className="span3">
                                <div className="thumbnail">
                                    <Link to="product_details"><img src="themes/images/products/3.jpg" alt /></Link>
                                    <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <p> 
                                        I'm a paragraph. Click here 
                                    </p>
                                    <h4 style={{textAlign: 'center'}}><Link className="btn" to="product_details"> <i className="icon-zoom-in" /></Link> <Link className="btn" to="#">Add to <i className="icon-shopping-cart" /></Link> <Link className="btn btn-primary" to="#">€222.00</Link></h4>
                                    </div>
                                </div>
                                </li>
                                <li className="span3">
                                <div className="thumbnail">
                                    <Link to="product_details"><img src="themes/images/products/3.jpg" alt /></Link>
                                    <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <p> 
                                        I'm a paragraph. Click here 
                                    </p>
                                    <h4 style={{textAlign: 'center'}}><Link className="btn" to="product_details"> <i className="icon-zoom-in" /></Link> <Link className="btn" to="#">Add to <i className="icon-shopping-cart" /></Link> <Link className="btn btn-primary" to="#">€222.00</Link></h4>
                                    </div>
                                </div>
                                </li>
                                <li className="span3">
                                <div className="thumbnail">
                                    <Link to="product_details"><img src="themes/images/products/3.jpg" alt /></Link>
                                    <div className="caption">
                                    <h5>Manicure &amp; Pedicure</h5>
                                    <p> 
                                        I'm a paragraph. Click here 
                                    </p>
                                    <h4 style={{textAlign: 'center'}}><Link className="btn" to="product_details"> <i className="icon-zoom-in" /></Link> <Link className="btn" to="#">Add to <i className="icon-shopping-cart" /></Link> <Link className="btn btn-primary" to="#">€222.00</Link></h4>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            <hr className="soft" />
                            </div>
                        </div>
                        <Link to="compair" className="btn btn-large pull-right">Compair Product</Link>
                        <div className="pagination">
                            <ul>
                            <li><Link to="#">‹</Link></li>
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#">...</Link></li>
                            <li><Link to="#">›</Link></li>
                            </ul>
                        </div>
                        <br className="clr" />
                        </div>
                    </div>
                    </div>
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

            </div>
        )
    }
}
