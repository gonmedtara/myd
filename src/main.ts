import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import { Tab, Tabs, FloatingPanel, PullRefresh, BackTop, NavBar, Form, Field, CellGroup, Button ,Uploader} from 'vant';

 
import App from './App.vue'
import router from './router'
import { firebase } from './firebase'

import 'vant/lib/index.css';

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(VueFire, {
    firebaseApp: firebase,
    modules: [
        // ... other modules
        VueFireAuth(),
    ],
})  

/**  Vant components imports */
app.use(Tab);
app.use(Tabs);
app.use(FloatingPanel);
app.use(PullRefresh);
app.use(BackTop);
app.use(NavBar);
app.use(Form);
// app.use(Field);
// app.use(CellGroup);
// app.use(Button);
// app.use(Uploader);
/**  Vant components imports */


app.mount('#app')
