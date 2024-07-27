import { render, screen } from "@testing-library/react";
import Cards from ".";
import userEvent from "@testing-library/user-event";

const data = {
  name: "Mint chip",
  imagePath: "/images/mint-chip.png",
};

const amountMockFn = () => {
  return 5;
};

test("image, amount and title are rendered according to the prop given", () => {
  render(
    <Cards
      data={data}
      amount={amountMockFn}
      addToBasket={() => {}}
      clearFromBasket={() => {}}
    />
  );

  const amount = screen.getByTestId("amount");

  expect(amount.textContent).toBe("5");

  screen.getByText("Mint chip");

  const img = screen.getByRole("img");

  expect(img).toHaveAttribute("src", "/images/mint-chip.png");
});

test("functions are called with proper parameters when buttons are clicked", async () => {
  const user = userEvent.setup();

  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();

  render(
    <Cards
      data={data}
      amount={amountMockFn}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
    />
  );

  const buttonAdd = screen.getByRole("button", { name: /add/i });
  const buttonClear = screen.getByRole("button", { name: /clear/i });

  await user.click(buttonAdd);
  expect(addMockFn).toHaveBeenCalledWith(data);

  await user.click(buttonClear);
  expect(clearMockFn).toHaveBeenCalledWith(data.name);
});
