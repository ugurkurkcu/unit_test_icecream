import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../Cards";

const Scoops = () => {
  const [scoops, setScoops] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4004/scoops")
      .then((res) => setScoops(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const clearFromBasket = (deleted_name) => {
    const filtered = basket.filter((i) => i.name !== deleted_name);

    setBasket(filtered);
  };
  const amount = (selected) => {
    const filtered = basket.filter((i) => i.id === selected);
    return filtered.length;
  };

  return (
    <div className="mb-4">
      <h1>Ice Cream Flavors</h1>
      <p>
        1 scoop <span className=" text-success fw-bold">2</span> $
      </p>
      <h3>
        Coast for Flavors{" "}
        <span data-testid="total" className=" text-success fw-bold">
          {basket.length * 2}
        </span>{" "}
        $
      </h3>

      <div className=" row gap-5 justify-content-between p-4 mt-4">
        {scoops.map((i, k) => (
          <Cards
            addToBasket={addToBasket}
            clearFromBasket={clearFromBasket}
            amount={amount}
            key={k}
            data={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
