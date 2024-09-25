import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/msg", () => {
    return HttpResponse.json(
      {
        message: "This is a mocked response from the shared MSW config",
      },
      { status: 200 }
    );
  }),
];
