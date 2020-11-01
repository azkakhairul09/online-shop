import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import Footer from '../Footer'
import Header from '../Header'
import TopMenu from '../TopMenu'

export default class Cart extends Component {
    static contextType = DataContext;
    state = {
        coupon: 0
    }

    componentDidMount(){
        this.context.getTotal();
        this.context.countTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total, count} = this.context;

        if(cart.length === 0){
            return  <div>
                        <TopMenu />
                        <Header />
                        <h2 style={{textAlign:"center"}}>Nothings Product</h2>
                        <Footer />
                    </div>
        }else{

        return (
            <div>
                <TopMenu />
                <Header />
                <div className="main-content">
                <div className="container cart-block-style">          
                    <div className="breadcrumbs">
                    <Link to="/"><i className="fa fa-home" /></Link>
                    <Link to="#">Shopping Cart</Link>
                    </div>
                    <div className="contentText">
                    <h1>Shopping Cart 
                    {cart.length === 1 ? (
                        <span className="cart_items"> ({cart.length} item)</span>
                    ) : (
                        <span className="cart_items"> ({cart.length} items)</span>
                    )}
                    </h1>
                    </div>
                    <form>
                    
                    <div className="table-responsive margin-top">
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                            <td className="text-center" />
                            <td className="text-left">PRODUCT NAME</td>
                            <td className="text-left">MODEL</td>
                            <td className="text-left">QUANTITY</td>
                            <td className="text-right">UNIT PRICE</td>
                            <td className="text-right">PRICE</td>
                            <td className="text-right">TOTAL</td>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map(item =>(
                            <tr key={item.id}>
                            <td className="text-center">                                   
                                <Link to={`/products/${item.productId}`}>
                                <img title="ana" src={item.productImage} style={{width: 100, height: 80}} />
                                </Link>
                            </td>
                            <td className="text-left product_title">
                                <br />
                                <Link to={`/products/${item.productId}`} className="a">{item.name}</Link>
                            </td>
                            <td className="text-left"><br />{item.kategori}</td>
                            <td className="text-left"><br />
                            <div style={{maxWidth: 200}} className="form-inline btn-block">
                                <input type="text" style={{borderRadius: "4px 0 0 4px", width: "50%"}} className="form-control" size={2} value={item.count} disabled />
                                {item.count > 1 ? (
                                    <button className="btn btn-danger" type="button" onClick={() => reduction(item.productId)}><i className="fa fa-minus" /></button>
                                ) : (
                                    <button className="btn btn-danger" type="button" onClick={() => removeProduct(item.productId)}><i className="fa fa-trash-o" /></button>
                                )}
                                <button className="btn btn-primary" type="button" onClick={() => increase(item.productId)}><i className="fa fa-plus" /></button>
                            </div>
                            </td>
                            <CurrencyFormat value={item.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <td className="text-right"><br />{value.replace(/,/g, '.')}<br />
                            <span style={{borderRadius: "0", background: "#17a2b8"}} className="badge badge-secondary">-{item.promo}%</span></td>} />
                            <CurrencyFormat value={item.harga-((item.promo/100)*item.harga)} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <td className="text-right"><br />{value.replace(/,/g, '.')}</td>} />
                            <CurrencyFormat value={(item.harga-((item.promo/100)*item.harga)) * item.count} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <td className="text-right"><br />{value.replace(/,/g, '.')}</td>} />
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    
                    </form>
                    <h2>What would you like to do next?</h2>
                    <p>Choose if you have a discount code.</p>
                    <div id="accordion" className="panel-group">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h4 className="panel-title"><Link data-parent="#accordion" data-toggle="collapse" className="accordion-toggle" to="#collapse-coupon" aria-expanded="true">Use Coupon Code <i className="fa fa-caret-down" /></Link></h4>
                        </div>
                        <div className="panel-collapse collapse in" id="collapse-coupon" style={{}} aria-expanded="true">
                        <div className="panel-body row">
                            <div className="col-sm-8">
                            <label htmlFor="input-coupon" className="col-sm-3 control-label">Enter your coupon Code here</label>
                            <div className="form-group">
                                <div className="form-inline">
                                <input type="text" style={{borderRadius: "4px 0 0 4px"}} className="form-control" id="input-coupon" placeholder="Enter your coupon Code here" defaultValue name="coupon" />
                                <input type="button" className="btn btn-primary" id="button-coupon" defaultValue="Apply" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <br />
                    <div className="row">
                    <div className="col-sm-4 col-sm-offset-8">
                        <strong style={{fontSize: 30, float: 'right'}}>Pricing Details</strong><table className="table table-bordered">
                        <tbody>
                            <tr>
                            <td className="text-right">Order Total</td>
                            <td className="text-right">{count}</td>
                            </tr>
                            <tr>
                            <td className="text-right"><strong>Sub-Total:</strong></td>
                            <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <td className="text-right">{value.replace(/,/g, '.')}</td>} />
                            </tr>
                            <tr>
                            <td className="text-right">Coupon Code:</td>
                            <td className="text-right">Rp 0</td>
                            </tr>
                            <tr>
                            <td className="text-right"><strong>Order Total:</strong></td>
                            <CurrencyFormat value={total+this.state.coupon} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <td className="text-right">{value.replace(/,/g, '.')}</td>} />
                            </tr>
                        </tbody></table>
                    </div>
                    </div>
                    <div className="buttons">
                    <div className="pull-left"><Link className="btn btn-default" to="/"><i className="fa fa-caret-right" />&nbsp;Continue Shopping</Link></div>
                    <div className="pull-right"><Link className="btn btn-primary reg_button" to="/checkout">Checkout</Link></div>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        )
        }
    }
}
