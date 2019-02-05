import React from 'react'

function ButtonsCategories(props){
    let classNames = 'ButtonsCategories ';

    let buttons = props.categories.map((item)=>
        <button 
         datacattegory={item.id}
         className={classNames}
         onClick={props.onClick}
         key={item.id}
         >
            {item.name}
        </button>
        )
    return(
        <div className="ButtonsContainer">
            { buttons }
        </div>
    )
}

export default ButtonsCategories; 