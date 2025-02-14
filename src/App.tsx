import React, { useState, useEffect } from "react";
import useScreenSize from "./helper/useScreenSize";
import Login from "./components/Login";
import { message } from "antd";
import { RedoOutlined } from "@ant-design/icons";

function App() {
  const screenSize = useScreenSize();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [size, setSize] = useState(1);
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isModalOpen]);

  const handleOk = () => {
    messageApi.success("🎉 Yay! You said YES! 🎉");
    setTimeout(() => {
      setShowGif(true);
    }, 500);
  };

  const handleNoClick = () => {
    setSize((prevSize) => prevSize + 0.8);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      {contextHolder} {/* Required for message API */}
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />{" "}
      {/* ✅ Keep Login Component */}
      {screenSize === "sm" ? (
        <div className="bg-[#EDE8DC] min-h-screen flex items-center justify-center absolute inset-0">
          {!isModalOpen &&
            (showGif ? (
              <div className="bg-[#F7CFD8] w-full h-full flex flex-col items-center justify-center space-y-4">
                <p className="font-['Oooh_Baby'] text-[#493628] font-semibold text-center text-3xl px-4 ">
                  Yayyyy!! You're my Valentine! 💖
                </p>
                <p className="font-['Oooh_Baby'] text-[#493628] text-md">
                  See you tonight 🫶 - Haiqal
                </p>
                <img
                  src="https://tenor.com/view/dudu-kissing-bubu-hearts-i-love-you-i-miss-you-dudu-gif-7350208909158435592.gif"
                  alt="Love Gif"
                  className="w-64 h-auto rounded-xl"
                />
                <button
                  onClick={handleRefresh}
                  className="flex space-x-2 px-2 pt-8"
                >
                  <RedoOutlined className="translate-y-1" />
                  <p>Start over again</p>
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-screen absolute inset-0 space-y-4">
                <p className="font-['Oooh_Baby'] text-[#493628] text-2xl">
                  Do you want to be my valentine?
                </p>
                <div className="flex flex-row gap-8">
                  <button
                    onClick={handleOk}
                    style={{ transform: `scale(${size})` }}
                    className="bg-green-500 px-4 py-1 text-white rounded-xl transition-transform duration-300"
                  >
                    YES
                  </button>

                  <button
                    onClick={handleNoClick}
                    className="bg-red-800 text-white px-4 py-2 rounded-xl "
                  >
                    NO
                  </button>
                </div>
                <p className="text-xs text-gray-500">Choose wisely pls</p>

                <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-64">
                  <img
                    src="https://tenor.com/view/shakespaw-dudububu-gif-1708952084476767377.gif"
                    alt="Gif"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <p className="text-center">Hello World!</p>
        </div>
      )}
    </>
  );
}

export default App;
