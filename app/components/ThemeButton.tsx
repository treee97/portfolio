"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsBoxes } from "react-icons/bs";
import { BsCircleFill, BsCircle } from "react-icons/bs";

const ThemeButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center justify-center"
      >
        {theme === "dark" ? <BsCircleFill size={32} /> : <BsCircle size={32} />}
      </button>
    </div>
  );
};

export default ThemeButton;
