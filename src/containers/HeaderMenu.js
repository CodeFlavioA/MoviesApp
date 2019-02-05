import React from 'react';

function HeaderMenu(props){
    return(
        <div className="HeaderMenu">
        <button className="more-movies" onClick={props.moreClick}> + </button>
            <div className="imageProfile">
                <img src={props.profile} alt="" className=""/>
            </div>
            <p className="nameProfile">{props.name}</p>      
            <p className="typeProfile">{props.type}</p>      
        </div>
    )
}

export default HeaderMenu; 