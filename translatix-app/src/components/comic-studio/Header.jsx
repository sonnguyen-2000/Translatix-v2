import React from "react";

const Header = ({ onExit }) => (
  <header
    className="w-full flex items-center justify-between px-4 py-2 border-b flex-shrink-0"
    style={{
      backgroundColor: "var(--bg-header)",
      borderColor: "var(--border-color)",
    }}>
    <div className="flex items-center gap-4">
      <h1 className="text-lg font-bold">Translatix Comic Studio</h1>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold">Dự án:</span>
        <span style={{ color: "var(--text-secondary)" }}>
          One Piece - Chap 1050
        </span>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <button
        onClick={onExit}
        className="text-sm px-3 py-1 rounded-md"
        style={{ backgroundColor: "var(--btn-secondary-bg)" }}>
        Quay lại
      </button>
      <button
        className="text-sm px-3 py-1 rounded-md text-white"
        style={{ backgroundColor: "var(--btn-bg)" }}>
        Lưu & Xuất file
      </button>
    </div>
  </header>
);

export default Header;
