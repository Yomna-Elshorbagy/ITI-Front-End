import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  http.get("https://api.chucknorris.io/jokes/random", () => {
    return HttpResponse.json({ value: "hahaha" }, { status: 200 });
  }),

  http.get("http://localhost:3000/heroes", () => {
    return HttpResponse.json(
      [
        { id: 1, name: "superman", strength: 100 },
        { id: 2, name: "batman", strength: 99 },
      ],
      { status: 200 }
    );
  }),
];

export const server = setupServer(...handlers);
