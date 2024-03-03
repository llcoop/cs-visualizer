import { Suspense } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

const mockOnClick = jest.fn();

const MockButton = ({ ...props }) => (
  <Suspense fallback={<div data-testid="fallback">Loading...</div>}>
    <Button onClick={mockOnClick} {...props} />
  </Suspense>
);

describe("Button", () => {
  it("Renders correctly", () => {
    const { queryByTestId, getByRole, rerender, debug } = render(
      <MockButton className="my-button">Hello There</MockButton>
    );
    debug();

    // Doesn't get caught in a loading state
    const fallback = queryByTestId("fallback");
    expect(fallback).toBeNull();

    // Renders correctly
    const button = getByRole("button");
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass("button my-button");
    expect(button.innerText).toBe("Hello There");

    rerender(<MockButton disabled>General Kenobi!</MockButton>);
    debug();

    // Re-renders correctly
    expect(button).toBeDisabled();
    expect(button).toHaveClass("button");
    expect(button.innerText).toBe("General Kenobi!");
  });

  it("Properly calls functions passed into it", () => {
    const { getByRole } = render(<MockButton />);

    const button = getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
