import React from 'react';

const Card = ({ tool }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={tool.image} alt={tool.name} />
      </div>
      <p className="tip">{tool.name}</p>
      <p className="second-text">{tool.description}</p>
    </div>
  );
};

export default Card;
