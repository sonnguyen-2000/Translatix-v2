import React from "react";

const ControlPanel = () => (
  <aside
    className="w-96 flex flex-col border-l"
    style={{
      backgroundColor: "var(--bg-panel)",
      borderColor: "var(--border-color)",
    }}>
    <div className="p-4 flex-1 overflow-y-auto space-y-5">
      <div>
        <h3 className="font-bold mb-2">Vùng dịch: Ô thoại 1</h3>
      </div>
      <div>
        <label
          className="text-sm font-semibold mb-1 block"
          style={{ color: "var(--text-secondary)" }}>
          Văn bản gốc
        </label>
        <textarea
          className="w-full p-2 text-base"
          rows="2"
          readOnly
          value="お前にできんのか？"></textarea>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <label
            className="text-sm font-semibold"
            style={{ color: "var(--text-secondary)" }}>
            Bản dịch
          </label>
          <button
            className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-md font-semibold"
            style={{
              color: "var(--btn-bg)",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            }}>
            ✨ Dịch tự động
          </button>
        </div>
        <textarea
          className="w-full p-2 text-base"
          rows="3"
          placeholder="Nhập bản dịch..."></textarea>
      </div>
    </div>
    <div
      className="p-4 border-t flex-shrink-0 flex gap-4"
      style={{ borderColor: "var(--border-color)" }}>
      <button
        className="flex-1 p-3 rounded-lg font-semibold"
        style={{ backgroundColor: "var(--btn-secondary-bg)" }}>
        Áp dụng
      </button>
      <button
        className="flex-1 p-3 rounded-lg font-semibold text-white"
        style={{ backgroundColor: "var(--btn-bg)" }}>
        Hoàn tất & Tiếp
      </button>
    </div>
  </aside>
);

export default ControlPanel;
