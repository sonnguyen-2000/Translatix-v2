import React from "react";

// SỬA ĐỔI: Thêm prop `onClick` vào danh sách props
const Card = ({ icon, title, description, animationDelay = 0, onClick }) => {
  return (
    <div
      className="card fadeInUpScale flex flex-col" // Thêm flex-col để button luôn ở dưới
      style={{ animationDelay: `${animationDelay}s` }}>
      <div className="p-8 flex-grow">
        <div className="flex items-center justify-center h-16 w-16 bg-white/10 dark:bg-black/20 rounded-full mx-auto mb-6">
          <span className="card-icon text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-8 text-secondary">{description}</p>
      </div>
      <div className="p-6 pt-0 mt-auto">
        {" "}
        {/* Thêm mt-auto để đẩy nút xuống dưới cùng */}
        {/* SỬA ĐỔI: Gán sự kiện `onClick` cho nút */}
        <button onClick={onClick} className="btn-primary w-full">
          Bắt đầu
        </button>
      </div>
    </div>
  );
};

export default Card;
