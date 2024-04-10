<template>
	<v-row class="ma-0">
		<v-col
			cols="12"
			md="6"
			class="pa-0"
			v-for="(el, key) in profileList"
			:key="key"
		>
			<v-img :src="'/agencystudio/images/' + el.img">
				<div class="my-container">
					<span class="text-uppercase" style="color: #ff7425">{{
						el.subtitle
					}}</span>
					<h4 class="white--text text-h5 text-sm-h3">{{ el.title }}</h4>
				</div>
			</v-img>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			profileList: [
				{
					title: "Super Experience",
					subtitle: "BUSINES, IDEA",
					img: "portfolio1.jpg",
				},
				{
					title: "Organic Marketing",
					subtitle: "BUSINESS, MARKETING",
					img: "portfolio2.jpg",
				},
				{
					title: "Business Solution",
					subtitle: "BUSINES, IDEA",
					img: "portfolio3.jpg",
				},
				{
					title: "Marketing Analysis",
					subtitle: "BUSINES, AGENCY",
					img: "portfolio4.jpg",
				},
				{
					title: "Data and Analytics",
					subtitle: "ANALIYTICS, IDEA",
					img: "portfolio5.jpg",
				},
				{
					title: "Website Development",
					subtitle: "AGENCY, DESIGN",
					img: "portfolio6.jpg",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.my-container {
	position: absolute;
	bottom: 30px;

	left: 40px;
	span {
		text-shadow: 2px 2px 30px rgba(0, 0, 0);
	}
}
</style>
