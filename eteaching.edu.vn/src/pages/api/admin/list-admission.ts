import { IAdmissionApi } from "@/interfaces/admissions";
import { fetchAuth } from "@/ultil/fetch-auth";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const token =
    process.env.NEXT_PUBLIC_TOKEN_NEXT || "610f25e22dbccb07171886c016103a86";
  const odoo_api = process.env.ODOO_URL || "http://127.0.0.1:8069";
  const headerAuth = req.headers["authorization"];
  const query = req.query as { [key: string]: string };

  const {
    school = "all",
    major = "all",
    type_object = "all",
    block = "all",
    area = "all",
    city = "all",
    method = "all",
    total_time = "all",
    block_combine = "all",
    point = "all",
    channel = "all",
    page = "1",
    perpage = "9"
  } = query;

  const METHOD = req.method;

  try {
    if (headerAuth === token) {
      const responOdoo = await fetchAuth({
        api_url: `${odoo_api}/api/admin/list-admission/?school=${school}&major=${major}&type_object=${type_object}&block=${block}&area=${area}&city=${city}&method=${method}&total_time=${total_time}&block_combine=${block_combine}&channel=${channel}&point=${point}&perpage=${perpage}&page=${page}`,
        method: "POST"
      });

      const data: {
        status: string;
        data: {
          admissions: IAdmissionApi[];
          is_last_page: boolean;
          total_documents: string | number;
        };
      } = await responOdoo.json();

      switch (METHOD) {
        case "POST": {
          res.status(200).json(data);
          return;
        }

        default:
          res.status(201).json({ message: "Method not supported" });
      }
    } else {
      res.status(401).json({ error: "Authentication error" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}