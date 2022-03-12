import { render, screen } from "@testing-library/react";
import ToDoList from ".";
import userEvent from "@testing-library/user-event";

describe("ToDoList Component", () => {
  test("title ToDoList", () => {
    render(<ToDoList />);
    const toDoListTitle = screen.getByText("Metas");
    expect(toDoListTitle).toBeInTheDocument();
  });

  test("button modal", () => {
    render(<ToDoList />);
    const buttonElement = screen.getByTestId("criar-meta");
    expect(buttonElement).toBeInTheDocument();
  });

  test("event open modal", () => {
    render(<ToDoList />);
    const buttonElement = screen.getByTestId("criar-meta");

    userEvent.click(buttonElement);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  test("renders cards", () => {});
});
