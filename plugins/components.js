import Vue from 'vue'

// Pages
import Page from '~/components/templates/Page.vue'

// content
import Teaser from '~/components/content/Title.vue'
import Grid from '~/components/content/Grid.vue'
import SliderText from '~/components/content/SliderText.vue'
import RichText from '~/components/content/RichText.vue'
import Image from '~/components/content/Image.vue'

// form
import FormSection from '~/components/form/FormSection.vue'
import FormInput from '~/components/form/FormInput.vue'
import Feature from '~/components/content/Link.vue'

// content-types
Vue.component('page', Page)

// selectable components
Vue.component('mytitle', Teaser)
Vue.component('grid', Grid)
Vue.component('slidertext', SliderText)
Vue.component('mylink', Feature)
Vue.component('richtext', RichText)
Vue.component('myimage', Image)
Vue.component('form-input', FormInput)
Vue.component('form-section', FormSection)
