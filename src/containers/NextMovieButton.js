import React from 'react'

function NextMovieButton(props){
    return(
        <div className="NextMovieButton">
            <button type="submit" onClick={props.onClick}>
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default NextMovieButton; 