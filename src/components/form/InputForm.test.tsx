import { beforeEach, describe, expect, it, test } from "vitest";
import { logRoles, render, screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import InputForm from "./InputForm";

const getFormElements = () => {
  const elements = {
    nameInput: screen.getByLabelText(/name/i),
    emailInput: screen.getByLabelText(/email/i),
    submitButton: screen.getByRole("button", {
      name: /submit/i,
    }),
    passwordInput: screen.getByLabelText(/^Password$/i),
    confirmPasswordInput: screen.getByLabelText(/^Confirm Password$/i),
  };
  return elements;
};

describe("InputForm Component", () => {
  let user: UserEvent;
  beforeEach(() => {
    console.log("it will run before very test cases");
    user = userEvent.setup();
    const { container } = render(<InputForm />);
    screen.debug();
    logRoles(container);
  });

  test("should render input fields with empty initial values", () => {
    const { nameInput, emailInput, passwordInput, confirmPasswordInput } =
      getFormElements();
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
    expect(confirmPasswordInput).toHaveValue("");
    const name = screen.getByRole("textbox", { name: /email/i });
    expect(name).toHaveValue("");
    expect(passwordInput).toHaveValue("");
  });

  test("should allow users to type in input fields", async () => {
    const { nameInput, emailInput, passwordInput, confirmPasswordInput } =
      getFormElements();
    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "johndoe@example.com");
    await user.type(passwordInput, "securepassword123");
    await user.type(confirmPasswordInput, "securepassword123");

    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("johndoe@example.com");
    expect(passwordInput).toHaveValue("securepassword123");
    expect(confirmPasswordInput).toHaveValue("securepassword123");
  });

  test("should show an error message for invalid email", async () => {
    const { emailInput, submitButton } = getFormElements();

    // Ensure the error message is not present initially
    expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();

    // Type an invalid email
    await user.type(emailInput, "invalid");

    // Submit the form
    await user.click(submitButton);

    // Debug the DOM after submission
    screen.debug();
    await screen.findByText(/invalid email/i);

    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "invalid email"
    );
  });
});
