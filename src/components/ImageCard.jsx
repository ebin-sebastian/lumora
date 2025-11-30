import React from "react";

const ImageCard = ({ art, index, onClick }) => {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img src={art.src} alt={art.title} className="card-image" />
      <div className="card-info">
        <div className="card-title">{art.title}</div>
        <div className="card-prompt">{art.prompt}</div>
      </div>
    </div>
  );
};

export default ImageCard;
