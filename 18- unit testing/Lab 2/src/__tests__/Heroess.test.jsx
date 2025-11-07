import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/server";
import HeroesFromAPI from "./lab/Heroes";

describe("HeroesFromAPI component", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should renders no heroes available when API returns empty list", async () => {
    server.use(
      http.get("http://localhost:3000/heroes", () => {
        return HttpResponse.json([], { status: 200 });
      })
    );

    render(<HeroesFromAPI />);
    expect(await screen.findByText(/No heroes available/i)).toBeInTheDocument();
  });

  test("should render heroes fetched from API", async () => {
    render(<HeroesFromAPI />);
    expect(await screen.findByText(/superman/i)).toBeInTheDocument();
    expect(await screen.findByText(/batman/i)).toBeInTheDocument();
  });

  test.skip("Bonus: should render error if response has status 500", async () => {
    server.use(
      http.get("http://localhost:3000/heroes", () => {
        return HttpResponse.json({ message: "Error" }, { status: 500 });
      })
    );

    render(<HeroesFromAPI />);
    expect(await screen.findByRole("heading")).toHaveTextContent(
      /failed to fetch heroes/i
    );
  });
});
