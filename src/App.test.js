import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("check inputs and click submit button", async () => {
  render(<App />);

  const button = screen.getByTestId(/button/i);
  // console.log(button.type);
  const message = screen.getByLabelText(/message/i);
  const firstName = screen.getByLabelText(/first Name/i);
  const lastName = screen.getByLabelText(/last Name/i);
  const email = screen.getByLabelText(/email/i);

  fireEvent.change(firstName, { target: { value: "TES" } });
  console.log("First", firstName.value);
  fireEvent.change(lastName, {
    target: { value: "TEST LAST" },
  });
  console.log("Last", lastName.value);
  fireEvent.change(email, {
    target: { value: "TEST@EMAIL.COM" },
  });
  console.log("Email", email.value);
  fireEvent.change(message, { target: { value: "TEST MESSAGE" } });
  console.log("Message", message.value);

  fireEvent.click(button);

  const end = await screen.findByTestId("end");
});
test("check inputs and click submit button", async () => {
  render(<App />);

  const button = screen.getByTestId(/button/i);
  // console.log(button.type);
  const message = screen.getByLabelText(/message/i);
  const firstName = screen.getByLabelText(/first Name/i);
  const lastName = screen.getByLabelText(/last Name/i);
  const email = screen.getByLabelText(/email/i);

  fireEvent.change(firstName, { target: { value: "TEST" } });
  console.log("First", firstName.value);
  fireEvent.change(lastName, {
    target: { value: "TEST LAST" },
  });
  console.log("Last", lastName.value);
  fireEvent.change(email, {
    target: { value: "TEST@EMAIL.COM" },
  });
  console.log("Email", email.value);
  fireEvent.change(message, { target: { value: "TEST MESSAGE" } });
  console.log("Message", message.value);

  fireEvent.click(button);

  const end = await screen.findByTestId("end");
});
