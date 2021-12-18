/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/step-definitions/simple-greeting.step.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Thursday, December 16th 2021, 3:43:08 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Thu Dec 16 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */


import { Given, When, Then } from "@cucumber/cucumber";
//import { fixture, html } from "@open-wc/testing";

import { AppRoot } from "../src/app-root.js";

Given("There is SimpleGreeting component", async function () {
  const el = document.createElement("app-root");
  this.element = await fixture(html` <simple-greeting></simple-greeting> `);
});

When("Start rendering", function () {
  //this.element.render();
});

Then("Name is rendered", function () {
 // this.element.render();
});
