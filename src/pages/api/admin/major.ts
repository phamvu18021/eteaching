import { fetchAuth } from "@/ultil/fetch-auth";
import type { NextApiRequest, NextApiResponse } from "next";

const odoo_api = process.env.ODOO_URL || "http://127.0.0.1:8069";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb" // Set desired value here
    }
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const token = process.env.NEXT_PUBLIC_TOKEN_NEXT;
  const headerAuth = req.headers["authorization"];
  const query = req.query as { [key: string]: string };
  const { slug } = query;
  const METHOD = req.method;

  const responOdoo = await fetchAuth({
    api_url: `${odoo_api}/api/admin/major/?slug=${slug}`,
    method: "POST"
  });

  const data = await responOdoo.json();

  try {
    if (headerAuth === token && data?.data) {
      switch (METHOD) {
        case "POST": {
          res.status(200).json({
            message: "successfully",
            data: data?.data
          });
          return;
        }

        default:
          res.status(201).json({ message: "Method not supported" });
      }
    } else if (data?.data) {
      res.status(401).json({ error: "Authentication error" });
    } else {
      res.status(404).json({ error: "Major not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
