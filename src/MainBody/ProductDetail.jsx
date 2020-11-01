import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import TopMenu from '../TopMenu'
import Qs from "query-string"
import CurrencyFormat from 'react-currency-format'
import { DataContext } from '../Context'
import Footer from '../Footer'

export default class ProductDetail extends Component {
    static contextType = DataContext;
    state = {
        product: [],
        products: []
    }
    
    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item.productId === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {product} = this.state;
        const {addToCart, products, kurang, tambah} = this.context;

        return (
            <div>
                <TopMenu />
                <Header />
                <div id="site_content">
                <div className="container">
                    <div className="row">
                    {product.map((item, i) =>(
                    <div className="col-md-12 col-sm-12 col-xs-12" id="content" key={i}>            
                        <div className="breadcrumbs">
                        <a href="home.html"><i className="fa fa-home" /></a>
                        <a href>{item.name}</a>
                        </div>
                        <div className="row">
                        <div className="col-sm-5">
                            <ul className="thumbnails">
                            <li><a href="#" className="thumbnail fix-box"><img className="changeimg" src={item.productImage} /></a></li>
                            <li className="image-additional"><a title="Dianabol" className="thumbnail"> 
                                <img className="galleryimg" src={item.productImage} /></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-7">
                            <div className="btn-group">
                            <button title className="btn btn-default mr_5" type="button"><i className="fa fa-heart" /></button>
                            </div>
                            <h1 style={{color: '#7f7f7f'}}>{item.name}</h1>
                            <ul className="list-unstyled product-section">
                            <CurrencyFormat value={item.harga-((item.promo/100)*item.harga)} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <li><h1 id="old_price1" className="new_price1">{value.replace(/,/g, '.')} / {item.satuan}</h1></li>} />
                            <CurrencyFormat value={item.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <li><span id="old_price1" style={{fontWeight:"400"}} className="old_price1">{value.replace(/,/g, '.')}</span>&nbsp;<span style={{borderRadius: "0", background: "#17a2b8"}} className="badge badge-secondary">-{item.promo}%</span></li>} />
                            
                            <li><span>In stock:</span> <span>{item.stok}</span></li>
                            </ul>
                            <div id="product">
                            <div className="form-group">
                                <label htmlFor="input-quantity" className="control-label">Kuantitas</label>
                                <div className="form-inline">
                                <div className="btn-group">
                                {item.count > 1 ? (
                                    <button className="btn btn-danger mr_5" type="button" onClick={() => kurang(item.productId)}><i className="fa fa-minus" /></button>
                                ) : (
                                    <button className="btn btn-danger mr_5" type="button" onClick={() => kurang(item.productId)} disabled><i className="fa fa-minus" /></button>
                                )}
                                </div>
                                <input style={{width: "10%", textAlign:"center"}} type="text" className="form-control" id="input-quantity" size={2} value={item.count} name="quantity" disabled />
                                <div className="btn-group">
                                    <button title className="btn btn-default ml_5" type="button" onClick={() => tambah(item.productId)}><i class="fa fa-plus"></i></button>
                                </div>
                                </div>
                                <input type="hidden" defaultValue={49} name="product_id" />
                                <br />
                                <Link to="/cart" className="btn btn-primary btn-lg btn-block reg_button" style={{width:"50%"}} onClick={() => addToCart(item.productId)}><i className="fa fa-shopping-cart" /> BUY NOW!</Link>
                            </div>
                            </div>
                            <div className="rating">
                            <p>
                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /></span>
                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /></span>
                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /></span>
                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /></span>
                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x" /></span>
                                <a href>0 reviews</a> / <a href>Write a review</a></p>
                            <hr />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-12">
                            <ul className="nav nav-tabs">
                            <li className="active"><a data-toggle="tab" href="#tab-description" aria-expanded="false">Description</a></li>
                            <li className><a data-toggle="tab" href="#tab-review" aria-expanded="true">Reviews (0)</a></li>
                            </ul>
                            <div className="tab-content">
                            <div id="tab-description" className="tab-pane active">
                                <div className="row ">
                                <p style={{textAlign:"justify"}}>{item.deskripsi}</p>
                                </div>
                            </div>
                            <div id="tab-review" className="tab-pane">
                                <form id="form-review" className="form-horizontal">
                                <h2>Write a review</h2>
                                <div className="form-group required">
                                    <div className="col-sm-6">
                                    <label htmlFor="input-name" className="control-label">Your Name</label>
                                    <input type="text" className="form-control" id="input-name" defaultValue name="name" />
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="col-sm-8">
                                    <label htmlFor="input-review" className="control-label">Your Review</label>
                                    <textarea className="form-control" id="input-review" rows={5} name="text" defaultValue={""} />
                                    <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="col-sm-8">
                                    <label className="control-label">Rating</label>
                                    &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                    <input type="radio" defaultValue={1} name="rating" />
                                    &nbsp;
                                    <input type="radio" defaultValue={2} name="rating" />
                                    &nbsp;
                                    <input type="radio" defaultValue={3} name="rating" />
                                    &nbsp;
                                    <input type="radio" defaultValue={4} name="rating" />
                                    &nbsp;
                                    <input type="radio" defaultValue={5} name="rating" />
                                    &nbsp;Good</div>
                                </div>
                                <div className="buttons clearfix col-sm-8">
                                    <div className="pull-right">
                                    <button className="btn btn-primary reg_button" id="button-review" type="button">
                                        <i className="fa fa-caret-right" />&nbsp;
                                        Continue                                       
                                    </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="rel-product">
                        <div className="infoBoxHeading">
                            <a>Related Product</a>
                        </div>
                        <div className="row product-layout_width">
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
                    </div>
                    ))}
                    </div>
                </div>
                </div>
                <Footer />
            </div>

        )
    }
}
