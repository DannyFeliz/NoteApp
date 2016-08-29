import Vue from 'vue'
import VueResource from 'vue-resource'
import ENV from "./env.js";

// Libs
import toastr from "toastr";

window.toastr = toastr;
require("toastr/build/toastr.css");

Vue.use(VueResource);

if (!Object.keys(ENV).length) throw new Error("ENV is empty");

// Resource
if (!ENV.API_URL) throw new Error("API_URL is missing");

Vue.http.options.root = ENV.API_URL;
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;

/**
 * Log request / response
*/

if (ENV.LOG_REQUEST || ENV.LOG_RESPONSE) {
    Vue.http.interceptors.push((request, next) => {
    if (ENV.LOG_REQUEST) {
      console.info("REQUEST:", request);
    }

    if (ENV.LOG_RESPONSE) {
      next((response) => {
        if (response.status > 299) {
          console.error("RESPONSE:", response);
        } else {
          console.info("RESPONSE:", response);
        }
      });
    }
  });
}
