import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ja from 'vuetify/lib/locale/ja.js'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: {
      ja
    },
    current: 'ja'
  }
})
