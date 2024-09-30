import { screen, render } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";
import * as productServices from "./services/products";

vi.mock("./services/products.ts");
const mockedProducts = vi.mocked(productServices);

afterEach(() => {
  vi.resetAllMocks();
});

it ("fetches products", async () => {
  const mockedProduct: productServices.ProductSchema[] = [
    {_id: "3432435234",
      title: "Red Hat",
      price: 15,
      quantity: 4,
    },
  ];

  mockedProducts.getProducts.mockResolvedValue(mockedProduct);
  mockedProducts.getCartItems.mockResolvedValue([]);
  render(<App />);
  const titleHeading = await screen.findByRole("heading", {
    level: 3,
    name: /Red Hat/,
  });
  expect(titleHeading).toBeInTheDocument();
});

it ("adds new product", async () => {
  const mockedNewProduct: productServices.ProductSchema = {
    _id: "6577354745",
    title: "Horse Blanket",
    price: 45,
    quantity: 7,
  };

  mockedProducts.postProducts.mockResolvedValue(mockedNewProduct);
  mockedProducts.getProducts.mockResolvedValue([]);
  mockedProducts.getCartItems.mockResolvedValue([]);
  render(<App />);
  
  // filling out form and submitting logic here

})