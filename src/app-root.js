/**
* File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/app-root.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Wednesday, December 15th 2021, 12:46:23 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sun Dec 19 2021
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
  */
 export class AppRoot extends LitElement {
   static get styles() {
     return css`
       :host {
         display: block;
         width: 100%;
         height: 100%;
       }
       .container {
          max-width: 500px;
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
       <div class="container">
         <app-weather api-key="8bc1970103ed4fccd68b8ec1984dedc4"></app-weather>
      </div>
     `;
   }
 }
 
 window.customElements.define("app-root", AppRoot);
 