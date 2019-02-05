import React, { Component } from 'react'

class ButtonWin extends Component{
    render(){
        return(
            <div className="container-win">
                <button onClick={this.props.onClick} id='container-win' >
                    ¡PUNTO!
                </button>
            </div>
        )
    }
}

export default ButtonWin; 