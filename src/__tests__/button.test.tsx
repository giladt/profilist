import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import Button from "@/components/atoms/button";

describe("Buttons", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render a full button with 'test-button' text", () => {
    const childText = "test-button";
    render(<Button.Full>{childText}</Button.Full>);
    const swipeNext = screen.getByTestId("button-full");
    expect(swipeNext).toBeInTheDocument();
    expect(swipeNext).toContainHTML(childText);
  });

  it("should render a round button with 'X' inside", () => {
    const childText = "X";
    render(<Button.Round>{childText}</Button.Round>);
    const buttonRound = screen.getByTestId("button-round");
    expect(buttonRound).toBeInTheDocument();
    expect(buttonRound).toContainHTML(childText);
  });

  it("should render a swipe-next button' text", () => {
    render(<Button.Swipe.next />);
    const swipePrev = screen.getByTestId("swipe-next");
    expect(swipePrev).toBeInTheDocument();
  });

  it("should render a swipe-prev button' text", () => {
    render(<Button.Swipe.prev />);
    const swipePrev = screen.getByTestId("swipe-prev");
    expect(swipePrev).toBeInTheDocument();
  });
});
