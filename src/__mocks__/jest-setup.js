import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeAll(() => {
  console.log("jest setup");
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
