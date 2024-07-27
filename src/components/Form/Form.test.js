import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test(" Is the button active based on approval of the conditions?", () => {
  render(<Form />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();
});

test("Notification appears while hovering over button", () => {
  render(<Form />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/actually deliver/i);

  fireEvent.click(checkbox);

  expect(alert).not.toBeVisible();

  fireEvent.mouseEnter(button);

  expect(alert).toBeVisible();

  fireEvent.mouseLeave(button);

  expect(alert).not.toBeVisible();
});
