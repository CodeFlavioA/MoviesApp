import React, { Component } from 'react'
import InputHidden from '../containers/InputHidden'
import Buttons from '../containers/buttonsTeam'
import {connect} from 'react-redux'

class HeaderList extends Component{

    constructor(props){
        super(props)
        this.state ={
            'displayInput': 'none', 
            'valueButton' : '+'
        }
    }
    
    onClickNewTeam = evt => {
       let newValue = '+'; 
       let display = 'inline'

       if(this.state.valueButton === '+'){
        newValue = '>';
       }else{
            this.props.dispatch({
                type:'ADD_PLAYER',
                payload: this.inputTeam.value,
            })
            display = 'none'; 
       }
       this.setState({
           'displayInput': display, 
           'valueButton':  newValue,
       })
       this.inputTeam.value = '';
    }
    setRefInput = (element)=>{
        this.inputTeam = element; 
    }

    render(){
        return(
            <div className='dumpHeaderList'>
                <p className="titleListTeam">Equipos</p>
                <InputHidden 
                    displayInput={this.state.displayInput} 
                    setRef={this.setRefInput}
                />
                <Buttons 
                    onClick={this.onClickNewTeam} 
                    value={this.state.valueButton}
                />
            </div>
        )
    }
}

export default connect()(HeaderList); 