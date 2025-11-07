import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import Status from "./lab/Status";

describe("Status component", () => {
  test('should render "Offline" and the button', () => {
    render(<Status />);

    expect(screen.getByText(/Offline/i)).toBeInTheDocument();
    const btn = screen.queryByRole("button", { name: /Toggle Status/i });
    expect(btn).toBeInTheDocument();
  });

  test("should toggle the status by clicking the button", async () => {
    render(<Status />);

    const btn = screen.queryByRole("button", { name: /Toggle Status/i });

    expect(screen.getByText(/Offline/i)).toBeInTheDocument();

    await userEvent.click(btn);
    expect(screen.getByText(/Online/i)).toBeInTheDocument();

    await userEvent.click(btn);
    expect(screen.getByText(/Offline/i)).toBeInTheDocument();
  });
});
