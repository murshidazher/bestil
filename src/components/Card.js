import React from 'react';
import './Card.css';

const Card = (props) => {
  return (

    <div className="dib mt">   
      <div className="card">
        <div className="book">
          <div className="cover">
            <img className="cover__img" src={props.cover}  alt='cover'/>
          </div>
      
          <div className="tc">
            <div className="title">{props.name}</div>
            <div className="author">{props.author}</div>
            <div className="small dib"><span>$ {props.pbd.toFixed(2)}</span></div>
            <div className="dib bdr--right"></div>
            <div className="big dib italics"><span>$ {props.pad.toFixed(2)}</span></div>
            <div className="mt2">
            <span className={"status " + 
            ((props.status.toLowerCase() === 'available')? 'available' : 'nostock')}>{props.status}</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
