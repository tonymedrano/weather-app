/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/tests/forecast.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Sunday, December 19th 2021, 12:31:00 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sun Dec 19 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

const apiKey = "8bc1970103ed4fccd68b8ec1984dedc4";

const data = {
    name: "Madrid",
    icon: "04d",
    description: "muy nuboso",
    temp: 10.04,
    temp_max: 12.34,
    temp_min: 7.89,
    humidity: 73,
    speed: 0.89,
    forecast: [
      {
        day: "Lunes",
        temp_max: 11.08,
        temp_min: 5.46,
        icon: "04n"
      },
      {
        day: "Martes",
        temp_max: 13.22,
        temp_min: 8.96,
        icon: "04n"
      },
      {
        day: "Miércoles",
        temp_max: 12.17,
        temp_min: 9.32,
        icon: "10n"
      },
      {
        day: "Jueves",
        temp_max: 10.79,
        temp_min: 9.84,
        icon: "10n"
      },
      {
        day: "Viernes",
        temp_max: 9.71,
        temp_min: 8.4,
        icon: "04d"
      }
    ]
  };

export const demo  = {
  apiKey,
  data
};