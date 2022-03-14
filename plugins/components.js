import Vue from 'vue'
import Page from '~/components/templates/Page.vue'
import Teaser from '~/components/content/MyTitle.vue'
import Grid from '~/components/content/Grid.vue'
import SliderText from '~/components/content/SliderText.vue'
import Feature from '~/components/content/MyLink.vue'

// content-types
Vue.component('page', Page)

// selectable components
Vue.component('mytitle', Teaser)
Vue.component('grid', Grid)
Vue.component('slidertext', SliderText)
Vue.component('mylink', Feature)