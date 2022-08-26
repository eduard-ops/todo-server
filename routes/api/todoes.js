const express = require("express");

const router = express.Router();

const { ctrlWrapper, validation } = require("../../middlewares");

const { todoes: ctrl } = require("../../controlles");

const {
  joiSchema,
  joiSchemaText,
  joiSchemaComplite,
  joiSchemaChild,
} = require("../../models/todo");

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addTodo));

router.post("/child", ctrlWrapper(ctrl.addTodoChild));

router.put(
  "/:todoId/complite",
  validation(joiSchemaComplite),
  ctrlWrapper(ctrl.updateIsComplited)
);

router.put("/:todoId", validation(joiSchemaText), ctrlWrapper(ctrl.updateTodo));

router.delete(
  "/:todoId",
  validation(joiSchemaChild),
  ctrlWrapper(ctrl.deleteTodo)
);

module.exports = router;
