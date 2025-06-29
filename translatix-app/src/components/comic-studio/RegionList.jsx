import React from "react";

const RegionList = () => (
  <div className="p-4 flex-1 flex flex-col">
    <h3 className="font-semibold mb-2">Vùng dịch trên Trang 01</h3>
    <nav className="flex-1 overflow-y-auto">
      <ul className="space-y-1">
        <li
          className="p-2 rounded-md cursor-pointer flex items-start gap-3 text-white"
          style={{ backgroundColor: "var(--active-bg)" }}>
          <span className="mt-1">💬</span>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold">Ô thoại 1</p>
            <p className="text-xs text-slate-200 truncate">
              お前にできんのか？
            </p>
          </div>
        </li>
        <li className="p-2 rounded-md cursor-pointer flex items-start gap-3">
          <span className="mt-1">💬</span>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold">Ô thoại 2</p>
            <p
              className="text-xs truncate"
              style={{ color: "var(--text-secondary)" }}>
              やめろ！
            </p>
          </div>
        </li>
      </ul>
    </nav>
  </div>
);

export default RegionList;
