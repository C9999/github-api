"use strict";
const {faker} = require('@faker-js/faker');

// Dados @faker-js/faker
var email = faker.internet.userName();
var email_ = faker.internet.userName() + '@carfleetbr.teste.com';
var email_novo_ = faker.internet.userName() + '@carfleetbr.teste.com';
var nome_ = faker.name.firstName();
var sobre_nome_ = faker.name.lastName();
var user_name_ = faker.internet.userName();
var password_ = faker.internet.password();
var password_novo_ = faker.internet.password();
var telefone_ = faker.phone.number();
var telefone_novo_ = faker.phone.number();
var numero_id_ = faker.datatype.number(9999);
var numero_status_ = faker.datatype.number(4);

// Body criação de novo usuário..refazer
const novo_user = {
    "email": email_,
    "firstName": nome_,
    "id": numero_id_,
    "lastName": sobre_nome_,
    "password": password_,
    "phone": telefone_,
    "userStatus": numero_status_,
    "username": user_name_
};

const commonHeaders = {
     "Content-Type": "application/json"
}

module.exports = {
    commonHeaders,
};