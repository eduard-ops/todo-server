const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const Todo = sequelize.define("todoes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  todoText: { type: DataTypes.STRING },
  isComplited: { defaultValue: false, type: DataTypes.BOOLEAN },
  subNote: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
});

const Joi = require("joi");

const joiSchema = Joi.object({
  todoText: Joi.string().trim().required(),
  isComplited: Joi.bool(),
  subNote: Joi.array(),
});

const joiSchemaText = Joi.object({
  todoText: Joi.string().trim().required(),
});

const joiSchemaComplite = Joi.object({
  isComplited: Joi.bool().required(),
});

module.exports = {
  joiSchema,
  joiSchemaText,
  joiSchemaComplite,
  Todo,
};
