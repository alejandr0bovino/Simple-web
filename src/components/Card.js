import React from "react";
import { useState } from 'react';

function Card(props) {
  const [message, setMessage] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [amount, setAmount] = useState(1);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(Number(event.target.value))
  }

  const editInput = () => {
    setShowInput(true)
  }

  const saveInput = () => {
    setShowInput(false)
  }

  return (
    <div className="card">
      <div className="card__image mb-2">
        <img src={props.image}/>
      </div>

      <h3 className="card__title mb-1 js-card-title">
        {message ? (
          <span>{message}</span>
        ) : (
          <span>{props.title}</span>
        )}
      </h3>

      <div className="card__edit__title mb-2">
        {showInput ? (
          <div className="card__edit__title__input">            
            <input
              id="message"
              name="message"
              type="text"          
              className="input-1"            
              placeholder="Edit title"
              onChange={handleChange}
              value={message}  
              autoFocus
            />

            <button onClick={saveInput} className="btn-3 btn-3--green">Save</button>            
          </div>
        ) : (
          <div className="card__edit__title__action">
            <button onClick={editInput} className="btn-3">Edit</button>
          </div>
        )}
      </div>

      <hr className="mb-2"/>

      <div className="card__data mb-1">
        <span className="card__data__price">${parseFloat(props.price).toFixed(2)}</span>
        <input
          className="card__data__amount"
          type="number" min="1" max="9" step="1" defaultValue="1"
          onChange={handleAmount}
        />
      </div>
      
      <div className="card__description mb-2">
        <p>
          Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion.
        </p>
      </div>

      <hr className="mb-2"/>

      <div className="card__action mb-1">
        <button type="button" className="btn-1" onClick={event => props.handleClick(amount, props.price)} >Add to cart</button>
      </div>      

      <div className="card__more">
        <a href="#">Learn More</a>
      </div>
    </div>
  );
}

export default Card;
