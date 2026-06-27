import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";

describe("Hero", () => {
  it("renders an h1 heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
  });
});
