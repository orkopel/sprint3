import { router } from './router.js';
import appFooter from './cmps/app-footer.cmp.js';
import appHeader from './cmps/app-header.cmp.js';
// import appSus from './views/app-sus.cmp.js'
// import bookApp from './views/book-app.cmp.js';
// import email
// import misskeep;

const options = {
    template: `
        <section class="home-page">
            <app-header />
            <router-view />
            <app-footer />
        </section>
    `,
    // created bood from serviuce
    components: {
        // bookApp,
        appHeader,
        // appSus,
        appFooter,

    }
};

const app = Vue.createApp(options);
app.use(router);
app.mount('#app');