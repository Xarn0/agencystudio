<template>
	<v-app>
		<slader-vue />

		<v-main>
			<router-view />
		</v-main>
		<v-footer class="pt-16" style="background: #111111">
			<v-container>
				<v-row>
					<v-col cols="12">
						<v-row class="d-flex flex-column flex-sm-row align-center">
							<v-col cols="12" md="3">
								<div class="footer__logo mb-5">
									<v-img
										src="@/assets/images/logo.png"
										alt="logo"
										width="150px"
									/>
								</div>
								<p class="grey--text text-subtitle-2 mb-5">
									Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									tepo the.
								</p>
								<v-btn color="#ff7425" class="white--text">
									<v-icon left> mdi-phone </v-icon>
									(888)3234 3443</v-btn
								>
							</v-col>
							<v-col cols="12" md="3">
								<h6 class="white--text text-h5 font-weight-bold">
									Quick Links
								</h6>
								<v-row>
									<v-col cols="6">
										<v-list class="transparent white--text">
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
												>About Us
											</v-list-item>
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
												>Pricing Table</v-list-item
											>
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
												>Contact Us
											</v-list-item>
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
												>Meet Our Team
											</v-list-item>
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
												>Latest News</v-list-item
											>
										</v-list>
									</v-col>
									<v-col cols="6">
										<v-list class="transparent white--text">
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
												>Case Studies
											</v-list-item>
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
											>
												FAQ’s</v-list-item
											>
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
											>
												Services</v-list-item
											>
											<v-list-item
												dense
												class="white--text ma-0 pa-0 text-subtitle-2"
											>
												Customer Support</v-list-item
											>
										</v-list>
									</v-col>
								</v-row>
							</v-col>
							<v-col
								cols="12"
								md="6"
								class="d-flex justify-space-between flex-column"
								style="gap: 20px"
							>
								<v-list
									class="transparent flex-nowrap flex-md-wrap flex-lg-nowrap d-flex flex-column flex-sm-row align-center"
								>
									<v-list-item class="text-h6 text-sm-h5 footer__mess"
										>Facebook</v-list-item
									>
									<v-list-item class="text-h6 text-sm-h5 footer__mess"
										>Twitter</v-list-item
									>
									<v-list-item class="text-h6 text-sm-h5 footer__mess"
										>Dribbble</v-list-item
									>
									<v-list-item class="text-h6 text-sm-h5 footer__mess"
										>Instagram</v-list-item
									>
								</v-list>
								<div class="ml-4 text-md-h5 text-lg-h4 grey--text">
									Let's work together. Just drop me a line - ***@mail.com
								</div>
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="12">2</v-col>
				</v-row></v-container
			>
		</v-footer>
	</v-app>
</template>

<script>
import sladerVue from "./components/slader.vue";
export default {
	name: "App",
	components: {
		sladerVue,
	},
	data: () => ({
		//
	}),
};
</script>

<style lang="scss">
.footer {
	background: #262626;
}
.footer__mess {
	font-weight: 700 !important;

	@media (min-width: 1200px) {
		border-right: 3px solid #333;
	}
	&:nth-child(1) {
		background: -webkit-linear-gradient(top, #0052ff 30%, #ffffff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	&:nth-child(2) {
		background: -webkit-linear-gradient(bottom, #ffffff 4%, #09bbff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	&:nth-child(3) {
		background: -webkit-linear-gradient(top, #ea4c89 30%, #ffffff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	&:nth-child(4) {
		background: -webkit-linear-gradient(top, #565bc9, #cc3385, #f69e54);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		border-right: none;
	}
}
</style>
