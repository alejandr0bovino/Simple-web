import React, { useState, useEffect } from "react";
import { data } from "./data";
import Cardiologic from "./components/Card";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';

import "./styles/style.css";

function App() {
  const [value, onChange] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".js-card-title");
    if (elements) {
      elements.forEach((e) => {
        e.style.fontSize = `${Number(value) / 149.5 + 1.21}rem`;
      });
    }
  });

  const handleClick = (num, price) => {
    setCount((current) => {
      return current + Number(num) * price;
    });
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#333",
        dark: "#666",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className="theme-container">
        <header>

          <div className="header__c1">
            <AbcOutlinedIcon />
          </div>
          <div className="header__c2">
            <h3>
              {
                count
                ? 
                <>
                  Total: <AttachMoneyIcon /> {parseFloat(count).toFixed(2)}
                </>
                : ""
              }
            </h3>

            <div className="slider">

              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <TextDecreaseIcon />

                <Slider
                  marks
                  step={10}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />

                <TextIncreaseIcon />
              </Stack>
            </div>
          </div>
        </header>

        <div className="grid-container">
          {data.map((card) => (
            <Cardiologic
              key={card.id}
              title={card.title}
              image={card.image}
              price={card.price}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
