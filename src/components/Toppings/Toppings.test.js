import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from ".";

test("Effect of adding and removing toppings on the total price", async () => {
  const user = userEvent.setup();

  render(<Toppings />);

  const price = screen.getByTestId("total");
  const checkBoxes = await screen.findAllByRole("checkbox");

  expect(price.textContent).toBe("0");
  checkBoxes.forEach((i) => expect(i).not.toBeChecked());

  await user.click(checkBoxes[0])

  expect(price.textContent).toBe("0.3")

  await user.click(checkBoxes[4])

  expect(price.textContent).toBe("0.6")

  await user.click(checkBoxes[4])

  expect(price.textContent).toBe("0.3")

  await user.click(checkBoxes[0])

  expect(price.textContent).toBe("0")
});
