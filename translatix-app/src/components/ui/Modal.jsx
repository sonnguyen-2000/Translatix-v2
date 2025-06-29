import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUploadCloud, FiFileText, FiTrash2 } from "react-icons/fi";

// SỬA ĐỔI: Thêm prop `onFileSelect`
const Modal = ({ isOpen, onClose, platform, onFileSelect }) => {
  const [recentFiles, setRecentFiles] = useState([]);

  const modalData = {
    rpg: { icon: "🎮", title: "Mở File Game RPG" /* ... */ },
    unity: { icon: "🧩", title: "Mở Dự Án Unity" /* ... */ },
    unreal: { icon: "🎯", title: "Mở Dự Án Unreal Engine" /* ... */ },
    comic: {
      icon: "📚",
      title: "Chọn File Truyện Tranh",
      description:
        "Tải lên các file ảnh (JPG, PNG) hoặc file nén (ZIP, CBZ) chứa các trang truyện.",
      fakeFiles: [
        {
          name: "One-Piece-Chap-1000.zip",
          size: 26214400,
          lastModified: Date.now() - 1000 * 60 * 15,
        },
        {
          name: "Jujutsu-Kaisen-Vol-5.cbz",
          size: 89128960,
          lastModified: Date.now() - 1000 * 60 * 60 * 6,
        },
      ],
    },
  };
  const data = modalData[platform] || modalData.rpg;

  useEffect(() => {
    if (!isOpen) return;
    const key = `translatix-recentFiles-${platform}`;
    const savedFiles = localStorage.getItem(key);
    setRecentFiles(savedFiles ? JSON.parse(savedFiles) : data.fakeFiles || []);
  }, [isOpen, platform]);

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const processFileSelection = (file) => {
    const key = `translatix-recentFiles-${platform}`;
    const savedFiles = JSON.parse(localStorage.getItem(key) || "[]");
    const newFile = {
      name: file.name,
      size: file.size,
      lastModified: Date.now(),
    };
    const updatedFiles = [
      newFile,
      ...savedFiles.filter((f) => f.name !== newFile.name),
    ].slice(0, 5);
    localStorage.setItem(key, JSON.stringify(updatedFiles));
    setRecentFiles(updatedFiles);

    // SỬA ĐỔI: Gọi onFileSelect để thông báo cho App.jsx
    if (onFileSelect) {
      onFileSelect(newFile);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFileSelection(file);
    }
  };

  const handleRemoveFile = (indexToRemove) => {
    const key = `translatix-recentFiles-${platform}`;
    const updatedFiles = recentFiles.filter(
      (_, index) => index !== indexToRemove
    );
    localStorage.setItem(key, JSON.stringify(updatedFiles));
    setRecentFiles(updatedFiles);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-xl rounded-2xl shadow-lg overflow-hidden"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
            onClick={(e) => e.stopPropagation()}>
            <div
              className="flex items-center justify-between p-5 border-b"
              style={{ borderColor: "var(--card-border)" }}>
              <div className="flex items-center gap-4">
                <span className="text-2xl">{data.icon}</span>
                <h2 className="text-xl font-bold">{data.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="text-2xl text-gray-400 hover:text-white transition">
                &times;
              </button>
            </div>
            <div className="p-6">
              <p
                className="mb-6 text-center text-sm"
                style={{ color: "var(--text-secondary)" }}>
                {data.description}
              </p>
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-lg cursor-pointer transition hover:bg-white/5"
                style={{ borderColor: "var(--card-border)" }}>
                <FiUploadCloud
                  className="w-10 h-10 mb-4"
                  style={{ color: "var(--text-secondary)" }}
                />
                <p
                  className="mb-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}>
                  <span className="font-semibold">
                    Kéo thả hoặc nhấn để chọn file
                  </span>
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}>
                  Tối đa 2GB
                </p>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
              {recentFiles.length > 0 && (
                <div className="mt-8 text-left">
                  <h4
                    className="text-sm font-bold mb-3 tracking-wider uppercase"
                    style={{ color: "var(--text-secondary)" }}>
                    Lịch sử tệp
                  </h4>
                  <ul className="space-y-3">
                    {recentFiles.map((file, index) => (
                      <li
                        key={index}
                        // SỬA ĐỔI: Thêm onClick để mở file từ lịch sử
                        onClick={() => processFileSelection(file)}
                        className="flex items-center justify-between p-3 rounded-lg transition-all group cursor-pointer hover:bg-[var(--hover-bg)]"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid var(--card-border)",
                        }}>
                        <div className="flex items-center gap-4 overflow-hidden">
                          <FiFileText
                            className="text-xl flex-shrink-0"
                            style={{ color: "var(--text-secondary)" }}
                          />
                          <div className="flex flex-col text-left overflow-hidden">
                            <span
                              className="text-sm font-medium truncate"
                              title={file.name}>
                              {file.name}
                            </span>
                            <span
                              className="text-xs"
                              style={{ color: "var(--text-secondary)" }}>
                              {formatBytes(file.size)}
                            </span>
                          </div>
                        </div>
                        <button
                          className="p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:bg-red-500/20 hover:text-red-400"
                          title="Xóa"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFile(index);
                          }}>
                          <FiTrash2 />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
