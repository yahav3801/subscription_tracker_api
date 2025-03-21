import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/user.controller.js";
import autherize from "../middlewares/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", autherize, getUserById);

userRouter.post("/", (req, res) => {
  res.send({ title: "create new user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "update user by id" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete user by id" });
});

export default userRouter;
