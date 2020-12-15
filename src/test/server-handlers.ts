import { rest } from "msw";

import { endpoint } from "./api-util";

interface InputCollection {
  display_name: string;
  authorized_query_domains: string[];
}

interface OutputCollection extends InputCollection {
  id: string;
}

export const handlers = [
  rest.post<InputCollection, OutputCollection, {}>(
    `${endpoint}/v4/collections`,
    (req, res, ctx) => {
      const { display_name, authorized_query_domains } = req.body;

      return res(
        ctx.json({
          id: req.url.searchParams.get("collection_id"),
          display_name,
          authorized_query_domains,
        })
      );
    }
  ),

  rest.delete<{}, {}, { id: string }>(
    `${endpoint}/v4/collections/:id`,
    (req, res, ctx) => res(ctx.json({}))
  ),
];
