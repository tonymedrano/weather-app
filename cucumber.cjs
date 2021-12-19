/**
 * File: /Users/tonymedrano/Downloads/cucumber-ts-lit-element-master/cucumber.js
 * Project: /Users/tonymedrano/Downloads/cucumber-ts-lit-element-master
 * Created Date: Thursday, December 16th 2021, 2:42:41 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Thu Dec 16 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */


const common = [
  'tests/integration/features/**/*.feature', // Specify our feature files
  '--require tests/integration/step-definitions/**/*.js', // Load step definitions
  '--format progress-bar', // Load custom formatter
].join(' ');

module.exports = {
  default: common,
};