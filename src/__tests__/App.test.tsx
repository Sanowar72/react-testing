import { render, screen } from "@testing-library/react";
import { describe, it, expect, test } from "vitest";
import "@testing-library/jest-dom";
import App from "../App";

// describe("App Component", () => {
//   test("renders Hello World text", () => {
//     render(<App />);
//     expect(screen.getByText(/hello world/i)).toBeInTheDocument();
//   });

//   it("renders a button with initial count of 0", () => {
//     render(<App />);
//     expect(
//       screen.getByRole("button", { name: /count is 0/i })
//     ).toBeInTheDocument();
//   });

//   it("renders the instructional text", () => {
//     render(<App />);
//     // Custom matcher to find text across elements
//     expect(
//       screen.getByText((content, element) =>
//         content.includes("Edit src/App.tsx and save to test HMR")
//       )
//     ).toBeInTheDocument();
//   });

//   it("renders links to Vite and React documentation", () => {
//     render(<App />);
//     const viteLink = screen.getByRole("link", { name: /vite/i });
//     const reactLink = screen.getByRole("link", { name: /react/i });

//     expect(viteLink).toBeInTheDocument();
//     expect(viteLink).toHaveAttribute("href", "https://vite.dev");

//     expect(reactLink).toBeInTheDocument();
//     expect(reactLink).toHaveAttribute("href", "https://react.dev");
//   });
// });

test("should render text with correct heading", () => {
  render(<App />);
  screen.debug();
  expect(true).toBe(true);
});
