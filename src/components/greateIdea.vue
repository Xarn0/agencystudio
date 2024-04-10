<template>
	<v-container class="mt-16">
		<v-row class="justify-sm-space-between">
			<v-col
				cols="12"
				sm="5"
				class="d-flex flex-column my-monic-main"
				style="gap: 35px"
			>
				<div>
					<span class="grey--text text-uppercase">FEATURES</span>
					<p class="text-h4 text-sm-h3 white--text font-weight-bold">
						Giving Your Business Some Great Ideas
					</p>
				</div>

				<p class="text-subtitle-2 grey--text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam
				</p>
				<div class="my-monic">
					<v-btn depressed class="transparent grey--text text-subtitle-1"
						>MORE SERVICES</v-btn
					>
				</div>
			</v-col>
			<v-col
				cols="12"
				sm="6"
				offset-sm-2
				class="d-flex flex-wrap align-center justify-space-between"
				style="gap: 20px"
			>
				<v-row class="my-flex">
					<v-col cols="12" sm="6" v-for="(el, key) in list" :key="key">
						<v-card class="transparent" flat :key="key">
							<!-- <v-img alt="1" /> -->
							<v-img :src="'images/' + el.img" alt="" />
							<!-- img(:src="require(`../../../../../backend/books/media/images/${dropImg()}`)", alt="alt") -->
							<h5
								class="pa-0 pt-2 white--text text-subtitle-1 pa-md-2 text-md-h5"
							>
								{{ el.title }}
							</h5>
							<p class="pa-0 pa-md-2 grey--text">{{ el.subtitle }}</p>
						</v-card></v-col
					>
				</v-row>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-list
					class="transparent d-none d-sm-flex flex-md-nowrap justify-space-between"
				>
					<v-list-item
						v-for="(el, key) in listProjects"
						:key="key"
						class="d-flex flex-column pa-0 ma-0"
						style="gap: 0"
					>
						<h5 class="my-Transparent-text pa-0 ma-0" style="height: 100px">
							{{ el.title }}
						</h5>

						<p class="white--text text-subtitle-4 mt-2 align-self-md-end">
							{{ el.subtitle }}
						</p>
					</v-list-item>
				</v-list>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					title: "UX Experience",
					subtitle:
						"Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
					img: "listImages1.jpg",
				},
				{
					title: "Web Development",
					subtitle:
						"Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
					img: "listImages2.jpg",
				},
				{
					title: "Digital Marketing ",
					subtitle:
						"Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
					img: "listImages3.jpg",
				},
				{
					title: "Product Design",
					subtitle:
						"Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
					img: "listImages4.jpg",
				},
			],
			listProjects: [
				{
					title: "12k+",
					subtitle: "project compolete",
				},
				{
					title: "7K+",
					subtitle: "Happy Client",
				},
				{
					title: "10+",
					subtitle: "Years Experience",
				},
				{
					title: "270+",
					subtitle: "Win Awards",
				},
			],
		};
	},
	methods: {
		getImgUrl(pic) {
			return "@/assets/images/" + pic;
		},
	},
};
</script>

<style lang="scss" scoped>
.my-monic-main {
	position: relative;
	&:after {
		// content: url("@/asstes/images/fonAfterMain.svg");
		content: url("@/assets/images/fonAfterMain.svg");
		top: 100px;
		display: block;
		position: relative;
	}
}
.my-monic {
	position: relative;

	&::before {
		content: "";
		position: absolute;
		width: 60px;
		height: 60px;
		display: block;
		background: #333;
		border-radius: 50%;

		transform-origin: center;
		transform: translate(0px, -15px);
	}
	&::after {
		content: url("@/assets/images/fonAfter.svg");
		position: absolute;
		width: 70px;
		height: 70px;
		top: 200%;
		border-radius: 50%;

		right: 0;
	}
}
.my-flex {
	& > div:nth-child(odd) {
		margin-top: 3.4em;
		@media (max-width: 600px) {
			margin-top: 0;
		}
	}
}
.my-Transparent-text {
	font-size: 5em;
	@media (max-width: 732px) {
		font-size: 3em;
	}

	text-transform: uppercase;
	text-shadow: -1px 2px 0px #fff0f01c, 0 1px 1px#fff0f0, -1px 0 1px#fff0f0,
		0px -1px 1px#fff0f0;
	color: #181818;
}
</style>
