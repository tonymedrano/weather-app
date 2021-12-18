/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/src/app-weather/app-weather.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Friday, December 17th 2021, 10:41:38 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sat Dec 18 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { LitElement, html } from "lit";
import { bootstrapStyles } from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';
import { styles } from "./app-weather-styles.js";
/**
 * app-weather.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppWeather extends LitElement {
  static get styles() {
    return [bootstrapStyles, styles];
  }

  static get properties() {
    return {
      /**
       * The api-key holds the API key for the weather API.
       * @type {string}
       */
      apiKey: {
        type: String,
        attribute: 'api-key'
      },
      /**
       * private data holds all the data that is not exposed to the outside world.
       * @type {object}
       */
      _data: {
        type: Object
      },
      /**
       * The loading property indicates whether the weather is loading.
       * @type {boolean}
       */
      loading: {
        type: Boolean
      },
    };
  }

  constructor() {
    super();
    this.apiKey = "";
    this._data = {};
    this.loading = false;
  }

  connectedCallback() {
    super.connectedCallback()
    this.fetchWeather("Madrid");
  }

  fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
      .then((response) => {
        if (!response.ok) {
          this.loading = true;
          console.log("No weather found.");
          throw new Error("No weather found.");
        } else {
          this.loading = false;
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  }

  displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    this._data = {
      name,
      icon,
      description,
      temp,
      humidity,
      speed,
    };
  }

  _search(e) {
    let searchVal = this.shadowRoot.querySelector(".search-bar").value;
    if ((e.key === 'Enter' || e.type === 'click') && this._validate(searchVal)) {
      this.fetchWeather(searchVal);
    }
  }

  _validate(value) {
    let pattern = new RegExp(/[a-zA-Z]/i);
    return pattern.test(value);
  }

  render() {
    return html`
     <!--   <div class="card">
        <div class="search">
          <input type="text" class="search-bar" placeholder="Search" @keyup=${this._search}>
          <button @click="${this._search}">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
              width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
              </path>
            </svg> 
          </button>
        </div>
        ${this._data && !this.loading
        ? html`
            <div class="weather">
              <h2 class="city">Weather in ${this._data.name}</h2>
              <h1 class="temp">${this._data.temp}°C</h1>
              <div class="flex">
                <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
                <div class="description">${this._data.description}</div>
              </div>
              <div class="humidity">Humidity: ${this._data.humidity} %"</div>
              <div class="wind">Wind speed: ${this._data.speed} km/h</div>
            </div>`
        : html`
          <div class="error">Oops! Something went wrong! 😢</div>`
      }
      </div>
      </div> -->
      <div class="weather-content">
      <div class="container">
        <div class="card">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-6">
                    <div class="temp">${Number(this._data.temp).toFixed()}&deg;</div>
                    <div class="location">
                      <span class="current">${this._data.name}</span
                      ><span class="separator"></span
                      ><span class="next">Barcelona</span>
                    </div>
                    <div>Hoy</div>
                    <div class="humidity">
                      20&deg; 17&deg; <span>Humidity: ${this._data.humidity}</span>
                    </div>
                  </div>
                  <div class="col-6 justify-content-right">
                    <img
                      class="img-fluid"
                      src="https://img.icons8.com/ios/100/ffffff/sun.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="card card-weekly-days">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col">
                    <div class="row row2">
                      <img
                        class="img-fluid"
                        src="https://img.icons8.com/ios/100/ffffff/sun.png"
                      />
                    </div>
                    <div class="row row1">Viernes</div>
                    <div class="row row3">25&deg; 16&deg;</div>
                  </div>
                  <div class="col">
                    <div class="row row2">
                      <img
                        class="img-fluid"
                        src="https://img.icons8.com/ios/100/ffffff/sun.png"
                      />
                    </div>
                    <div class="row row1">Sabado</div>
                    <div class="row row3">25&deg; 17&deg;</div>
                  </div>

                  <div class="col">
                    <div class="row row2">
                      <img
                        class="img-fluid"
                        src="https://img.icons8.com/windows/100/ffffff/cloud.png"
                      />
                    </div>
                    <div class="row row1">Domingo</div>
                    <div class="row row3">25&deg; 17&deg;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     `;
  }
}

window.customElements.define("app-weather", AppWeather);
