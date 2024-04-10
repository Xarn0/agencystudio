<template>
	<v-container class="pb-16 mt-9">
		<div class="my-swiper">
			<div>
				<swiper
					id="my-sw"
					:slides-per-view="1"
					:space-between="30"
					:loop="false"
					:pagination="myPaginator"
					:navigation="myNavigator"
					:simulateTouch="false"
				>
					<swiper-slide
						v-for="n in 3"
						:key="n"
						class="test"
						:class="{ test_2: true }"
					>
						<h4 class="white--text text-h4 mb-4">text{{ n }}</h4>
						<p class="white--text text-subtitle-4">
							Далеко-далеко за словесными горами в стране гласных и согласных
							живут, рыбные тексты. Мир наш великий строчка точках коварный
							заголовок семь, большой ipsum свой океана прямо свое коварных
							рукопись. По всей сбить имеет lorem рот назад возвращайся даже.
						</p>
					</swiper-slide>
					<!-- <swiper-slide></swiper-slide> -->
				</swiper>

				<div class="my-button-paginator d-none d-md-flex">
					<div class="swiper-button-prev-t">
						<v-btn icon class="blue-grey darken-3">
							<svg
								width="14"
								height="12"
								viewBox="0 0 14 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 5.81931L13 5.81931"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M5.84024 10.6392C5.84024 10.6392 1.00024 8.0304 1.00024 5.8208C1.00024 3.6096 5.84024 1 5.84024 1"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</v-btn>
					</div>
					<div class="swiper-button-next-t">
						<v-btn icon class="blue-grey darken-3">
							<svg
								width="14"
								height="12"
								viewBox="0 0 14 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13 6.18069L1 6.18069"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M8.15976 1.3608C8.15976 1.3608 12.9998 3.9696 12.9998 6.1792C12.9998 8.3904 8.15976 11 8.15976 11"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</v-btn>
					</div>
				</div>
			</div>
			<div class="">
				<div class="swiper-pagination-t"></div>
			</div></div
	></v-container>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default {
	data() {
		return {
			myNavigator: {
				nextEl: ".swiper-button-next-t",
				prevEl: ".swiper-button-prev-t",
			},
			myPaginator: {
				el: ".swiper-pagination-t",
				clickable: "true",
				renderBullet: function (index, className) {
					return `<div class="${className} ">
						<img src='/agencystudio/slider/slider${index + 1}.jpg' />
						<span><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.315256 0.0859346C0.220899 0.134981 0.126543 0.228986 0.0773131 0.327078C-0.004736 0.486477 -0.004736 0.543697 0.00346891 4.59408C0.0157763 8.66898 0.0157763 8.70168 0.101928 8.81203C0.147055 8.87334 0.237309 8.96326 0.298846 9.00822C0.409612 9.08996 0.467047 9.09405 2.16957 9.10631L3.92952 9.11857L3.94183 11.8447C3.95414 14.5668 3.95414 14.5708 4.04439 14.7139C4.2208 14.9959 4.23721 15 5.5705 15H6.76432L6.92431 14.8529C7.08431 14.7098 7.10072 14.6689 8.11813 11.6322L9.14374 8.55454L9.13554 4.48372C9.12323 0.445605 9.12323 0.412909 9.03708 0.302555C8.99195 0.241247 8.9017 0.15133 8.84016 0.106371C8.72939 0.0205402 8.69658 0.0205402 4.59822 0.0123663C0.549096 0.0041914 0.462944 0.0041914 0.315256 0.0859346Z" fill="white"/>
<path d="M12.241 0.0571594C12.0728 0.130729 11.9005 0.339174 11.8718 0.502661C11.8595 0.576229 11.8554 2.44815 11.8595 4.66748C11.8718 8.66882 11.8718 8.70151 11.958 8.81187C12.0031 8.87318 12.0933 8.96309 12.1549 9.00805C12.2657 9.08979 12.3231 9.09388 14.0502 9.10614L15.8307 9.1184L15.8389 11.8936L15.8512 14.6729L16.0071 14.8241L16.1589 14.9794L17.3691 14.9917C18.7106 15.0039 18.7516 14.9957 18.9075 14.7423C18.9527 14.6688 19.4409 13.2587 19.9947 11.6075L20.9998 8.59933V4.54487C20.9998 0.559881 20.9998 0.486312 20.9177 0.326913C20.8644 0.220646 20.7783 0.134816 20.6716 0.0816822C20.5116 -6.10352e-05 20.4419 -6.10352e-05 16.4379 -6.10352e-05C13.1436 0.00402641 12.3395 0.0122004 12.241 0.0571594Z" fill="white"/>
</svg>
</span></div>`;
				},
			},
		};
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	methods: {
		getImageUrl(imageId) {
			return `https://picsum.photos/600/400/?image=${imageId}`;
		},
	},
};
</script>

<style lang="scss">
.my-swiper {
	width: 100%;
	// float: right;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-around;
	flex-wrap: wrap;
	@media (max-width: 600px) {
		// margin-left: 0 !important;
	}
	.swiper-wrapper {
		width: 480px;
		@media (max-width: 993px) {
			width: 480px;
		}
		@media (max-width: 600px) {
			width: 90vw;
			// margin-left: 0 !important;
		}
		// align-self: flex-end;
		// display: flex;
	}
}
.test.swiper-slide-active .my-under {
	display: block;
}
.my-swaiper-img {
	width: 120px;
	height: 150px;
	margin: 20px;
	@media (max-width: 375px) {
		width: 100px;
		margin: 0;
	}
}
.my-under {
	display: none;
}
.swiper-pagination-t {
	display: flex;
	gap: 20px;
}
.swiper-pagination-bullet {
	width: 120px;
	height: 150px;
	position: relative;
	@media (max-width: 375px) {
		width: 80px;
		height: 100px;
	}

	img {
		width: 120px;
		height: 150px;
		@media (max-width: 375px) {
			width: 80px;
			height: 100px;
		}
	}
	span {
		position: absolute;
		right: 10px;
		background: #ff7425;
		padding: 8px;
		padding-bottom: 2px;
		bottom: -16px;
		// display: none;
		opacity: 0;
		transition: opacity 0.6s;
	}
	&-active:nth-child(1) {
		span {
			opacity: 1;
			// display: block;
		}
		&::before {
			opacity: 1;
			content: "Roman Forel";
		}
		&::after {
			content: "Web-developer";
			opacity: 1;
		}
	}
	&-active:nth-child(2) {
		span {
			opacity: 1;
		}
		&::before {
			content: "Jarrod Cremin";
			opacity: 1;
		}
		&::after {
			content: "CEO, Business ";
			opacity: 1;
		}
	}
	&-active:nth-child(3) {
		span {
			opacity: 1;
			display: block;
		}
		&::before {
			content: "Miria Fun";
			opacity: 1;
		}
		&::after {
			content: "Smm";
			opacity: 1;
		}
	}
	&::before {
		content: "";
		width: 100%;
		height: 50%;
		color: white;
		font-size: 16px;
		text-align: center;
		padding: 0px;
		position: absolute;
		bottom: -65%;

		opacity: 0;
		transition: opacity 1s;
		@media (max-width: 375px) {
			bottom: -95%;
			font-size: 15px;
			line-height: 13px;
		}
	}
	&::after {
		content: "";
		width: 100%;
		// padding: 4px;
		height: 120px;
		color: white;
		font-size: 13px;
		color: #ff7425;
		text-align: center;
		// margin: -6px;
		font-weight: 500;
		position: absolute;
		bottom: -108%;
		left: 0;
		transition: opacity 1s;
		opacity: 0;
		@media (max-width: 375px) {
			bottom: -141%;
			font-size: 15px;
			line-height: 10px;
		}
	}
	// display: block;
	// background: #942;
	// border: 1px solid #9494;
}
.my-button-paginator {
	position: absolute;
	width: 100px;
	// height: 90px;
	color: white;
	// bottom: -80px;
	display: flex;
	gap: 15px;
}
// .swiper-pagination-bullet-myself {

// }
</style>
