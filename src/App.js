import React,{useState,useEffect} from "react";
import { data } from "./data";
import Card from "./components/Card";
import './styles/style.css';

function App() {
  const [value, onChange] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const elements = document.querySelectorAll('.js-card-title');
    if (elements) {
      elements.forEach((e) => {
        e.style.fontSize = `${Number(value) / 4.5 + .95}rem`;
      });
    }
  })  

  const handleClick = (num, price) => {
    setCount((current) => {
        return current + (Number(num) * price)
    });
  };

  return (   
    <div className="theme-container">
      <header>
        <h3>{count ? `Cart total: $${count}`: ''}</h3>

        <div className="slider">
          <label htmlFor="text-size">Tamaño de texto</label>
          <input
            type="range" min="1" max="10" value={value} 
            id="text-size"
            onChange={
              ({ target: { value: radius } }) => {
                onChange(radius);
            }}
          />
        </div>
      </header>

      <div className="grid-container">
        {data.map((card) => (
          <Card key={card.id} title={card.title} price={card.price} handleClick={handleClick} /> 
        ))}
      </div>      
    </div>
  );
}

export default App;
