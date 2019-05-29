import React, { Component } from 'react';


class Radiobutton extends Component {
    render() {
        const { name, colorButtonToggle, imageKeys, handleChangeColor } = this.props;
        let checkmarkRadioStyle = {
            "background": imageKeys
        }
        return (
            <div className="radio">
                <ul>
                    {
                        checkmarkRadioStyle.background.map((item, i) => {
                            return (
                                <li key={i} onClick={colorButtonToggle}>
                                    <input
                                        type='radio'
                                        onClick={(e) => handleChangeColor(e)}
                                        value = {item}
                                        name = {`${name} radio`}
                                    />
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
        )
    }
}

export default Radiobutton;