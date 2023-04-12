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
  it("it 1", function (done) {
    console.log("Olá mundo 1")
  });

  it("it 2", function (done) {
    console.log("Olá mundo 2")
  });
})