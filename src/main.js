import vue from "vue";
import app from './app.vue'
var root=document.createElement("div");
document.body.appendChild(root);
new vue({
    render:(h)=>h(app)
}).$mount(root)