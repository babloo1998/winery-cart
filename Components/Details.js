import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../Action';



class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'Small',
            color: 'Red',
            quantity: 1,
        }
    }

    handleAddToCart = (e) => {
        e.preventDefault();
        let { addProduct } = this.props;
        let { id, name, price, inCart } = this.props.product;
        console.log("AddProduct", addProduct);
        this.setState({
            quantity: this.state.quantity + 1
        });
        addProduct({
            id: id,
            productname: name,
            price: price,
            inCart: inCart,
            quantity: this.state.quantity,
            size: this.state.size,
            color: this.state.color
        });
    }
    render() {
        let { intId, product } = this.props;
        const { defaultcolor, name, price } = product;
        console.log("Productsssss----->", product);
        console.log("Details Page ---->", this.props.storedProducts);
        console.log("Int id-------> ", intId);
        // let {id} = this.props.storedProducts;
        // console.log("Selected id ------>");
        return (
            <div className='detailspage'>
                {
                    this.props.storedProducts.map((item, i) => {
                        console.log("itemid-------oo--->", item.id);
                        if (item.id == intId) {
                            console.log("Check---- if block");
                            // <div className='productimgcontainer'>
                            //     {
                            //         console.log("Inside div checking color", item.defaultcolor)
                            //     }
                            //     {item.defaultcolor === "Yellow" ?
                            //         <img className="imageYrb productimg" src={"Assets/img3.jpg"} alt="yellow" />
                            //         : null
                            //     }
                            //     {item.defaultcolor === "Blue" ?
                            //         <img className="imageYrb productimg" src={"Assets/img1.jpg"} alt="blue" />
                            //         : null
                            //     }
                            //     {item.defaultcolor === "Red" ?
                            //         <img className="imageYrb productimg" src={"Assets/img2.jpg"} alt="red" />
                            //         : null
                            //     }
                            // </div>
                        }

                    })
                }
                <div className='productdescription'>
                    <h2 className='ProductName'>{name}</h2>
                    <span className='detailsprice'><b>${price}</b></span><br />
                    <strong className='detailscolor'>{defaultcolor}</strong><br />
                    <p className='detailsdescription'>Material: 100% Premium Combed Cotton, Single jersey, Pre-washed to impart a softer texture.Airy and perspire-friendly fabric that's best suited for Indian weather. “Proudly Made in India”<br />
                        <b>Fit Type</b>: Unisex Regular Fit<br />
                        <b>T-Shirt Colour </b>: {defaultcolor}<br />
                        <b>Sleeve Type </b>: Half<br />
                        <b>Occasion </b>: Classy Casual and Daily Wear. Good to go for any casual scene, express your style with these printed unisex t-shirts.
                        Wash Care instructions: Do not bleach. Dry in shade. Wash with similar colours. Machine wash cold.
                                    All designs are printed with skin-friendly chemicals and are tested for up to 10 washes, no bleeding.</p>
                    <span className='detailsprice'> <b>${price}</b> <br /> Including All Taxes</span><br />
                    <button type='button' className='btn add-btn' onClick={this.handleAddToCart}>ADD TO CART</button>
                </div>
                {/* // </div> */}
                {/* // }) */}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const intId = parseInt(id);
    console.log("itemid update -----> ", intId);
    const product = state.productReducer.storeProducts.find(item => item.id === intId);
    console.log("Product Details ---->", product);
    console.log("images", state.Reducer.images);
    return {
        // cart: state.cartreducer,
        storedProducts: state.Reducer.storeProducts,
        // images: state.Reducer.images,
        product,
        intId
    }
}
const mapDispatchToProps = (dispatch) => ({
    addProduct: (data) => dispatch(addProduct(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);