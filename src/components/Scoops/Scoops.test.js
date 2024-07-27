import { fireEvent, render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

test("Renders Cards according to datas from API", async () => {
  render(<Scoops />);

  const images = await screen.findAllByAltText("flavor");

  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Adding and clearing functions for flavors change total price", async () => {
  const user = userEvent.setup();
  render(<Scoops />);

  const addButtons = await screen.findAllByRole("button", { name: /add/i });
  const clearButtons = await screen.findAllByRole("button", { name: /clear/i });
  const price = screen.getByTestId("total");

  expect(price.textContent).toBe("0");

  await user.click(addButtons[0]);

  expect(price.textContent).toBe("2");

  await user.dblClick(addButtons[2]);

  expect(price.textContent).toBe("6");

  await user.click(clearButtons[0]);

  expect(price.textContent).toBe("4");

  await user.click(clearButtons[2]);

  expect(price.textContent).toBe("0");
});

