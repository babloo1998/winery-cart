import React, { Component } from 'react';
// import Checkout from '../Checkout/Checkout';
import { connect } from 'react-redux';
// import Logo from '../../../public/Assets/logo.png';
import { clearProducts, deleteProduct, updatesize, updatecolor, increment, decrement } from '../../Action';

class Addtocart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update: false
        }
    }

    emptycart = (e) => {
        let { clearProducts } = this.props;
        e.preventDefault();
        clearProducts();
    }

    backtocart = () => {
        this.props.history.push("/");
    }

    checkout = (e) => {
        this.props.history.push("/Checkout")
    }

    updatecart = (e) => {
        this.setState({
            update: true
        })

    }
    deleteCartProduct = (id) => {
        let { deleteProduct } = this.props;
        deleteProduct(id);
    }

    handleAddQuantity = (id, price) => {
        this.props.increment({
            id,
            price
        });
    };
    handleSubtractQuantity = (id, price) => {
        this.props.decrement({
            id,
            price
        });
    };
    handleChangeSize = (e) => {
        let { updatesize } = this.props;
        this.props.cart.map((item, id) => {
            if (item.id == e.target.id) {
                item.size = e.target.value;
                id = item.id;
                let size = item.size;
                updatesize({
                    id,
                    size
                });
            }
        }
        )
    }

    handleChangeColor = (e) => {
        let { updatecolor } = this.props;
        this.props.cart.map((item, id) => {
            if (item.id == e.target.id) {
                console.log("id------>", id);
                item.color = e.target.value;
                id = item.id;
                let color = item.color;
                console.log("Updated Size---->", item.color);
                console.log("updated item id ------>", item.id);
                updatecolor({
                    id,
                    color
                });
            }
        }
        )
    }

    render() {
        // let {handleChangeSize} = this.props;
        return (
            <div>
                <div className="cart tableWrapper">

                    <div className="logo">
                        {/* <img src={Logo} alt="Logo" /> */}
                        <span className='description'>Wines for web developers since 1999</span>
                    </div>
                </div>

                <h2 className="shopHeading">Your Shopping Cart</h2>
                <div className='producttable'>
                    <table class="table table-bordered carttable">
                        <thead>
                            <tr>
                            <th scope="col">PRODUCT IMAGE</th>
                                <th scope="col">ITEM</th>
                                <th scope="col">QTY</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">COLOR</th>
                                <th scope="col" colspan="2">PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.cart.map((item, i) =>
                                    <tr key={i}>
                                        <td className="imageTd">
                                            {item.color === "Yellow" ?
                                                <img className="imageYrb" src={"Assets/img3.jpg"} alt="yellow" className="cart-img" />
                                                : null
                                            }
                                            {item.color === "Blue" ?
                                                <img src={"Assets/img1.jpg"} alt="blue" className="cart-img" />
                                                : null
                                            }
                                            {item.color === "Red" ?
                                                <img src={"Assets/img2.jpg"} alt="red" className="cart-img" />
                                                : null
                                            }
                                        </td>
                                        <td className="tableData">{item.productname}</td>
                                        <td className="tableData quantity-btn">
                                            {this.state.update ?
                                                item.quantity <= 1 ?
                                                    <button disabled className="addSubBtn quantityselection" type="button">-</button>
                                                    :
                                                    <button className="addSubBtn quantityselection" type="button" onClick={() => this.handleSubtractQuantity(item.id, item.price)}>-</button>

                                                : null
                                            }
                                            <span className="qty">
                                                {item.quantity}
                                            </span>
                                            {this.state.update ?
                                                item.quantity < 10 ?
                                                    <button className="addSubBtn quantityselection" type="button" onClick={() => this.handleAddQuantity(item.id, item.price)}>+</button>
                                                    :
                                                    <button className="addSubBtn quantityselection" type="button" disabled>+</button>
                                                : null
                                            }
                                        </td>
                                        <td>
                                            {
                                                !this.state.update ? item.size :
                                                this.state.update ?
                                                    <select id={item.id} name="Size" onClick={this.handleChangeSize} className='sizeselection'>
                                                        <option value="Small">Small</option>
                                                        <option value="Middle">Middle</option>
                                                        <option value="Large">Large</option>
                                                    </select> : null
                                            }
                                        </td>
                                        <td>
                                            {!this.state.update ? item.color :
                                                this.state.update ?
                                                    <select id={item.id} name="Color" onClick={this.handleChangeColor} className='sizeselection'>
                                                        <option value="Red">Red</option>
                                                        <option value="Blue">Blue</option>
                                                        <option value="Yellow">Yellow</option>
                                                    </select> : null
                                            }
                                        </td>
                                        <td>${item.price * item.quantity}</td>
                                        {
                                            this.state.update ?
                                                <td><i className="far fa-trash-alt" style={{color: 'red'}} onClick={() => this.deleteCartProduct(item.id)}></i></td> : null
                                        }
                                    </tr>

                                )
                            }
                        </tbody>

                    </table>
                    <div className='buttoncontainer'>
                        <button type="button" class="btn btn-danger updatebutton" onClick={this.updatecart}>Update Cart</button>
                        <button type="button" class="btn btn-danger emptybutton" onClick={this.emptycart}>Empty Cart</button>
                        <button type="button" class="btn btn-danger continuebutton" onClick={this.backtocart}>Continue Shopping</button>
                        <button type="button" class="btn btn-danger checkoutbutton" onClick={this.checkout}>Go To Checkout</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartreducer,
    storedProducts: state.Reducer.storeProducts,
})

const mapDispatchToProps = (dispatch) => ({
    clearProducts: (data) => dispatch(clearProducts(data)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    updatesize: (data) => dispatch(updatesize(data)),
    updatecolor: (data) => dispatch(updatecolor(data)),
    increment: (data) => dispatch(increment(data)),
    decrement: (data) => dispatch(decrement(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Addtocart);
