import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import DateFilter from './filters/date'

Vue.use(Vuelidate)
Vue.filter('date', DateFilter)

// global mixin
// warning mixes in with everything
// Vue.mixin({
//   mounted(){
//     console.log('I am mixed into every component.')
//   }
// })

//Vue.component('BaseIcon', BaseIcon)

Vue.config.productionTip = false

// this makes all components that start with the word 'Base'
// to automatically be usable as a component in views.
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

// mixins must go above this
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
