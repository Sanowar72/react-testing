import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hello from "./Hello";

describe("Hello component testing", () => {
  it("should render the component", async () => {
    render(<Hello />);
    expect(screen.getAllByText(/hello world/i)).toHaveLength(4);
    expect(screen.queryByText(/labla labla labla/i)).not.toBeInTheDocument();

    // Wait for the message to appear with extended timeout
    const message = await screen.findByText(
      /Message shown after 1 second/i,
      {},
      { timeout: 5000 }
    );
    expect(message).toBeInTheDocument();
  }, 10000); // Extend the timeout for this specific test
});
