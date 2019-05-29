import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cartdata from './Cartdata';

class Header extends Component {
    getInitialState() {
        return {
            isMouseInside: false
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            isMouseInside: false
        }
    }
    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }
    render() {
        return (
            <nav>
                <Link to='/addtocart' className="ml-auto">
                <div className='cartimg' onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                    <img src="./Assets/cart.svg" alt="cart" />
                    {/* {this.state.isMouseInside ? <Cartdata /> : null} */}
                </div>
                </Link>
            </nav>
        );
    }
}

export default Header;
