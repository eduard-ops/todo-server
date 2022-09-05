const express = require("express");

const router = express.Router();

const { ctrlWrapper, validation } = require("../../middlewares");

const { todoes: ctrl } = require("../../controlles");

const { joiSchemaText, joiSchemaComplite } = require("../../models/todo");

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", ctrlWrapper(ctrl.addTodo));

router.patch(
  "/:todoId",
  validation(joiSchemaText),
  ctrlWrapper(ctrl.updateTodo)
);

router.patch(
  "/complited/:todoId",
  validation(joiSchemaComplite),
  ctrlWrapper(ctrl.updateComplited)
);

router.delete("/:todoId", ctrlWrapper(ctrl.deleteTodo));

router.delete("/child/:todoId", ctrlWrapper(ctrl.deleteChildTodo));

module.exports = router;
