import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectSize from './Selectsize';
import Radiobutton from './Radiobutton';

class Carddata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorButton: false,
        }
    }
    handleChangeColor =(e) =>{
        e.stopPropagation();
        this.props.handleChangeColor(e);
    }
    colorButton = (e) => {
        e.stopPropagation();
        console.log("Color Button Function Called");
        this.setState({
            displayColorButton: !this.state.displayColorButton
        });
        // console.log("ColorButton", event.target);
        console.log("CButton", this.state.displayColorButton);

    }
    render() {
        const { name, imageKeys, handleAddToCart, handleChangeSize, handleChangeColor } = this.props;
        let btn = this.state.displayColorButton ? "displayBlock" : "hideBlock";
        return (
            <div>
                <div className={`${btn} cartmenu`}>
                    <Radiobutton
                        handleChangeColor={(e) => handleChangeColor(e)}
                        name={name}
                        imageKeys={imageKeys}
                        colorButtonToggle={this.colorButton}
                    />
                </div>
                <div>
                    <SelectSize
                        handleChangeSize={(e) => handleChangeSize(e)}
                    />
                </div>
                <div>
                    <button type='button' value='Add To Cart' className='btn add-btn' onClick={handleAddToCart}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        storedProducts: state.Reducer.storeProducts
    }
}

export default connect(mapStateToProps)(Carddata);
