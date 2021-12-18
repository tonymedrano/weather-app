/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/src/app-weather/app-weather-styles.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Saturday, December 18th 2021, 5:00:36 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sat Dec 18 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

 import { css } from "lit";

 export const styles = css`
 :host {
   display: block;
 }

/*       .card {
  background: #000000d0;
  color: white;
  padding: 2em;
  border-radius: 30px;
  width: 100%;
  max-width: 420px;
  margin: 1em;
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin: 0.5em;
  border-radius: 50%;
  border: none;
  height: 44px;
  width: 44px;
  outline: none;
  background: #7c7c7c2b;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

input.search-bar {
  border: none;
  outline: none;
  padding: 0.4em 1em;
  border-radius: 24px;
  background: #7c7c7c2b;
  color: white;
  font-family: inherit;
  font-size: 105%;
  width: calc(100% - 100px);
}

button:hover {
  background: #7c7c7c6b;
}

h1.temp {
  margin: 0;
  margin-bottom: 0.4em;
}

.flex {
  display: flex;
  align-items: center;
}

.description {
  text-transform: capitalize;
  margin-left: 8px;
}

.weather.loading {
  visibility: hidden;
  max-height: 20px;
  position: relative;
}

.weather.loading:after {
  visibility: visible;
  content: "Loading...";
  color: white;
  position: absolute;
  top: 0;
  left: 20px;
}

.error {
  margin-top: 16px;
}*/

.container {
width: 100%;
max-width: none;
background-color: #0d2242;
color: #ffffff;
}

.card {
padding: 1.5rem 1.5rem 1rem 1.5rem;
border: none;
border-radius: 0;
background: none;
}

hr {
opacity: 1;
border-top: 2px solid #ffffff;
}

.temp {
font-size: 3rem;
font-weight: normal;
}

.humidity {
margin-top: 0.5rem;
}

.humidity span {
color: #5997c6;
margin-left: 5px;
}

.location {
position: relative;
font-size: 1rem;
}

.location .current {
font-size: 1.4rem;
color: #68d0d1;
}

.location .separator {
position: relative;
bottom: 0.3rem;
border: 1px solid #ffffff;
margin-right: 0.4rem;
margin-left: 0.4rem;
}

.location .next {
color: #6e7a8f;
}

.img-fluid {
float: right;
width: 70%;
display: flex;
align-items: center;
margin-top: 3rem;
}

.row2 .img-fluid {
margin: 10% 0;
width: 60%;
}

.card-weekly-days .row {
justify-content: center;
}

.row1 {
font-size: 0.7rem;
font-weight: bold;
color: #68d0d1;
}

.row3 {
font-size: 0.9rem;
}

.row4 {
font-size: 0.6rem;
margin: 5% 0 2.5rem;
}

.card-weekly-days .row3 {
margin: 5% 0 2.5rem;
}

.col {
overflow: visible;
}

.row {
overflow: visible;
}
`