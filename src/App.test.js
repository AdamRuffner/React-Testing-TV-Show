import React from "react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent, wait } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { mockData } from "./mockData";
jest.mock("./api/fetchShow");

describe("App tests", () => {
  test("renders without errors", () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);
  });

  test("renders dropdown menu", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);
    expect(dropdown).toBeTruthy();
  });

  test("shows seasons", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);

    userEvent.click(dropdown);
    const seasonOption = await screen.findByText(/season 1/i);
    expect(seasonOption).toBeTruthy();
  });
});
