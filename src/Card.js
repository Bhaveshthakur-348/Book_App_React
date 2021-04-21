import React from "react";
import "./Card.css";

function Card({ title, Image, author, genre, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="ColImg">
        <img className="Img" src={Image} alt={title} />
      </div>
      <div>
        <div className="Header">
          <div className="BookTitle">{title}</div>
        </div>
        <div className="Author">{author}</div>
        <div className="Genre">{genre}</div>
      </div>
    </div>
  );
}
export default Card;
