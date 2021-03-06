import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/styles.scss'


// elements from mpn librery
import VueGoogleMaps from '@fawmi/vue-google-maps'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.globalProperties.$filters = {
    currencyUSD(amount) {
        return '$' + amount
    }
}

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyD_flz4RoBeRAj3OdlSreR2gGhtqWYjO70',
    },
})

// const map = {
//     load: {
//         key: 'AIzaSyD_flz4RoBeRAj3OdlSreR2gGhtqWYjO70',
//     },
// }
// console.log('map:',map)



app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
