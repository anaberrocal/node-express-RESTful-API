const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    code: "noice",
    message: "Orders were fetched",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    code: "noice",
    message: "Order was created",
  });
});

router.post("/:orderId", (req, res, next) => {
    const id = req.params.orderId
    res.status(200).json({
      code: "noice",
      message: "Created order",
      id: id
    });
  });
  
  module.exports = router;