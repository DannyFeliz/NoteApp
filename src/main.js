import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import VueResource from 'vue-router'

// Components
import NotesList from "./components/Notes/List.vue"

// Vue use
Vue.use(Router);
Vue.use(VueResource);

// Exports
export default Vue;
export let router = new Router;

// Routes
router.map({
  '/': {
    name: 'home',
    component: NotesList
  }
});

// Start router
router.start(App, "#app");
