import { render, screen, waitFor } from "@testing-library/react";
import JokeFetcher from "../components/Joke/Joke";
import { server } from "../mocks/server";

describe("Joke component", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  test("should be rendered", async () => {
    render(<JokeFetcher />);

    expect(screen.queryByRole("heading")).toHaveTextContent(/loading/i);
    // expect(screen.getByRole("heading")).toHaveTextContent(/haha/) //xxxxx
    //1
    await waitFor(() => {
      expect(screen.queryByRole("heading")).toHaveTextContent(/haha/);
    });
    //2
    expect(await screen.findByRole("heading")).toHaveTextContent(/haha/)
  });
});
