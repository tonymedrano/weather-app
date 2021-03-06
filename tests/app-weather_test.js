/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/tests/app-weather_test.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Sunday, December 19th 2021, 11:47:24 am
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
import { AppWeather } from "./../src/app-weather/app-weather.js";

import { demo } from "./demo.js";

suite("app-weather", () => {

    test("is defined", () => {
        const el = document.createElement("app-weather");
        assert.instanceOf(el, AppWeather);
    });

    test("renders weather data object", async () => {
        const el = await fixture(html`<app-weather api-key="${demo.apiKey}"></app-weather>`)
        el._data = demo.data;
        el._renderWeather();
        await el.updateComplete;
        assert.deepEqual(el._data, demo.data);
    });

    test("renders first forecast data object", async () => {
        const el = await fixture(html`<app-weather api-key="${demo.apiKey}"></app-weather>`)
        el._data.forecast = demo.data.forecast;
        el._renderForecast();
        await el.updateComplete;
        assert.deepEqual(el._data.forecast[0], {
            day: "Lunes",
            temp_max: 11.08,
            temp_min: 5.46,
            icon: "04n"
        });
    });
});