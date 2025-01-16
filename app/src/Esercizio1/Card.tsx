import './card.css';
import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt="Avatar" className="image full-width"/>
            <div className="container">
              <h4><b>{props.name}</b></h4>
              <p>see more</p>
            </div>
          </div>
    );
    }