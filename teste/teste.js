"use strict";

// Importação de frameworks
var request = require("supertest");
var expect = require("chai").expect;
var joiAssert = require("joi-assert");

// Config
const request_timeout = 200000;
const URL = process.env.NODE_ENV;

// Schemas
const {
  schemaListaPreços,
} = require("../schemas/schema");

// Endpoints
const PATH_ALL_REPOS = "/users/afoliveira5/repos"
const PATH_REPO_APPIUM = "/repos/afoliveira5/Appium"


describe("API Github", function () {
  // before("Realizar login como equipe de frotas e gerar o idToken /singin", function (done) {
  //   this.timeout(request_timeout);
  //   request(URL)
  //     .post(PATH_LOGIN)
  //     .send(login_frotas)
  //     .set(commonHeaders)
  //     .end(function (err, res) {
  //       expect(res.status).to.be.eql(200);
  //       const responseJson = JSON.parse(res.text);
  //       IdToken = responseJson.body.data.AuthenticationResult.IdToken;
  //       done(err);
  //     });
  // });

  it("Consultar todos os repositórios", function (done) {
    this.timeout(request_timeout);
    request(URL)
      .get(PATH_ALL_REPOS)
      .set("Content-Type", "application/json")
      .end(function (err, res) {
        // expect(res.status).to.be.eql(200);
        done(err);
      });
  });

  it("Consultar repositório Appium", function (done) {
    this.timeout(request_timeout);
    request(URL)
      .get(PATH_REPO_APPIUM)
      .set("Content-Type", "application/json")
      .end(function (err, res) {
        console.log(res)
        // console.log(JSON.parse(res.body))
        // expect(res.status).to.be.eql(200);
        done(err);
      });
  });
})