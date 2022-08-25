const express = require("express");

const router = express.Router();

const { ctrlWrapper, validation } = require("../../middlewares");

const { todoes: ctrl } = require("../../controlles");

const {
  joiSchema,
  joiSchemaText,
  joiSchemaComplite,
} = require("../../models/todo");

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addTodo));

router.put(
  "/:todoId/complite",
  validation(joiSchemaComplite),
  ctrlWrapper(ctrl.updateIsComplited)
);

router.put("/:todoId", validation(joiSchemaText), ctrlWrapper(ctrl.updateTodo));

router.delete("/:todoId", ctrlWrapper(ctrl.deleteTodo));

module.exports = router;
