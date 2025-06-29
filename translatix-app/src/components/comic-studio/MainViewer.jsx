import React from "react";

const MainViewer = () => (
  <main
    className="flex-1 flex flex-col p-4 items-center justify-center"
    style={{ backgroundColor: "var(--bg-main)" }}>
    <div className="flex-1 w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative shadow-lg">
        <img
          src="https://placehold.co/800x1120/e0e0e0/333333?text=Comic+Page+Raw"
          alt="Trang truyện tranh"
          className="max-w-full max-h-full"
        />
        <div
          className="absolute cursor-pointer"
          style={{
            top: "10%",
            left: "15%",
            width: "30%",
            height: "15%",
            border: "2px solid var(--active-bg)",
            backgroundColor: "rgba(59, 130, 246, 0.3)",
          }}></div>
        <div
          className="absolute cursor-pointer"
          style={{
            top: "30%",
            left: "50%",
            width: "40%",
            height: "10%",
            border: "2px dashed var(--border-color)",
            backgroundColor: "rgba(51, 65, 85, 0.3)",
          }}></div>
      </div>
    </div>
    {/* Thanh công cụ zoom có thể thêm vào đây nếu cần */}
  </main>
);

export default MainViewer;
