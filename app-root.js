/**
* File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/app-root.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Wednesday, December 15th 2021, 12:46:23 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Wed Dec 15 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */


 import { LitElement, html, css } from "lit";

 /**
  * An example element.
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
         border: solid 1px gray;
         padding: 16px;
         max-width: 800px;
       }
     `;
   }
 
   static get properties() {
     return {
       /**
        * The name to say "Hello" to.
        * @type {string}
        */
       name: { type: String },
 
       /**
        * The number of times the button has been clicked.
        * @type {number}
        */
       count: { type: Number },
     };
   }
 
   constructor() {
     super();
     this.name = "Weather App";
     this.count = 0;
   }
 
   render() {
     return html`
       <h1>${this.sayHello(this.name)}!</h1>
       <button @click=${this._onClick} part="button">
         Click Count: ${this.count}
       </button>
       <slot></slot>
     `;
   }
 
   _onClick() {
     this.count++;
     this.dispatchEvent(new CustomEvent("count-changed"));
   }
 
   /**
    * Formats a greeting
    * @param name {string} The name to say "Hello" to
    * @returns {string} A greeting directed at `name`
    */
   sayHello(name) {
     return `Hello, ${name}`;
   }
 }
 
 window.customElements.define("app-root", AppRoot);
 