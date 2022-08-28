const Joi = require("joi");

const joiSchema = Joi.object({
  todoText: Joi.string().trim().required(),
  isComplited: Joi.boolean(),
  parentId: Joi.number().required(),
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
};
