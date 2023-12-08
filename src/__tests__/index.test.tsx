import { beforeAll, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import App from "@/App";

describe("Home Page", () => {
  beforeAll(() => {
    cleanup();
    render(<App />);
  });
  it("should render app with default layout", () => {
    const layout = screen.getByTestId("layout");
    expect(layout).toBeInTheDocument();
  });
  it("should contain a navbar", () => {
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });
  it("should contain a footer", () => {
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
