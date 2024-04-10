<template>
	<div class="My-bg">
		<sectionAbout />
		<greateidea />
		<experienceBlock style="margin-bottom: 10vw" />
		<swiperSlider style="margin-bottom: 5vw" />
		<peraluxBoxVue style="margin-bottom: 10vw" />
		<digitalExprienceVue />
	</div>
</template>

<script>
import sectionAbout from "../components/aboutCretified";
import greateidea from "../components/greateIdea";
import swiperSlider from "@/components/swiperSlider.vue";
import experienceBlock from "../components/experienceBlock";
import peraluxBoxVue from "../components/peraluxBox.vue";

import digitalExprienceVue from "../components/digitalExprience.vue";
export default {
	components: {
		sectionAbout,
		greateidea,
		swiperSlider,
		experienceBlock,
		peraluxBoxVue,
		digitalExprienceVue,
	},
};
</script>

<style scoped>
.My-bg {
	/* background: #181818; */
	background: repeating-linear-gradient(
		to left,
		#474747f8 0 1px,
		#181818 0 380px
	);
}
</style>
