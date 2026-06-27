import { render, screen } from "@testing-library/react";
import Navbar from "@/components/layout/Navbar";

describe("Navbar", () => {
  it("renders a navigation landmark", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeTruthy();
  });
});
