<template>
	<div class="progress__container">
		<div class="progress__title">
			{{ titleText }}
		</div>
		<div
			class="progress__line"
			:style="`width: ${width + '%'}`"
			:data-value-proggress="width + '%'"
		></div>
	</div>
</template>

<script>
export default {
	props: ["width", "titleText"],
};
</script>
<style lang="scss">
.progress {
	&__container {
		margin-bottom: 30px;
		width: 100%;
		height: 6px;
		background: #262626;

		position: relative;
	}
	&__title {
		position: absolute;
		top: -30px;
		color: #fff;
		font-size: 17px;
	}
	&__line {
		position: absolute;

		background: #ff7425;
		height: 100%;

		&::after {
			content: attr(data-value-proggress);
			position: absolute;
			right: -17px;

			top: -35px;
			color: #aaaaaa;
		}
		&::before {
			content: "";
			position: absolute;
			border: 6px solid transparent;
			border-top: 6px solid #ff7425;
			right: -5px;

			top: -10px;
		}
	}
}
</style>
