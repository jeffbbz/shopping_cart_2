import { screen, render } from "@testing-library/react";
import ProductAddForm from "./ProductAddForm";
import userEvent from "@testing-library/user-event";

it("renders form and contains product name textbox", () => {
  render(<ProductAddForm onAddProduct={vi.fn()} onCancelAddProduct={vi.fn()}/>);
  const addFormDiv = screen.getByRole("textbox", {
    name: "Product Name:"
  })
  expect(addFormDiv).toBeInTheDocument();
});

it("changes the input text when product title changes", async () => {
  render(<ProductAddForm onAddProduct={vi.fn()} onCancelAddProduct={vi.fn()}/>);
  const inputTitle = screen.getByRole("textbox", {
    name: "Product Name:"
  })
  const user = userEvent.setup();
  await user.type(inputTitle, "blanket");
  expect(inputTitle).toHaveValue("blanket");
});

