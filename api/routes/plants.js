const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    code: "noice",
    message: "Getting the plansts you requested...",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    code: "noice",
    message: "Creating the plansts you requested...",
  });
});

router.get("/:plantId", (req, res, next) => {
  const id = req.params.plantId;
  if (id === "unique") {
    res.status(200).json({
      code: "noice",
      message: "Getting you that unique plant you requested...",
      id: id,
    });
  } else {
      res.status(200).json({
          code: "Noice",
          message: "Here's the plant with the id you requested",
      })
  }
});

router.patch('/:plantId', (req, res, next) => {
    res.status(200).json({
        code: "noice",
        message: "Updated plant"
    })
});

router.delete('/:plantId', (req, res, next) => {
    res.status(200).json({
        code: "noice",
        message: "Deleted the plant :("
    })
})
module.exports = router;
