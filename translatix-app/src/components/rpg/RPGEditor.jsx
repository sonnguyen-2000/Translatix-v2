import React, { useEffect, useState } from "react";
import "../../styles/rpg-editor.css";

const RPGEditor = ({ selectedFile, onExit }) => {
  const mockData = {
    fileName: selectedFile?.name || "Map001.json",
    sceneName: "EV001: Trưởng làng Elara",
    originalText: "Chào mừng đến với Translatix!",
    previewName: "Trưởng làng Elara",
    previewImage: "https://via.placeholder.com/40x40.png?text=Char",
  };

  return (
    <div className="rpg-editor-container">
      <header className="rpg-header">
        <div className="rpg-header-title">
          <span>Translatix Editor</span>
          <span className="hidden sm:inline">Dự án: Demo RPG</span>
        </div>
        <button className="rpg-exit-button" onClick={onExit}>
          Thoát
        </button>
      </header>

      <div className="rpg-body">
        <aside className="rpg-sidebar">
          <input
            className="rpg-search"
            placeholder="Tìm kiếm file, sự kiện..."
          />
          <div className="rpg-file">
            <span role="img" aria-label="map">
              🗺️
            </span>{" "}
            {mockData.fileName}
          </div>
          <button className="rpg-scene-btn">{mockData.sceneName}</button>
        </aside>

        <main className="rpg-main">
          <div className="rpg-scene-title">{mockData.sceneName}</div>
          <div className="rpg-scene-block">
            <div className="rpg-face-info">
              <strong>Hiển thị khuôn mặt</strong>
              <small>Faceset: Elara, Index: 0</small>
            </div>
            <div className="rpg-dialog">
              <label>Văn bản gốc</label>
              <p>{mockData.originalText}</p>
              <label>Bản dịch</label>
              <textarea
                className="rpg-translate-box"
                placeholder="Nhập bản dịch..."></textarea>
              <div className="rpg-tools">
                <button className="rpg-autotrans-btn">✨ Dịch tự động</button>
              </div>
            </div>
            <div className="rpg-command">
              <span>🔷 Lệnh: Hiển thị lựa chọn cho người chơi</span>
            </div>
            <div className="rpg-next">
              <button className="rpg-next-btn">Lưu & Sự kiện kế tiếp →</button>
            </div>
          </div>
        </main>

        <aside className="rpg-preview">
          <div className="rpg-tab">
            <button className="rpg-tab-btn active">Ngữ cảnh</button>
            <button className="rpg-tab-btn">Công cụ</button>
          </div>
          <div className="rpg-preview-card">
            <img src={mockData.previewImage} alt="Character" />
            <div className="rpg-preview-name">{mockData.previewName}</div>
            <div className="rpg-preview-text">...</div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RPGEditor;
