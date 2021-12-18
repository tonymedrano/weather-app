/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/test/app-root.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Wednesday, December 15th 2021, 12:45:36 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Fri Dec 17 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { fixture, assert } from "@open-wc/testing";
import { html } from "lit/static-html.js";
import { AppRoot } from "./../src/app-root.js";

suite("app-root", () => {
    test("is defined", () => {
        const el = document.createElement("app-root");
        assert.instanceOf(el, AppRoot);
    });

    let name = "Weather App";

    test("renders with default values", async () => {
        const el = await fixture(html`<app-root></app-root>`);
        assert.shadowDom.equal(
            el,
            `
       <h1>Hello, ${name}!</h1>
       <simple-greeting name="${name}"></simple-greeting>
       <button part="button">Click Count: 0</button>
       <slot></slot>
     `
        );
    });

    test("renders with a set name", async () => {
        const el = await fixture(html`<app-root name="${name}"></app-root>`);
        assert.shadowDom.equal(
            el,
            `
       <h1>Hello, ${name}!</h1>
       <simple-greeting name="${name}"></simple-greeting>
       <button part="button">Click Count: 0</button>
       <slot></slot>
     `
        );
    });

    test("handles a click", async () => {
        const el = await fixture(html`<app-root></app-root>`);
        const button = el.shadowRoot.querySelector("button");
        button.click();
        await el.updateComplete;
        assert.shadowDom.equal(
            el,
            `
       <h1>Hello, ${name}!</h1>
       <simple-greeting name="${name}"></simple-greeting>
       <button part="button">Click Count: 1</button>
       <slot></slot>
     `
        );
    });

    test("styling applied", async () => {
        const el = await fixture(html`<app-root></app-root>`);
        await el.updateComplete;
        assert.equal(getComputedStyle(el).paddingTop, "16px");
    });
});
