import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../Action';


class Cartdata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: true
        }
    }
    deleteCartProduct = (id) => {
        let { deleteProduct } = this.props;
        deleteProduct(id);
    }
    render() {
        return (
            <div>
                {
                    this.state.cart ?
                        <div className='producttable'>
                            <table class="table table-bordered carttable">
                                <thead>
                                    <tr>
                                        <th scope="col">ITEM</th>
                                        <th scope="col">QTY</th>
                                        <th scope="col" colspan="2">COLOR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.cart.map((item, i) =>
                                            <tr key={i}>
                                                <td className="tableData">{item.productname}</td>
                                                <td className="tableData">
                                                    {item.quantity}
                                                </td>
                                                <td>{item.color}
                                                </td>
                                                <td><i className="fas fa-times" onMouseOver={() => this.deleteCartProduct(item.id)}></i></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div> :
                        <div>
                            <span>Cart is Empty</span>
                            {/* {this.setState ({
                                cart:true
                            })} */}
                        </div>
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cartreducer,
    storedProducts: state.Reducer.storeProducts,
})

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (id) => dispatch(deleteProduct(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cartdata);
