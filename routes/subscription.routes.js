import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "get all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "get subscription by id" });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update a subscription by id" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete a subscription by id" });
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "cancel user subscriptions by id" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "get upcoming subscriptions renewals" });
});

export default subscriptionRouter;
