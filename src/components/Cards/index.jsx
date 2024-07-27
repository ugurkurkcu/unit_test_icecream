import React from "react";

const Cards = ({ data, addToBasket, clearFromBasket, amount }) => {
  const id = data.id;
  return (
    <div
      className=" d-flex flex-column align-items-center gap-1 border rounded p-3"
      style={{ width: "200px" }}
    >
      <img height={"100px"} src={data.imagePath} alt="flavor" />
      <p>{data.name}</p>

      <div className=" d-flex flex-row  align-items-center gap-3">
        <button
          onClick={() => clearFromBasket(data.name)}
          style={{ width: 60 }}
          className=" btn btn-outline-danger"
        >
          Clear
        </button>
        <span data-testid="amount">{amount(id)}</span>
        <button
          onClick={() => addToBasket(data)}
          style={{ width: 60 }}
          className=" btn btn-outline-primary"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Cards;
