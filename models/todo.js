const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const Todoes = sequelize.define("todoes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  todoText: { type: DataTypes.STRING },
  isComplited: { type: DataTypes.BOOLEAN, default: false },
});

const Joi = require("joi");

const joiSchema = Joi.object({
  todoText: Joi.string().trim().required(),
  isComplited: Joi.bool(),
  subNote: Joi.array(),
});

module.exports = {
  joiSchema,
  Todoes,
};
