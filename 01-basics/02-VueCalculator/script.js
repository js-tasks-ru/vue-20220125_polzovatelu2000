import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
    data(){
    return {
        number_first: 0,
        number_second:0,
        simbolOperation:""
        };
    },
    computed:{
        answer(){
            switch (this.simbolOperation){
                case "sum":
                return this.number_first + this.number_second
                case "subtract":
                return this.number_first - this.number_second
                case "multiply":
                return this.number_first * this.number_second
                case "divide":
                return this.number_first / this.number_second
                default: return 0;
            }
        }
    }
}).mount("#app");
window.vm = vm;
// const vm = createApp({
//     data() {
//       return {
//         count: 0,
//       };
//     },
//     methods:{
//         counter(){
//             this.count+=1
//         }
//     }
//   }).mount('#app');