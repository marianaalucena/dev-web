import { render, screen } from "@testing-library/react";
import App from "./App";

test("render title page", () => {
  render(<App />);
  const toDoListTitle = screen.getByText("Metas");
  expect(toDoListTitle).toBeInTheDocument();
});
