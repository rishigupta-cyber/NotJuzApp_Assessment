import { Router } from "express";
import { create, find } from "../models/Product";
import sanitize from "../utils/sanitize";

const router = Router();

router.post("/", async (req, res) => {
  const product = await create(req.body);
  res.json(product);
});

router.get("/search", async (req, res) => {
  let q = sanitize(req.query.q || "");

  if (typeof q !== "string" || q.length > 50) {
    return res.status(400).send("Invalid query");
  }

  const data = await find({
    name: { $regex: q, $options: "i" }
  });

  res.json(data);
});

export default router;