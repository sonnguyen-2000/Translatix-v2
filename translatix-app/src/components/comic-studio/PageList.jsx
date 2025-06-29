import React from "react";

const PageList = () => (
  <div className="p-4 border-b" style={{ borderColor: "var(--border-color)" }}>
    <h3 className="font-semibold mb-2">Danh sách trang</h3>
    <div className="h-40 overflow-y-auto space-y-2 pr-1">
      <div
        className="p-1 rounded-md border-2"
        style={{ borderColor: "var(--active-bg)" }}>
        <img
          src="https://placehold.co/200x280/1e293b/e2e8f0?text=Trang+01"
          alt="Page 1"
          className="w-full rounded-sm"
        />
        <p className="text-xs text-center mt-1">page_01.png</p>
      </div>
      <div className="p-1 rounded-md border-2 border-transparent">
        <img
          src="https://placehold.co/200x280/1e293b/e2e8f0?text=Trang+02"
          alt="Page 2"
          className="w-full rounded-sm"
        />
        <p className="text-xs text-center mt-1">page_02.png</p>
      </div>
    </div>
  </div>
);

export default PageList;
