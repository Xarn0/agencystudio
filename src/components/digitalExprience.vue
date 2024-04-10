<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="6" class="d-flex flex-column" style="gap: 20px">
				<div>
					<p class="grey--text ma-0 font-weight-bold">DIGITAL EXPRIENCE</p>
					<h5 class="white--text mb-4 text-h4 text-sm-h3 font-weight-bold">
						Our Potential Marking Consulting Agency
					</h5>
					<p class="grey--text lighten-1 text-subtitle-2 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam consectetur adipiscing elit.
					</p>
				</div>
				<progressLineVue
					:width="89"
					:titleText="'Website & Mobile Development'"
				/>
				<progressLineVue :width="75" :titleText="'Desktop App Development'" />
			</v-col>
			<v-col cols="12" md="6">
				<v-expansion-panels class="">
					<v-expansion-panel
						class="mb-4 white--text"
						style="background: #222222"
						v-for="(item, i) in 3"
						:key="i"
					>
						<v-expansion-panel-header>
							How can we help your business?
							<template v-slot:actions>
								<svg
									width="12"
									height="7"
									viewBox="0 0 12 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11 1L6 6L1 1"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</template>
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
				<v-row class="mt-8 justify-center">
					<v-col cols="12" sm="4" class="ml-sm-4">
						<p class="white--text text-h4 text-lg-h3 font-weight-bold ma-0">
							12542+
						</p>
						<span class="grey--text text-subtitle-2">Monthly Usual Users</span>
					</v-col>
					<v-col cols="12" sm="7">
						<p class="grey--text lighten-1 font-weight-black">
							But I must explain to you how all this mistaken idea of denouncing
							pleasure and praising pain was born and I will give.
						</p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import progressLineVue from "./components-mini/progressLine.vue";

export default {
	data() {
		return {};
	},
	components: {
		progressLineVue,
	},
};
</script>

<style lang="scss">
* {
	user-select: none;
}
</style>
