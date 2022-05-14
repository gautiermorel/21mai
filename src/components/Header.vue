<template>
	<div class="header px-3">
		<div class="label">Mariage</div>
		<div class="names">Gautier & Ann-Sophie</div>
		<p>Soyez les bienvenus sur notre site de mariage !</p>
	</div>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style scoped lang="scss">
.a_link {
	color: black;
	font-weight: bold;
}
.header {
	margin-top: 100px;
	position: relative;
	text-align: center;
  width: 100%;
	max-width: 600px;
	min-height: 8rem;

	.label {
		color: #ffd54f;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 4.5px;
	}

	.names {
		font-size: 52px;
	}

	&::before {
		content: "";
		position: absolute;
		height: 150%;
		width: 30%;
		background-color: #feffeb;
		top: -30%;
		left: 35%;
		z-index: -1;
	}
}
</style>
