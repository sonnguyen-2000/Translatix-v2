import React from "react";

const Card = ({ icon, title, description, animationDelay = 0 }) => {
  return (
    <div
      className="card fadeInUpScale"
      style={{ animationDelay: `${animationDelay}s` }}>
      <div className="p-8 flex-grow">
        <div className="flex items-center justify-center h-16 w-16 bg-white/10 dark:bg-black/20 rounded-full mx-auto mb-6">
          <span className="card-icon text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-8 text-secondary">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <button className="btn-primary w-full">Bắt đầu</button>
      </div>
    </div>
  );
};

export default Card;
