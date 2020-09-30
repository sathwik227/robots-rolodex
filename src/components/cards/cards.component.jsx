import React from 'react'
import './cards.styles.css'

export const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}
      alt="monster"
    />
    <h2>{props.monster.name === 'Patricia Lebsack' ? props.monster.name = 'Sat Red' : props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>


)