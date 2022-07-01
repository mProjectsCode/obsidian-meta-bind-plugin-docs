import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');

export enum CalloutType {
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    ERROR = 'error',
    QUOTE = 'quote'
}
