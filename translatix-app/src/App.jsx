import React, { useEffect } from "react";
import ThemeToggle from "./components/ui/ThemeToggle";
import Card from "./components/ui/Card";
import useStarfield from "./hooks/useStarfield";
import "./styles/theme.css";

const App = () => {
  const canvasRef = useStarfield();

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty("--x", `${e.clientX}px`);
      document.body.style.setProperty("--y", `${e.clientY}px`);
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    return () =>
      document.body.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

      <main className="w-full max-w-7xl mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-6xl font-black mb-4 fadeInUpScale"
          style={{ animationDelay: "0.1s", textWrap: "balance" }}>
          Chọn Nền Tảng Dịch Thuật
        </h1>

        <p
          className="text-lg max-w-3xl mx-auto mb-16 fadeInUpScale text-secondary"
          style={{ animationDelay: "0.2s", textWrap: "balance" }}>
          Giải pháp bản địa hóa chuyên nghiệp, trực quan và mạnh mẽ cho các dự
          án game và truyện tranh của bạn.
        </p>

        {/* Sửa ở đây: Thêm lớp grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            icon="🎮"
            title="Dịch Game RPG"
            description="Cốt truyện, nhiệm vụ, vật phẩm, lời thoại phong phú."
            animationDelay={0.3}
          />

          <Card
            icon="🧩"
            title="Dịch Game Unity"
            description="Ngôn ngữ, UI/UX và nội dung phức tạp từ engine."
            animationDelay={0.4}
          />

          <Card
            icon="🎯"
            title="Dịch Game Unreal"
            description="Dự án Unreal Engine chuyên sâu, hiệu ứng đỉnh cao."
            animationDelay={0.5}
          />

          <Card
            icon="📚"
            title="Dịch Truyện Tranh"
            description="Lời thoại, hiệu ứng âm thanh, giữ trọn vẹn phong cách."
            animationDelay={0.6}
          />
        </div>
      </main>
    </>
  );
};

export default App;
