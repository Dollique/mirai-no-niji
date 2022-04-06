import Vue from 'vue'
import Page from '~/components/templates/Page.vue'
import Teaser from '~/components/content/MyTitle.vue'
import Grid from '~/components/content/Grid.vue'
import SliderText from '~/components/content/SliderText.vue'
import FormSection from '~/components/form/FormSection.vue'
import FormInput from '~/components/form/FormInput.vue'
import Feature from '~/components/content/MyLink.vue'

// content-types
Vue.component('page', Page)

// selectable components
Vue.component('mytitle', Teaser)
Vue.component('grid', Grid)
Vue.component('slidertext', SliderText)
Vue.component('mylink', Feature)
Vue.component('form-input', FormInput)
Vue.component('form-section', FormSection)
