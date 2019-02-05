import React , {Component} from 'react';
import {connect} from 'react-redux'


class ListTeamItem extends Component{
    render(){
        console.log(this.props.listScores[this.props.i])
        return(
            <div className="itemList">
                <p>{this.props.name}</p>
                <p>{this.props.listScores[this.props.i]}</p>
            </div>
        )
    }
}

const mapToProps = (store,props)=>{
    return{
        listScores: store.listScores,
    }
}

export default connect(mapToProps)(ListTeamItem); 