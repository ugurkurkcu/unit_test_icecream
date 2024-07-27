import axios from "axios";
import React, { useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useState(() => {
    axios
      .get("http://localhost:4004/toppings")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const handleChange = (isChecked, data) => {
    if (isChecked) {
      setBasket([...basket, data]);
    } else setBasket(basket.filter((i) => i.id !== data.id));
  };

  return (
    <div>
      <h1>Topping Options</h1>

      <p>
        <span className=" text-success fw-bold">0.3</span> $ per topping
      </p>

      <h3>
        Coast for Toppings <span data-testid="total" className=" text-success">{(basket.length * 3) / 10}</span> $
      </h3>

      <div className=" row  gap-4 justify-content-evenly mt-4">
        {data.map((i) => (
          <div className="top-card col" key={i.id} style={{ width: "150px" }}>
            <label htmlFor={i.id}>
              <img height={100} src={i.imagePath} alt="" />

              <p className=" text-nowrap text-center">{i.name}</p>
            </label>

            <input
              onChange={(e) => handleChange(e.target.checked, i)}
              id={i.id}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
