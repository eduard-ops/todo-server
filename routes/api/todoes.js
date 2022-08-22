const express = require("express");

const router = express.Router();

const { ctrlWrapper, validation } = require("../../middlewares");

const { todoes: ctrl } = require("../../controlles");

const { joiSchema } = require("../../models");

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.signup));

// router.put("/signup", validation(joiSchema), ctrlWrapper(ctrl.signup));

module.exports = router;
