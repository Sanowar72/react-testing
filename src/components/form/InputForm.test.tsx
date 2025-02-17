import { beforeEach, describe, expect, test } from "vitest";
import { logRoles, render, screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import InputForm from "./InputForm";

const getFormElements = () => {
  const elements = {
    nameInput: screen.getByLabelText(/name/i) as HTMLInputElement,
    emailInput: screen.getByLabelText(/email/i) as HTMLInputElement,
    submitButton: screen.getByRole("button", {
      name: /submit/i,
    }) as HTMLButtonElement,
    passwordInput: screen.getByLabelText(/^Password$/i) as HTMLInputElement,
    confirmPasswordInput: screen.getByLabelText(
      /^Confirm Password$/i
    ) as HTMLInputElement,
  };
  return elements;
};

describe("InputForm Component", () => {
  //it will run before any test cases so no need to write render inside every test callback functions
  let user: UserEvent;
  beforeEach(() => {
    console.log("it will run before very test cases");
    user = userEvent.setup();
    const { container } = render(<InputForm />);
    screen.debug();
    logRoles(container);
  });

  test("should render input fields with empty initial values", () => {
    // Get input fields by their labels
    const { nameInput, emailInput, passwordInput, confirmPasswordInput } =
      getFormElements();
    // Ensure the inputs are initially empty
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
    expect(confirmPasswordInput).toHaveValue("");
    // by using get by role
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

  //   test("should submit the form and log data", async () => {
  //     const consoleSpy = vi.spyOn(console, "log"); // Mock console.log
  //     render(<InputForm />);
  //     const user = userEvent.setup();

  //     const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
  //     const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
  //     const passwordInput = screen.getByRole("textbox", {
  //       name: "Password",
  //     }) as HTMLInputElement;
  //     const confirmPasswordInput = screen.getByRole("textbox", {
  //       name: "Confirm Password",
  //     }) as HTMLInputElement;

  //     // Simulate user input
  //     await user.type(nameInput, "John Doe");
  //     await user.type(emailInput, "john@example.com");
  //     await user.type(passwordInput, "password123");
  //     await user.type(confirmPasswordInput, "password123");

  //     // Submit the form
  //     await user.click(submitButton);

  //     // Expect console.log to have been called with form data
  //     expect(consoleSpy).toHaveBeenCalledWith("This is form data:", {
  //       name: "John Doe",
  //       email: "john@example.com",
  //       password: "password123",
  //       confirmPassword: "password123",
  //     });

  //     consoleSpy.mockRestore(); // Restore console.log
  //   });
});
