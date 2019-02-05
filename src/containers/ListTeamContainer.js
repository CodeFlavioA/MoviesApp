import React from 'react';
import HeaderList from '../components/HeaderList'

function ListTeamContainer(props){
    return(
        <div className="ListTeamContainer" >
            <HeaderList  onNewTeam={props.onNewTeam}/>
            {props.children}
        </div>
    )
}

export default ListTeamContainer; 