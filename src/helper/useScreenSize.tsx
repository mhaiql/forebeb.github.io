import React from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState("lg");

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize("sm");
      } else if (window.innerWidth <= 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    handleResize(); // Set initial size

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
