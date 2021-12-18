/**
* File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/app-root.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Wednesday, December 15th 2021, 12:46:23 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sat Dec 18 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */


 import { LitElement, html, css } from "lit-element";
 import './app-weather/app-weather.js';

 /**
  * app-root.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 export class AppRoot extends LitElement {
   static get styles() {
     return css`
       :host {
         display: block;
         width: 100%;
         height: 100%;
       }
     `;
   }
 
   static get properties() {
     return {
     };
   }
 
   constructor() {
     super();
   }
 
   render() {
     return html`
       <app-weather api-key="8bc1970103ed4fccd68b8ec1984dedc4"></app-weather>
     `;
   }
 }
 
 window.customElements.define("app-root", AppRoot);
 