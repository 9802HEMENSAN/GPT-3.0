import React, { useEffect, useState } from "react";
import "./style.css";
import { items } from "./items";

export default function Solution() {
  let [data, setData] = useState([...items]);
  const [category, setCategory] = useState([]);

  const handleCategory = (e) => {
    let newCategory = [...category];
    let value = e.target.getAttribute("data-testid");
    if (value == "Bags-button") {
      value = "Bags";
    } else if (value == "Watches-button") {
      value = "Watches";
    } else if (value == "Sports-button") {
      value = "Sports";
    } else if (value == "Sunglasses-button") {
      value = "Sunglasses";
    }

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let mainData = [];
    if (category.length > 0) {
      for (let i = 0; i < category.length; i++) {
        let filterData = data.filter((el) => el.category == category[i]);
        mainData = [...mainData, ...filterData];
      }
      setData(mainData);
    }
  }, [category]);
  console.log(data);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>MoonshotX Filters</h2>
      <div className="buttons-container">
        <button
          onClick={handleCategory}
          data-testid="Bags-button"
          className={category.includes("Bags") ? "button active" : "button"}
        >
          Bags
        </button>
        <button
          onClick={handleCategory}
          data-testid="Watches-button"
          className={category.includes("Watches") ? "button active" : "button"}
        >
          Watches
        </button>
        <button
          onClick={handleCategory}
          data-testid="Sports-button"
          className={category.includes("Sports") ? "button active" : "button"}
        >
          Sports
        </button>
        <button
          onClick={handleCategory}
          data-testid="Sunglasses-button"
          className={
            category.includes("Sunglasses") ? "button active" : "button"
          }
        >
          Sunglasses
        </button>
      </div>
      <div className="items-container">
        {data.map((el) => (
          <div className="item">
            <div>{el.name}</div>
            <div className="category">{el.category}</div>
          </div>
        ))}
      </div>         
    </div>
  );
}
