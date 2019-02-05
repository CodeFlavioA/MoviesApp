import React from 'react'

function NextMovieButton(props){
    return(
        <div className="PlayTimerButton">
            <button type="submit" onClick={props.onClick}>
                <i className={`fas ${props.name}`}></i>
            </button>
        </div>
    )
}

export default NextMovieButton; 