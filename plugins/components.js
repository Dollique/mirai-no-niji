import Vue from 'vue'
import Page from '~/components/templates/Page.vue'
import Teaser from '~/components/content/MyTitle.vue'
import Grid from '~/components/content/Grid.vue'
import Feature from '~/components/content/MyLink.vue'

// content-types
Vue.component('page', Page)

// selectable components
Vue.component('mytitle', Teaser)
Vue.component('grid', Grid)
Vue.component('mylink', Feature)