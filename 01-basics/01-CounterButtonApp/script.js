import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
const vm = createApp({
    data() {
      return {
        count: 0,
      };
    },
    methods:{
        counter(){
            this.count+=1
        }
    }
  }).mount('#app');
window.vm = vm;