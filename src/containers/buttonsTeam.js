import React from 'react';

function ButtonsTeam(props){
    return (
    <div className='ButtonsTeam'>
        <button onClick={props.onClick} id='titleHeaderList'>
            {props.value}
        </button>
    </div>
    )
}

export default ButtonsTeam; 