import React , { Component } from 'react';


class SelectSize extends Component{
    render(){
        let {handleChangeSize} = this.props;
        return(
            <select onChange={handleChangeSize} className='sizeselection'>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>
        )
    }
}

export default SelectSize;