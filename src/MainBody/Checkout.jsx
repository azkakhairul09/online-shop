import Axios from 'axios'
import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { DataContext } from '../Context'
import Footer from '../Footer'
import Header from '../Header'
import TopMenu from '../TopMenu'

const { cart } = this.context;
async function addItems() {
    for (const [item] of cart.entries()) {
        const items = await item;
        console.log(items);
    } 
    console.log("finish");
}

export default class Checkout extends Component {
    static contextType = DataContext;
    state = {
        coupon: 0,
        userData:{},
        // jumlah: 0,
        // product: "",
        promo: 0,
        items: [],
        biayaPengiriman: this.context.ongkosKirim,
        paymentMethod: "QRIS Payment Method"
    }

    componentDidMount(){
        this.context.getTotal();
        this.context.countTotal();
        this.context.alamatPenerimaFunc();
        this.context.grandTotalFunc();
        this.context.biayaLayanan();

        const userData = localStorage.getItem('userData');
        let decoded = JSON.parse(userData);

        this.setState({
            userData: decoded
        })

        const { cart } = this.context;
        cart.forEach(item =>{
            this.setState ({
                items: [
                    {
                    product: item.productId,
                    jumlah: item.count
                    }
                ]
            })
        })

        console.log(this.state.product)
        addItems();
    }

    
        
    bikinInvoice = () => {
        const userData = localStorage.getItem('userData');
        let decoded = JSON.parse(userData);

        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": decoded.token
        };

        const urlInvoice =
        "http://localhost:8090/pharmacy-olshop1/tambah_invoice";
        
        

        const data = {
            promo: 0,
            biayaPengiriman: this.state.biayaPengiriman,
            paymentMethod: this.state.paymentMethod,
            items: this.state.items
        }

