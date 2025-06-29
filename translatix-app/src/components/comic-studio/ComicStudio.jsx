import React from "react";
import Header from "./Header";
import PageList from "./PageList";
import RegionList from "./RegionList";
import MainViewer from "./MainViewer";
import ControlPanel from "./ControlPanel";
import "../../styles/comic-studio.css"; // Import file CSS riêng cho studio

const ComicStudio = ({ onExit }) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden comic-studio-container">
      <Header onExit={onExit} />
      <div className="flex flex-1 overflow-hidden">
        <aside
          className="w-80 flex flex-col border-r"
          style={{
            backgroundColor: "var(--bg-panel)",
            borderColor: "var(--border-color)",
          }}>
          <PageList />
          <RegionList />
        </aside>
        <MainViewer />
        <ControlPanel />
      </div>
    </div>
  );
};

export default ComicStudio;
