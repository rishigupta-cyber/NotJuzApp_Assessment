import { Router } from "express";
import { create, findOne } from "../models/User";

const router = Router();

router.post("/register", async (req, res) => {
  const user = await create(req.body);
  res.json(user);
});

router.post("/login", async (req, res) => {
  const user = await findOne({ email: req.body.email });

  if (!user) return res.status(400).send("User not found");

  const match = await user.comparePassword(req.body.password);
  if (!match) return res.status(400).send("Wrong password");

  req.session.user = { id: user._id, role: user.role };

  res.send("Logged in");
});

export default router;