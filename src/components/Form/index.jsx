import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <form className=" my-3  d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        className=" form-check-input"
        type="checkbox"
        id="terms"
      />

      <div className="terms-wrapper">
        <label htmlFor="terms">I have read and accept the terms.</label>

        <p style={{ visibility: isHover ? "visible" : "hidden" }}>
          We will not actually deliver a product to you.
        </p>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className=" btn btn-primary"
      >
        Confirm Order
      </button>
    </form>
  );
};

export default Form;
