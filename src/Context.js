import Axios from 'axios';
import React, { Component, createContext } from 'react'
import { Redirect } from 'react-router-dom';

export const DataContext = createContext();

export default class DataProvider extends Component {
    state = {
        products: [],
        cart: [],
        total: 0,
        count: 0,
        alamatPenerima: {},
        ongkosKirim: 0,
        grandTotal: 0,
        admin: 0
    }

    alamatPenerimaFunc = () => {
        const userData = localStorage.getItem('userData');
        let decoded = JSON.parse(userData);

        const urlGetAlamat = "http://localhost:8090/pharmacy-olshop1/cek_alamat_penerima?userId="+decoded.userId
        
        Axios.get(urlGetAlamat, {
            headers: {
                Authorization: decoded.token
            }
        })
        .then((response) => {
            let res = response.data;
            if (res.wilayah === "Kota Bekasi") {
                this.setState ({
                    ongkosKirim: 12000
                })  
            } else {
                this.setState ({
                    ongkosKirim: 24000
                })
            }
            this.setState ({
                alamatPenerima: res
            })     
        })
        .catch((error) => {
            console.log(error)
        });
    }

    getProduct = () => {
        // const urlGetProducts = "https://bangomicroservices.site/bango-backend-dev/product/all"
        const urlGetProducts = "http://localhost:8090/pharmacy-olshop1/produk/semua_produk"
        
        Axios.get(urlGetProducts, {
            headers: {
            }
        })
        .then((response) => {
            let res = response.data;
            this.setState ({
                products: response.data
            })         
        })
        .catch((error) => {
          this.setState({
              products: []
          })
        });
    }

    addToCart =(id) => {
        const {products, cart} = this.state;
        
        const data = products.filter(product => {
            return product.productId === id
        })
        console.log(data)
        if (data.stok === 0 || data.stok <= 0) {
            alert("ups, stok nya habis")
        } else {
            this.setState({cart: [...cart, ...data], redirect: true})
        }
    }

    reduction = (id) =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.productId === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
        this.countTotal();
        this.grandTotalFunc();
    };

    increase = (id) =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.productId === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
        this.countTotal();
        this.grandTotalFunc();
    };

    kurang = (id) =>{
        const { products } = this.state;
        products.forEach(item =>{
            if(item.productId === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({products: products});
        this.getTotal();
        this.countTotal();
        this.grandTotalFunc();
    };

    tambah = (id) =>{
        const { products } = this.state;
        products.forEach(item =>{
            if(item.productId === id){
                item.count += 1;
            }
        })
        this.setState({products: products});
        this.getTotal();
        this.countTotal();
        this.grandTotalFunc();
    };

    removeProduct = (id) =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item.productId === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
            this.countTotal();
            this.grandTotalFunc();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + ((item.harga-((item.promo/100)*item.harga)) * item.count);
        },0)
        this.setState({total: res})
    };

    countTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.count);
        },0)
        this.setState({count: res})
    };

    grandTotalFunc = () => {
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + ((item.harga-((item.promo/100)*item.harga)) * item.count);
        },0)
        this.setState({grandTotal: res+this.state.ongkosKirim+this.state.admin})
    }

    biayaLayanan = () => {
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (((item.harga-((item.promo/100)*item.harga)) * item.count) * 0.02);
        },0)
        this.setState({admin: res})
    }

    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
        localStorage.setItem('dataCount', JSON.stringify(this.state.count))
        localStorage.setItem('dataGrandTotal', JSON.stringify(this.state.grandTotal))
        localStorage.setItem('biayaLayanan', JSON.stringify(this.state.admin))
    };

    componentDidMount() {
        this.getProduct();
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
        const dataCount = JSON.parse(localStorage.getItem('dataCount'));
        if(dataCount !== null){
            this.setState({count: dataCount});
        }
        const dataGrandTotal = JSON.parse(localStorage.getItem('dataGrandTotal'));
        if(dataGrandTotal !== null){
            this.setState({grandTotal: dataGrandTotal});
        }
        const biayaLayanan = JSON.parse(localStorage.getItem('biayaLayanan'));
        if(biayaLayanan !== null){
            this.setState({admin: biayaLayanan});
        }
    }

    render() {
        if (this.state.redirect) {
            <Redirect to="cart" />
        }
        const {products, grandTotal, cart,total, count, alamatPenerima, ongkosKirim, admin} = this.state;
        const {biayaLayanan, addToCart,grandTotalFunc, reduction,increase,removeProduct,getTotal,countTotal,kurang,tambah,alamatPenerimaFunc} = this;
        return (
            <DataContext.Provider value={{biayaLayanan,admin,grandTotal,grandTotalFunc,alamatPenerima,alamatPenerimaFunc,ongkosKirim,products, addToCart, count, cart,countTotal, reduction,increase,removeProduct,kurang,tambah,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
