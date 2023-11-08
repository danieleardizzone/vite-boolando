import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// set up fontawesome
// prima scaricarlo
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUser, faHeart, faCartShopping, faXTwitter, faFacebook, faInstagram, faPinterest, faYoutube)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
