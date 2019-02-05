import React,{Component} from 'react';
import {connect} from 'react-redux'
import ListContainer from '../containers/ListTeamContainer'
import Item from '../containers/ListTeamItem'

class ListTeam extends Component{
    constructor(props){
        super(props)
        this.state = {
            'list': this.props.listTeam,
        }
    }
 
    render(){
        const list = this.props.listTeam.map((item,index)=>
                <Item 
                    i = {index}
                    name={item.name} 
                    score={this.props.listScores[index]}
                    key={index}
                />
            )
        return(
            <ListContainer  onNewTeam={this.props.onNewTeam}>
                {list}
            </ListContainer>            
        )
    }
}


const mapToProps = (store,props)=>{
    return{
        listScores: store.listScores,
        listTeam: store.listTeam
    }
}

export default connect(mapToProps)(ListTeam); 