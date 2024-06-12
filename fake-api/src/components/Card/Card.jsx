import { useState, useEffect } from "react";
import "./Card.css";
const url = "https://fakestoreapi.com/products";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <main className="card-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} />
          <p>{item.price}</p>
        </div>
      ))}
    </main>
  );
};

export default Card;
