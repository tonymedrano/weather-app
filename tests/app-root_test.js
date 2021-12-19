/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/test/app-root.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Wednesday, December 15th 2021, 12:45:36 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sun Dec 19 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { fixture, assert } from "@open-wc/testing";
import { html } from "lit/static-html.js";
import { AppRoot } from "./../src/app-root.js";

import { demo } from "./demo.js";

suite("app-root", () => {
    test("is defined", () => {
        const el = document.createElement("app-root");
        assert.instanceOf(el, AppRoot);
    });

     let name = "LiElement Weather App";

    test("renders with default values", async () => {
        const el = await fixture(html`<app-root></app-root>`);
        assert.shadowDom.equal(
            el,
            `
            <div class="container">
                <h1>${name}</h1>
                <app-weather api-key="${demo.apiKey}"></app-weather>
            </div>
            `
        );
    });

    test("renders with a set name", async () => {
        const el = await fixture(html`<app-root name="${name}"></app-root>`);
        assert.shadowDom.equal(
            el,
        `
            <div class="container">
                <h1>${name}</h1>
                <app-weather api-key="${demo.apiKey}"></app-weather>
            </div>
            `
        );
    });
});
