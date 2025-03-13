import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "get all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "get subscription by id" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "create a subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update a subscription by id" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete a subscription by id" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "get all user subscriptions by id" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "cancel user subscriptions by id" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "get upcoming subscriptions renewals" });
});

export default subscriptionRouter;
