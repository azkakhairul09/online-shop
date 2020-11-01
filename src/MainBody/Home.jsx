import Axios from 'axios';
import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom"
import Slider from "react-slick";
import CurrencyFormat from 'react-currency-format';
import TopMenu from '../TopMenu';
import Header from '../Header';
import Search from '../Search';
import Footer from '../Footer';
import { DataContext } from '../Context';

export default class Home extends Component {
    state = {
        // products: [],
        redirect: false
    }

    static contextType = DataContext;

    // getProduct = () => {
    //     // const urlGetProducts = "https://bangomicroservices.site/bango-backend-dev/product/all"
    //     const urlGetProducts = "http://localhost:8090/pharmacy-olshop1/produk/semua_produk"
        
    //     Axios.get(urlGetProducts, {
    //         headers: {
    //         }
    //     })
    //     .then((response) => {
    //         let res = response.data;
    //         this.setState ({
    //             products: response.data
    //         })         
    //     })
    //     .catch((error) => {
    //       this.setState({
    //           products: []
    //       })
    //     });
    // }

    // componentDidMount() {
    //     this.getProduct();
    // }

    detail = (productId) => {
        this.setState({
            redirect: true
        })
        localStorage.productId = productId
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/products' />
        }
    }

    render() {
        const {products} = this.context;

        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  speed: 1000,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  speed: 1000,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  speed: 1000,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  dots: true
                }
              }
            ]
          };
        return (
            <div>
                <div>
                <TopMenu />
                <Header />
                <Search />
                <div id="site_content">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-12 left_sidebar1">
                        <div id="left_part">
                            <div className="bs-example">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Categories</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                        <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-down  pull-right" />
                                    </a>
                                    </div>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                    <div className="infoBoxContents">
                                        <a href="product.html">Category One</a>&nbsp;(94)<br />
                                        <a href="product.html">Category Two</a>&nbsp;(9)<br />
                                        <a href="product.html">Category Three</a>&nbsp;(5)<br />
                                        <a href="product.html">Category Four</a>&nbsp;(6)<br />
                                        <a href="product.html">Category Five</a>&nbsp;(94)<br />
                                        <a href="product.html">Category Six</a>&nbsp;(94)<br />
                                        <a href="product.html">Category Seven</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">What's New?</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                        <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-up  pull-right accordan_plus" />
                                    </a>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                    <div className="infoBoxContainer">  
                                        <div className="infoBoxHeading">
                                        <a href="#">What's New?</a>
                                        </div> 
                                        <div className="infoBoxContents" id="sidebar">
                                        <div>
                                            <a href="single-product.html">
                                            <img src="images/img4.jpg" className="img-responsive" />
                                            </a>
                                        </div>
                                        <a href="single-product.html">Lorem Simply</a><br />€21.00
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Information</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                        <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-up  pull-right" />
                                    </a>
                                    </div>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                    <div className="infoBoxContents">    
                                        <a href="#">Shipping &amp; Returns</a><br />   
                                        <a href="#">Privacy Notice</a><br />   
                                        <a href="#">Conditions of Use</a><br />   
                                        <a href="#">Contact Us</a> 
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Bestsellers</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                                        <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-up  pull-right" />
                                    </a>
                                    </div>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse">
                                    <div className="panel-body">
                                    <div className="infoBoxContents" id="sidebar">
                                        <a href="single-product.html">
                                        <img src="images/img4.jpg" className="img-responsive" />
                                        </a>
                                        <a href="single-product.html">Lorem Big Block</a><br /><del />
                                        <span className="productSpecialPrice">€21.00</span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Specials</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                                        <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-up  pull-right" />
                                    </a>
                                    </div>
                                </div>
                                <div id="collapseFive" className="panel-collapse collapse">
                                    <div className="panel-body">
                                    <div className="infoBoxContents" id="sidebar">
                                        <a href="single-product.html">
                                        <img src="images/img6.jpg" className="img-responsive" />
                                        </a>
                                        <a href="single-product.html">Lorem Big Block</a><br /><del />
                                        <span className="productSpecialPrice">€21.00</span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div> 
                        <div className="col-md-9 col-sm-8 col-xs-12 right_sidebar1">
                        <div id="right_part">
                            <div className="contentContainer">
                            <div className="contentText">
                                <div className="breadcrumbs">
                                <a href="home.html" className="headerNavigation"><i className="fa fa-home" /></a>			
                                </div>
                            </div>
                            {/*--slidder start-!*/}
                            <div className="contentText">
                                <div className="infoBoxHeading">Today Bestsellers</div>
                                <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    {/*<div class="bg_best">*/}
                                    <div className="bg_best">
                                    <Slider {...settings}>
                                    {products.map((product, i) => (
                                    <div className="owl-carousel" key={i}>
                                        <div className="item" onClick={() => this.detail(product.productId)}>
                                        <span>
                                            <Link to={`/products/${product.productId}`}>
                                                <img className="carasoul_image" src={product.productImage} />
                                            </Link>
                                        </span>
                                        <Link to={`/products/${product.productId}`} style={{fontWeight:"400"}} className="btn btn-default" role="button">
                                            Read More
                                        </Link>
                                        </div>
                                    </div>
                                    ))}
                                    </Slider>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/*--slidder End-!*/}
                            {/*--content_1--!*/}
                            <div className="contentText Static">
                                <h1>What is Lorem Ipsum?</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                                <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            {/*--content_1 End--!*/}
                            {/*--content_2 For New Products--!*/}
                            <div className="contentText">
                                <h1>New Products For March</h1>
                                <div className="row margin-top product-layout_width">
                                    {products.map((product, i) => (
                                    <div className="product-layout  col-md-3 col-sm-6 col-xs-12" key={i}>
                                        <div className="product-thumb-height">
                                        <div className="product-thumb transition">
                                            <ul>
                                            <li className="li_product_image">
                                                <Link to={`/products/${product.productId}`} className="image">
                                                    <img src={product.productImage} className="img-responsive" width={200} height={200} />
                                                </Link>
                                            </li>
                                            <li className="li_product_title">
                                                <div className="product_title">
                                                <Link className="a" to={`/products/${product.productId}`}>{product.name}</Link>
                                                </div>
                                            </li>
                                            <li className="li_product_price">
                                                <div className="justify-content-between d-flex">
                                                    <CurrencyFormat value={product.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span id="old_price1" className="old_price1">{value.replace(/,/g, '.')}</span>} />
                                                    {/* <span className="old_price1">Rp {product.harga}</span> */}
                                                    <span style={{borderRadius: "0", background: "#17a2b8"}} className="badge badge-secondary">-{product.promo}%</span>
                                                </div>
                                                <CurrencyFormat value={product.harga-((product.promo/100)*product.harga)} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span id="old_price1" className="new_price1">{value.replace(/,/g, '.')} / {product.satuan}</span>} />
                                                {/* <span className="new_price1"> Rp {product.harga-((product.promo/100)*product.harga)} / {product.satuan}</span> */}
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            {/*--content_2 End--!*/}
                            {/*--content_3--!*/}
                            <div className="contentText">
                                <h1>Specials</h1>
                                <div className="row margin-top product-layout_width">
                                    {products.map((product, i) => (
                                    <div className="product-layout  col-md-3 col-sm-6 col-xs-12" key={i}>
                                        <div className="product-thumb-height">
                                        <div className="product-thumb transition">
                                            <ul>
                                            <li className="li_product_image">
                                                {this.renderRedirect()}
                                                <Link className="image" to={`/products/${product.productId}`}>
                                                    <img src={product.productImage} className="img-responsive" width={200} height={200} />
                                                </Link>
                                            </li>
                                            <li className="li_product_title">
                                                <div className="product_title">
                                                <Link className="a"to={`/products/${product.productId}`}>{product.name}</Link>
                                                </div>
                                            </li>
                                            <li className="li_product_price">
                                                <div className="justify-content-between d-flex">
                                                <CurrencyFormat value={product.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span id="old_price1" className="old_price1">{value.replace(/,/g, '.')}</span>} />
                                                {/* <span className="old_price1">Rp {product.harga}</span> */}
                                                    <span style={{borderRadius: "0", background: "#17a2b8"}} className="badge badge-secondary">-{product.promo}%</span>
                                                </div>
                                                <CurrencyFormat value={product.harga-((product.promo/100)*product.harga)} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span id="old_price1" className="new_price1">{value.replace(/,/g, '.')} / {product.satuan}</span>} />
                                                {/* <span className="new_price1"> Rp {product.harga-((product.promo/100)*product.harga)} / {product.satuan}</span> */}
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
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
