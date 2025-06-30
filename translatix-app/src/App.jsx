import React, { useState } from "react";
import ThemeToggle from "./components/ui/ThemeToggle";
import Card from "./components/ui/Card";
import useStarfield from "./hooks/useStarfield";
import Modal from "./components/ui/Modal";
import ComicStudio from "./components/comic-studio/ComicStudio";
import RPGEditor from "./components/rpg/RPGEditor";
import "./styles/theme.css";

const App = () => {
  const canvasRef = useStarfield();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [rpgFile, setRpgFile] = useState(null);

  const openModal = (platform) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFileSelect = (file) => {
    console.log(`File selected for platform ${selectedPlatform}:`, file);
    closeModal();

    setTimeout(() => {
      if (selectedPlatform === "rpg") {
        setRpgFile(fakeRpgProject);
        // setRpgFile(file);
        setActiveProject("rpg");
      } else if (selectedPlatform === "comic") {
        setActiveProject("comic");
      } else {
        alert(`Đã chọn file cho ${selectedPlatform} nhưng chưa hỗ trợ`);
      }
    }, 300);
  };

  const exitStudio = () => {
    setActiveProject(null);
    setRpgFile(null);
  };

  // --- Render Studio View ---
  if (activeProject === "comic") {
    return <ComicStudio onExit={exitStudio} />;
  }

  if (activeProject === "rpg") {
    return <RPGEditor onExit={exitStudio} selectedFile={rpgFile} />;
  }

  const fakeRpgProject = {
    name: "Demo RPG",
    files: [
      {
        type: "map",
        name: "Map001.json",
        events: [
          {
            id: "EV001",
            name: "Trưởng làng Elara",
            script: [
              {
                code: 101,
                face: {
                  name: "Elara",
                  index: 0,
                  img: "https://via.placeholder.com/48x48/475569/e2e8f0.png?text=Elara",
                },
              },
              {
                code: 401,
                text: "Chào mừng đến với Translatix!",
              },
              {
                code: 108,
                comment: "Hiển thị lựa chọn cho người chơi",
              },
            ],
          },
        ],
      },
    ],
  };

  // --- Render Homepage View ---
  return (
    <>
      <canvas
        ref={canvasRef}
        id="starfield-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -3,
        }}
      />
      <ThemeToggle />
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
        <main className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl font-black mb-4 fadeInUpScale"
              style={{ animationDelay: "0.1s", textWrap: "balance" }}>
              Chọn Nền Tảng Dịch Thuật
            </h1>
            <p
              className="text-lg max-w-3xl mx-auto mb-16 fadeInUpScale text-secondary"
              style={{ animationDelay: "0.2s", textWrap: "balance" }}>
              Giải pháp bản địa hóa chuyên nghiệp, trực quan và mạnh mẽ cho các
              dự án của bạn.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              icon="🎮"
              title="Dịch Game RPG"
              description="Cốt truyện, nhiệm vụ, vật phẩm, lời thoại phong phú."
              animationDelay={0.3}
              onClick={() => openModal("rpg")}
            />
            <Card
              icon="🧩"
              title="Dịch Game Unity"
              description="Ngôn ngữ, UI/UX và nội dung phức tạp từ engine."
              animationDelay={0.4}
              onClick={() => openModal("unity")}
            />
            <Card
              icon="🎯"
              title="Dịch Game Unreal"
              description="Dự án Unreal Engine chuyên sâu, hiệu ứng đỉnh cao."
              animationDelay={0.5}
              onClick={() => openModal("unreal")}
            />
            <Card
              icon="📚"
              title="Dịch Truyện Tranh"
              description="Lời thoại, hiệu ứng âm thanh, giữ trọn vẹn phong cách."
              animationDelay={0.6}
              onClick={() => openModal("comic")}
            />
          </div>
        </main>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        platform={selectedPlatform}
        onFileSelect={handleFileSelect}
      />
    </>
  );
};

export default App;
