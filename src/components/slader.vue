<template>
	<v-img src="@/assets/images/font.jpg" height="850px">
		<v-container>
			<v-app-bar dark flat class="transparent">
				<v-img src="@/assets/images/logo.png" max-width="140px" z-index="1" />
				<v-spacer></v-spacer>
				<v-list tile nav class="d-lg-flex d-none transparent">
					<v-list-item class="mb-0" v-for="(element, key) in menu" :key="key">
						<v-menu offset-y>
							<template v-slot:activator="{ on }">
								<v-btn class="transparent" depressed dark v-on="on">
									{{ element.title }}
									<template v-if="element.content"
										><v-icon size="30">mdi-menu-down</v-icon>
									</template>
								</v-btn>
							</template>
							<template v-if="element.content">
								<v-list
									v-for="(contentElement, key) in element.content"
									:key="key"
								>
									<v-list-item
										class="my-0 px-0 text-center justify-center h-20"
									>
										{{ contentElement }}
									</v-list-item>
								</v-list></template
							>
						</v-menu>
					</v-list-item>
				</v-list>
				<v-spacer></v-spacer>

				<v-btn class="transparent" icon>
					<v-badge color="orange"
						><template v-slot:badge>
							<span>10</span>
						</template>
						<v-icon>mdi-basket</v-icon></v-badge
					>
				</v-btn>
				<v-btn class="transparent" icon>
					<v-icon>mdi-magnify</v-icon>
				</v-btn>
				<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			</v-app-bar>
			<v-navigation-drawer
				color="blue-grey darken-4"
				app
				right
				v-model="drawer"
			>
				<v-list-item title="My Application" subtitle="Vuetify">
					<v-btn color="info" @click="drawer = !drawer">закрыть</v-btn>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item link title="List Item 1"></v-list-item>
				<v-list-item link title="List Item 2"></v-list-item>
				<v-list-item link title="List Item 3"></v-list-item>
			</v-navigation-drawer>

			<v-row style="height: 100%; margin-top: 150px" class="d-flex">
				<v-col
					cols="12"
					md="8"
					class="d-flex flex-column align-center align-md-start"
				>
					<div
						class="lettSpace font-weight-black red--text my-title"
						:style="letter"
					>
						Creative
					</div>
					<div class="text-h2 bg-red white--text font-weight-bold my-subtitle">
						Agency Studio
					</div>
					<v-row class="justify-center justify-md-start">
						<v-col cols="12" sm="8" md="7">
							<span class="text-subtitle-1 grey--text mt-7 d-block">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation.
							</span></v-col
						></v-row
					>
					<span class="d-block white--text text-uppercase My-monific">
						get in touch
					</span>
				</v-col>
				<v-col
					cols="12"
					md="4"
					style="margin-bottom: 200px"
					class="d-none d-md-flex flex-column justify-lg-space-between"
				>
					<div class="My-monific-img">
						<v-img src="@/assets/images/image.png"></v-img>
					</div>
					<v-list class="transparent">
						<v-list-item class="flex-column d-block">
							<h6
								class="text-center text-h2 font-weight-bold white--text text--darken-3"
							>
								17K+
							</h6>
							<p class="text-center text-subtitile-1 grey--text">
								Projects completed
							</p>
						</v-list-item>
						<v-list-item class="flex-column">
							<h6
								class="text-center text-h2 font-weight-bold white--text text--darken-3"
							>
								100%
							</h6>
							<p class="text-center text-subtitile-1 grey--text">
								Customer Support tem1
							</p>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>
		</v-container>
	</v-img>
</template>

<script>
export default {
	name: "slader-vue",
	data() {
		return {
			menu: [
				{
					title: "home",
					content: ["home1", "home2", "home3"],
				},
				{
					title: "PAGES",
					content: ["PAGES1", "PAGES2", "PAGES3"],
				},
				{
					title: "BLOG",
					content: ["BLOG1", "BLOG2", "BLOG3"],
				},

				{
					title: "PORTFOLIO",
					content: ["PORTFOLIO1", "PORTFOLIO2", "PORTFOLIO3"],
				},

				{
					title: "CONTACT",
					content: false,
				},
			],
			drawer: false,
			letter: "letter-spacing: 15px !important",
		};
	},
};
</script>

<style scoped lang="scss">
.My-monific {
	position: relative;
	margin-top: 12px;
	z-index: 4;
	&::before {
		content: "";
		width: 40px;
		z-index: -1;
		top: calc(-50% + 3px);
		left: -7px;
		height: 40px;
		border-radius: 50%;
		padding: 20px;
		background: #ff7425;
		position: absolute;
	}
	&-img {
		position: relative;
		&::before {
			content: url("@/assets/images/arrow.svg");
			position: absolute;
			bottom: -60px;
			left: 20px;
			@media (max-width: 1070px) {
				& {
					left: -50px;
					bottom: -120px;
				}
			}
		}
	}
}

.my-title {
	font-size: 150px !important;
	@media (max-width: 1264px) {
		font-size: 120px !important;
	}
	@media (max-width: 768px) {
		font-size: 70px !important;
	}
	@media (max-width: 420px) {
		font-size: 50px !important;
	}
}
.my-subtitle {
	font-size: 100px !important;
	line-height: 1em;
	@media (max-width: 1264px) {
		font-size: 80px !important;
	}
	@media (max-width: 768px) {
		font-size: 30px !important;
	}
}
</style>
