<template>
	<div class="My-bg">
		<SectionAbout />
		<Greateidea />
		<ExperienceBlock style="margin-bottom: 10vw" />
		<SwiperSlider style="margin-bottom: 5vw" />
		<PeraluxBoxVue style="margin-bottom: 10vw" />
		<DigitalExprienceVue />
	</div>
</template>

<script>
import SectionAbout from "../components/aboutCretified";
import Greateidea from "../components/greateIdea";
import SwiperSlider from "@/components/swiperSlider.vue";
import ExperienceBlock from "../components/experienceBlock";
import PeraluxBoxVue from "../components/peraluxBox.vue";

import DigitalExprienceVue from "../components/digitalExprience.vue";
export default {
	components: {
		SectionAbout,
		Greateidea,
		SwiperSlider,
		ExperienceBlock,
		PeraluxBoxVue,
		DigitalExprienceVue,
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
