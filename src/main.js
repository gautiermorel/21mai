import { createApp } from 'vue'

import PrimeVue from 'primevue/config';
import BootstrapVue3 from 'bootstrap-vue-3'
import DisableAutocomplete from 'vue-disable-autocomplete';
import ConfirmationService from 'primevue/confirmationservice';
import Unicon from 'vue-unicons'
import * as GoIcons from './icons'

import App from './App.vue'

import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/fr'

import './assets/main.css';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'element-theme-chalk';

Unicon.add(Object.values(GoIcons))

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(PrimeVue, {
    locale: {
      startsWith: 'Starts with',
      contains: 'Contains',
      notContains: 'Not contains',
      endsWith: 'Ends with',
      equals: 'Equals',
      notEquals: 'Not equals',
      noFilter: 'No Filter',
      lt: 'Less than',
      lte: 'Less than or equal to',
      gt: 'Greater than',
      gte: 'Greater than or equal to',
      dateIs: 'Date is',
      dateIsNot: 'Date is not',
      dateBefore: 'Date is before',
      dateAfter: 'Date is after',
      clear: 'Clear',
      apply: 'Apply',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Oui',
      reject: 'Non',
      choose: 'Choose',
      upload: 'Upload',
      cancel: 'Cancel',
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      weekHeader: 'Wk',
      firstDayOfWeek: 0,
      dateFormat: 'mm/dd/yy',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong',
      passwordPrompt: 'Enter a password',
      emptyFilterMessage: 'No results found',
      emptyMessage: 'No available options'
    }
  })
  .use(ConfirmationService)
  .use(DisableAutocomplete)
  .use(Unicon, { fill: 'black', height: 22, width: 22 })
  .use(ElementPlus, { locale })
  .mount('#app')
