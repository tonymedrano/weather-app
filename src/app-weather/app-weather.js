/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app/src/app-weather/app-weather.js
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/LITELEMENT/weather-app
 * Created Date: Friday, December 17th 2021, 10:41:38 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Sun Dec 19 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { LitElement, html } from "lit-element";
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
      /**
      * The _typeUrl holds the urls for the weather and forecast API.
      * @type {object}
      */
      _typeUrl: {
        type: Object
      },
      /**
      * The loading property indicates whether the weather is loading.
      * @type {object}
      */
      setting: {
        type: Object
      },
      /**
      * The contents array holds the days of the week in spanish for mapping.
      * @type {array}
      */
      constants: {
        type: Array
      },
    };
  }

  constructor() {
    super();
    this.apiKey = "";
    this._data = {};
    this.loading = false;
    this._typeUrl = {
      weather: 'weather',
      forecast: 'forecast',
    };
    this.constants = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  }

  connectedCallback() {
    super.connectedCallback()
    this.fetchWeather("Madrid");
  }

  fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/${this._typeUrl.weather}?q=${city}&lang=es&units=metric&appid=${this.apiKey}`)
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
      .then(async (data) => {
        const forecast = await this.fetchForecast(city);
        this.displayWeather({ ...data, forecast })
      });
  }

  async fetchForecast(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/${this._typeUrl.forecast}?q=${city}&lang=es&units=metric&appid=${this.apiKey}`);
    if (!response.ok) {
      this.loading = true;
      console.log("No weather found.");
      throw new Error("No weather found.");
    } else {
      this.loading = false;
    }
    const data = await response.json();
    let forecast = data.list.filter((x) => {
      return x.dt_txt.substr(0, 10) !== new Date().toJSON().slice(0, 10);
    });
    let fs = [];
    for (let f of forecast) {
      let date = f.dt_txt.substr(0, 10);
      if (!!fs[date]) {
        fs[date].temp_max = f.main.temp_max > fs[date].temp_max ? f.main.temp_max : fs[date].temp_max;
        fs[date].temp_min = f.main.temp_min < fs[date].temp_min ? f.main.temp_min : fs[date].temp_min;
        fs[date].icon = f.weather[0].icon;
      } else {
        fs[date] = {
          day: this.constants[new Date(date).getDay()],
          temp_max: f.main.temp_max,
          temp_min: f.main.temp_min,
          icon: f.weather[0].icon
        };
      }
    }
    const forecastData = [];
    for (let day in fs) {
      forecastData.push(fs[day]);
    }
    return forecastData;
  }

  displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, temp_max, temp_min } = data.main;
    const { speed } = data.wind;
    const forecast = data.forecast;
    this._data = {
      name,
      icon,
      description,
      temp,
      temp_max,
      temp_min,
      humidity,
      speed,
      forecast
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

  _renderSearchBar() {
    return html`
      <div class="search">
        <input type="text" class="search-bar" placeholder="Search" @keyup=${this._search}>
        <button @click="${this._search}">
          <svg stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
            width="1.5em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
            </path>
          </svg> 
        </button>
      </div>
    `;
  }

  _renderWeather() {
    return this._data ? html`
      <div class="card">
        <div class="row">
          <div class="col-6">
            <div class="temp">${Number(this._data.temp).toFixed()}&deg;</div>
            <div class="location">
              <span class="current">${this._data.name}</span>
            </div>
            <div>Hoy ${this._data.description}</div>
            <div class="humidity">
            <strong>${Number(this._data.temp_max).toFixed()}&deg;</strong> ${Number(this._data.temp_min).toFixed()}&deg; <span>Humedad: ${this._data.humidity}%</span>
            </div>
          </div>
        <div class="col-6 justify-content-right">
          <img class="img-fluid" src="https://openweathermap.org/img/wn/${this._data.icon}.png"/>
      </div>
    </div>
  </div>` : '';
  }

  _renderForecast() {
    return this._data ? this._data.forecast.map(fs => {
      return html`
        <div class="col">
          <div class="row img-row">
              <img class="img-fluid" src="https://openweathermap.org/img/wn/${fs.icon}.png"/>
          </div>
          <div class="row row-day">${fs.day}</div>
          <div class="row row-grade"><strong>${Number(fs.temp_max).toFixed()}&deg;</strong>&nbsp;${Number(fs.temp_min).toFixed()}&deg;</div>
        </div> `;
    }) : '';
  }

  render() {
    return html`
    <section>
      ${this._renderSearchBar()}
      ${this._data && !this.loading ? html`
        ${this._renderWeather()}
          <hr />
            <div class="card card-weekly-days">
                <div class="row">
                  ${this._renderForecast()}
                </div>
            </div>`
        : html`
            <div class="error">Oops! Something went wrong! 😢</div>
        `}
      </div>
    </section>
  `;
  }
}

window.customElements.define("app-weather", AppWeather);
