"use strict";

// Importação de frameworks
const Joi = require("joi");

const schemaListaPreços = Joi.object().keys({
  statusCode: Joi.number().required(),
  lista_precos: Joi.object().keys({
    preco_1: Joi.string().required(),
    preco_2: Joi.string().required(),
    preco_3: Joi.string().required(),
    preco_4: Joi.string().required(),
    preco_5: Joi.string().required()
  })
});



module.exports = {
  schemaListaPreços
};