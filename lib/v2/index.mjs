import VueCompositionAPI from '@vue/composition-api/dist/vue-composition-api.mjs'
import Vue from 'vue'


function install(_vue) {
  _vue = _vue || Vue
  if (_vue && !_vue['__composition_api_installed__'])
    Vue.use(VueCompositionAPI)
}



var isVue2 = true
var isVue3 = false
var Vue2 = Vue.default || Vue
var version = Vue?.default || Vue.version

install(Vue2)

/**VCA-EXPORTS**/
export * from '@vue/composition-api/dist/vue-composition-api.mjs'
/**VCA-EXPORTS**/

export {
  Vue,
  Vue2,
  isVue2,
  isVue3,
  version,
  install,
}