        Axios.post(urlInvoice, data, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": decoded.token
            }
        })
        .then((response) => {
            console.log(response)
            // this.props.history.push("/payment");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const {ongkosKirim, cart, total, count, alamatPenerima, grandTotal, admin} = this.context;

        if(cart.length === 0){
            return  <div>
                        <TopMenu />
                        <Header />
                        <h2 style={{textAlign:"center"}}>Nothings Product</h2>
                        <Footer />
                    </div>
        } else { 
        return (
            <div>
                <TopMenu />
                <Header />
                <div id="site_content" className="mt_5">
                <div className="container">
                    <div className="row">
                    <div className="col-md-7 col-sm-7 col-xs-12 form-horizontal" id="content" >  
                        <div className="contentText">  
                            {alamatPenerima ? 
                            <fieldset id="account">
                                <h1><i class="fa fa-address-card"></i> &nbsp; Alamat Penerima</h1>
                                <h5 style={{color:"#3a3a3a"}}><b>{this.state.userData.name}&nbsp;&nbsp;<i class="fa fa-map-marker"></i></b></h5>
                                <p style={{padding:"0"}}>{alamatPenerima.alamat}<br/>{alamatPenerima.wilayah},{alamatPenerima.kodePos}</p>
                                <span>{this.state.userData.phone}</span>
                            </fieldset> : 
                            <fieldset id="account">
                                <h1><i class="fa fa-address-card"></i> &nbsp; Alamat Penerima</h1>
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
                                <label htmlFor="input-alamat" className="col-sm-2 control-label">Alamat Penerima</label>
                                <div className="col-sm-10">
                                    <textarea rows="3" type="text" onChange={this.onChange} className="form-control" id="input-alamat" placeholder="Alamat Penerima" name="alamat" />
                                </div>
                                </div>
                                <div className="form-group required">
                                <label htmlFor="input-kota" className="col-sm-2 control-label">Kota</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={this.onChange} className="form-control" id="input-kota" placeholder="Kota" name="wilayah" />
                                </div>
                                </div>
                                <div className="form-group required">
                                <label htmlFor="input-kodepos" className="col-sm-2 control-label">Kode Pos</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={this.onChange} className="form-control" id="input-kodepos" placeholder="Kode Pos" name="kodepos" />
                                </div>
                                </div>
                            </fieldset>
                            }
                            <fieldset id="account">
                                <h1><i class="fa fa-dropbox"></i> &nbsp; Pesanan</h1>
                                {cart.map((item, i) =>(
                                <div className="row" key={i}>
                                <div className="col-sm-3">
                                    <ul className="thumbnails">
                                    <li><a href="#" className="thumbnail fix-box"><img className="changeimg" src={item.productImage} /></a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-7">
                                    <h1 style={{color: '#7f7f7f', margin:"0", border: "0"}}>{item.name}</h1>
                                    <ul className="list-unstyled product-section">
                                    <CurrencyFormat value={item.harga-((item.promo/100)*item.harga)} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <li><p id="old_price1" style={{paddingLeft:"0"}} className="new_price1"><span style={{borderRadius: "0", background: "#17a2b8"}} className="badge badge-secondary">-{item.promo}%</span>&nbsp;{value.replace(/,/g, '.')} / {item.satuan}</p></li>} />
                                    <li><h5>Jumlah: {item.count}</h5></li>
                                    </ul>
                                </div>
                                </div>
                                ))}
                                <h5 style={{color:"#3a3a3a"}}><b>Metode Pengiriman&nbsp;&nbsp;<i class="fa fa-truck"></i></b></h5>
                                <div className="justify-content-between d-flex" style={{width:"80%"}}>
                                    <span>Regular &nbsp; (2-4 Hari)</span>
                                    <CurrencyFormat value={ongkosKirim} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} />
                                </div>
                                <h1 style={{marginTop:"0"}}></h1>
                                <div className="bs-example">
                                <div className="panel-group" style={{padding:"0"}} id="accordion">
                                    <div className="panel panel-default" style={{border:"0"}}>
                                    <div className="panel-heading" style={{padding:"0"}}>
                                        <div className="infoBoxHeading" style={{padding:"0"}}>
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <div className="justify-content-between d-flex" style={{width:"82%", fontSize:"14px"}}>
                                                <span>Subtotal</span>
                                                <span value="12000" name="biayaPengiriman"><b>Rp &nbsp; 12.000&nbsp;<i class="fa fa-angle-down"></i></b></span> 
                                            </div>
                                        </a>
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-down  pull-right" />
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse">
                                        <div className="panel-body" style={{padding:"0", border:"0"}}>
                                        <div className="infoBoxContents" style={{padding:"0"}}>
                                            <div className="justify-content-between d-flex" style={{width:"80%"}}>
                                                <span>Total Ongkos Kirim</span>
                                                <CurrencyFormat value={ongkosKirim} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} />
                                                
                                            </div>
                                            <div className="justify-content-between d-flex" style={{width:"80%"}}>
                                                <span>Harga ({count} Barang)</span>
                                                <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </fieldset>
                        </div>          
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12" id="content">            
                        <div className="contentText">
                            <fieldset id="account">
                                <h1><i class="fa fa-list-alt"></i> &nbsp; Rincian Pembayaran</h1>
                                <div className="justify-content-between d-flex mb_5">
                                    <span>Total Belanja ({count} Barang)</span>
                                    <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span style={{letterSpacing:"1px"}}><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} />
                                </div>
                                <div className="justify-content-between d-flex mb_5">
                                    <span>Biaya Layanan</span>
                                    <CurrencyFormat value={admin} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span style={{letterSpacing:"1px"}}><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} />
                                </div>
                                <div className="justify-content-between d-flex mb_5">
                                    <span>Voucher & Promo</span>
                                    {/* <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span style={{letterSpacing:"1px"}}><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} /> */}
                                    <span>-</span>
                                </div><div className="justify-content-between d-flex" style={{paddingBottom:"1rem", borderBottom: "1px solid #ccc"}}>
                                    <span>Potongan Point Toko</span>
                                    {/* <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span style={{letterSpacing:"1px"}}><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} /> */}
                                    <span>-</span>
                                </div>
                                <div className="justify-content-between d-flex mb_5" style={{paddingTop:"1rem"}}>
                                    <span>Biaya Pengiriman</span>
                                    <CurrencyFormat value={ongkosKirim} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span style={{letterSpacing:"1px"}}><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} />
                                </div>
                                <div className="justify-content-between d-flex" style={{paddingBottom:"1rem", borderBottom: "1px solid #ccc"}}>
                                    <span>Potongan Pengiriman</span>
                                    {/* <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span style={{letterSpacing:"1px"}}><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} /> */}
                                    <span>-</span>
                                </div>
                                <div className="justify-content-between d-flex mb_5" style={{paddingTop:"1rem",paddingBottom:"1rem", borderBottom: "1px solid #ccc"}}>
                                    <span><b>Total Tagihan</b></span>
                                    <CurrencyFormat value={grandTotal} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span style={{letterSpacing:"1px"}}><b>&nbsp;{value.replace(/,/g, '.')}</b></span>} />
                                </div>
                                <div style={{paddingTop:"1rem"}}>
                                    <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="metodePembayaran" id="exampleRadios1" defaultValue="QRIS" defaultChecked />
                                        &nbsp;
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            QRIS Payment Method
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div style={{paddingTop:"1rem"}}>
                                    <button onClick={()=>this.bikinInvoice()}className="btn btn-primary btn-lg btn-block reg_button"> BAYAR </button>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        )}
    }
}
