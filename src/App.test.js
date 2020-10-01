import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("test", async () => {
  render(<App />);

  const button = screen.getByTestId(/button/i);
  const message = screen.getByLabelText(/message/i);
  const firstName = screen.getByLabelText(/first Name/i);
  const lastName = screen.getByLabelText(/last Name/i);
  const email = screen.getByLabelText(/email/i);

  fireEvent.change(firstName, { target: { value: "22" } });
  fireEvent.change(lastName, { target: { value: "TEST LAST" } });
  fireEvent.change(email, { target: { value: "TEST@EMAIL.COM" } });
  fireEvent.change(message, { target: { value: "TEST MESSAGE" } });

  fireEvent.click(button);

  const end = await screen.getByTestId("end");
});
