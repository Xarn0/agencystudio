<template>
	<v-container class="pt-16">
		<v-row align-baseline>
			<v-col cols="12" sm="6" class="d-flex" height="100%">
				<v-row class="d-flex my-monific-about" height="100%">
					<v-col cols="6" sm="12" md="7"
						><v-img
							src="@/assets/images/certifiedImage1.jpg"
							max-width="100%"
							alt="3"
					/></v-col>
					<v-col cols="6" sm="12 " md="5" class="align-self-sm-end"
						><v-img
							src="@/assets/images/certifiedImage2.jpg"
							alt="2"
							max-width="100%"
					/></v-col>
				</v-row>
			</v-col>
			<v-col
				cols="12"
				sm="6"
				style="gap: 1.3em"
				class="d-flex flex-column pl-sm-10 align-self-start"
			>
				<div>
					<span class="text-subtitle-1 text-uppercase" style="color: #888"
						>About us</span
					>
					<h2
						class="white--text text-md-h3 font-weight-bold"
						style="line-height: 1.3em"
					>
						We Are Certified Agency Financial Design
					</h2>
				</div>
				<p style="color: #aaa">
					Lorem 2ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore.
				</p>
				<v-row class="d-flex">
					<v-col cols="12" style="background-color: #222" class="mt-3">
						<v-row class="w-100" style="gap: 19px">
							<v-col cols="1">
								<svg
									width="38"
									height="37"
									viewBox="0 0 38 37"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="15"
										cy="15"
										r="15"
										fill="white"
										fill-opacity="0.2"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M36.2782 16.781C36.2782 13.3681 33.9449 12 30.5855 12H22.6964C19.4402 12 17 13.2748 17 16.5534V34.8204C17 35.7209 17.9689 36.288 18.7537 35.8477L26.6714 31.4063L34.5208 35.8403C35.3068 36.2831 36.2782 35.7159 36.2782 34.8142V16.781Z"
										stroke="#FF7425"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M22.0509 20.347H31.1303"
										stroke="#FF7425"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</v-col>
							<v-col cols="10" class="mt-2">
								<h4 class="white--text mb-2">
									Acquisitions Finance Consulting
								</h4>
								<p class="grey--text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore.
								</p>
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="12" style="background-color: #222" class="mt-3 mb-3">
						<v-row class="" style="gap: 19px">
							<v-col cols="1">
								<svg
									width="36"
									height="37"
									viewBox="0 0 36 37"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="15"
										cy="15"
										r="15"
										fill="white"
										fill-opacity="0.2"
									/>
									<path
										d="M23.4665 30.8092H28.534C28.699 29.321 29.4652 28.0927 30.709 26.7518C30.8502 26.6007 31.749 25.6783 31.8552 25.5471C32.7381 24.4546 33.2915 23.1373 33.4516 21.7469C33.6118 20.3565 33.3722 18.9496 32.7606 17.6882C32.1489 16.4268 31.1899 15.3621 29.9941 14.6169C28.7984 13.8716 27.4144 13.4761 26.0016 13.4758C24.5888 13.4755 23.2047 13.8704 22.0086 14.6152C20.8125 15.3599 19.8531 16.4242 19.2408 17.6853C18.6286 18.9465 18.3884 20.3533 18.548 21.7437C18.7076 23.1342 19.2604 24.4517 20.1428 25.5446C20.2503 25.6771 21.1515 26.6007 21.2903 26.7506C22.5353 28.0927 23.3015 29.321 23.4665 30.8092ZM28.5002 33.2855H23.5003V34.5237H28.5002V33.2855ZM18.1928 27.0948C17.0155 25.6378 16.2777 23.8811 16.0643 22.027C15.851 20.1728 16.1708 18.2967 16.9868 16.6147C17.8029 14.9327 19.082 13.5133 20.6769 12.5199C22.2718 11.5266 24.1176 10.9997 26.0016 11C27.8856 11.0003 29.7312 11.5278 31.3258 12.5216C32.9203 13.5155 34.199 14.9353 35.0146 16.6176C35.8301 18.2998 36.1493 20.176 35.9353 22.0301C35.7213 23.8842 34.983 25.6407 33.8052 27.0972C33.0302 28.0531 31.0002 29.5711 31.0002 31.4283V34.5237C31.0002 35.1805 30.7369 35.8103 30.268 36.2747C29.7992 36.7391 29.1633 37 28.5002 37H23.5003C22.8372 37 22.2013 36.7391 21.7325 36.2747C21.2636 35.8103 21.0003 35.1805 21.0003 34.5237V31.4283C21.0003 29.5711 18.969 28.0531 18.1928 27.0948ZM27.2502 20.9089H30.3752L24.7502 28.3379V23.3853H21.6253L27.2502 15.9514V20.9102V20.9089Z"
										fill="#FF7425"
									/>
								</svg>
							</v-col>
							<v-col cols="10" class="mt-2">
								<h4 class="white--text mb-2">Private Placement Consulting</h4>
								<p class="grey--text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore.
								</p>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.my {
	&-monific {
	}
	&-about {
	}
}

.my-monific-about {
	position: relative;
	@media (max-width: 370px) {
		width: 320px;
	}
	&:nth-child(1) {
		&::before {
			content: url("@/assets/images/beforeAbout.svg");
			position: absolute;
			z-index: 1;
			right: 20%;
			top: 8%;
			@media (max-width: 768px) {
				top: 0;
				right: 0;
			}
		}
		&::after {
			content: url("@/assets/images/afterAbout.svg");
			position: absolute;
			bottom: 10%;
			left: 5%;
			z-index: 1;
			@media (max-width: 768px) {
				bottom: 0;
			}
		}
	}
}
</style>
