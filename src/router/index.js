import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import WeCertigied from "../views/WeCertigied.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: WeCertigied,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
