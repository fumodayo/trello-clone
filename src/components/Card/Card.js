import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { card } = props;

  return (
    <div className="card-item">
      {card.cover && (
        <img
          src={card.cover}
          className="card-cover"
          alt="alt-img"
          onMouseDown={(e) => e.preventDefault()}
        />
      )}
      {card.title}
    </div>
  );
};

export default Card;
