const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const Todo = sequelize.define(
  "todoes",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    todoText: { type: DataTypes.STRING },
    isComplited: {
      type: DataTypes.BOOLEAN,
    },
    subNote: { type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: [] },
    parentId: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

const Joi = require("joi");

const joiSchema = Joi.object({
  todoText: Joi.string().trim().required(),
  isComplited: Joi.boolean(),
  subNote: Joi.array(),
});

const joiSchemaChild = Joi.object({
  todoText: Joi.string().trim().required(),
  isComplited: Joi.boolean(),
  subNote: Joi.array(),
  parentId: Joi.number().required(),
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
  joiSchemaChild,
  Todo,
};
