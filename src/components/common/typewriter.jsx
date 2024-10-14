import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay, Color }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <Typography variant="body1" color={Color}>
      {currentText}
    </Typography>
  );
};

export default Typewriter;
