import { Router } from "express";
import { create } from "../models/Review";
import xss from "xss";

const router = Router();

router.post("/", async (req, res) => {
  const cleanComment = xss(req.body.comment);

  const review = await create({
    user: req.session.user.id,
    product: req.body.product,
    rating: req.body.rating,
    comment: cleanComment
  });

  res.json(review);
});

export default router;