import "material-design-icons-iconfont";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: "mdi",
	},
	theme: {
		red: "#FF7425",
	},
});
