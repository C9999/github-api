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
const PATH_ALL_REPOS = "/afoliveira5?tab=repositories"
const PATH_REPO_APPIUM = "/afoliveira5/Appium"


describe("API Github", function () {
  it("Consultar todos os repositórios", function (done) {
    this.timeout(request_timeout);
    request(URL)
      .get(PATH_ALL_REPOS)
      .set("Content-Type", "application/json")
      .end(function (err, res) {
        console.log(res.body.message)
        done(err);
      });
  });

  it("Consultar repositório Appium", function (done) {
    this.timeout(request_timeout);
    request(URL)
      .get(PATH_REPO_APPIUM)
      .set("Content-Type", "application/json")
      .end(function (err, res) {
        console.log(res.body.documentation_url)
        done(err);
      });
  });

})