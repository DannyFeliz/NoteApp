import Vue from 'vue'
import VueResource from 'vue-resource'
import ENV from "./env.js";
Vue.use(VueResource);

if (!Object.keys(ENV).length) throw new Error ("ENV is empty");

// Resource
if (!ENV.API_URL) throw new Error ("API_URL is missing");

Vue.http.options.root = ENV.API_URL;

if (ENV.LOG_REQUEST) {
  Vue.http.interceptors.push({
    request: function (request) {
      console.info("REQUEST:", request);
      return request;
    }
  })
}

if (ENV.LOG_RESPONSE) {
  Vue.http.interceptors.push({
    response: function (response) {
      if (response.status > 299) {
        console.error("RESPONSE:", response);
      } else {
        console.info("RESPONSE:", response);
      }
      return response;
    }
  })
}
