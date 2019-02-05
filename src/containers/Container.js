import React, { Component } from 'react';
import {connect} from 'react-redux'; 


class Container extends Component{
    clases = ''
    render(){
        if(this.props.status){
            this.clases = 'Container container-grid-playing'
        }else{
            this.clases = 'Container container-grid-standard'
            clearInterval(this.props.intervalObject)
        }
        return(
        <div ref={this.props.setRef} className={this.clases}
        id='container-dad'
        >
            {this.props.children}
        </div>
    )}
}
const mapToProps = (store,props)=>{
    return{
        status: store.status,
    }
}
export default connect(mapToProps)(Container); 