import React from "react"

function featuredCard(props){
  return (
      <div className='content grid5 mtop featured-card'>
        
          <div className='box' >
            <img src={props.cover} alt={props.name} />
            <h4>{props.name}</h4>
            <label>{props.total}</label>
          </div>
        
      </div>
  );
}

export default featuredCard;
