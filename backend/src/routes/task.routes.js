const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const taskController = require("../controllers/task.controller");

router.use(auth);

router.get("/", taskController.getTasks);
router.post(
  "/",
  body("title").notEmpty(),
  body("priority").optional().isIn(["low", "medium", "high"]),
  taskController.createTask
);
router.get("/:id", taskController.getTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
