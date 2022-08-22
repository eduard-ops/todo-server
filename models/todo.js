const Joi = require("joi");

const joiSchema = Joi.object({
  todoText: Joi.string().trim().required(),
  isComplited: Joi.bool(),
  subNote: Joi.array(),
});

module.exports = {
  joiSchema,
};
