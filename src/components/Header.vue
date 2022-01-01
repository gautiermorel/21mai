<template>
	<div class="header">
		<div class="headline">
			<h1 class="title">Gautier et Ann-Sophie</h1>
			<span>21 mai 2022</span>
		</div>
	</div>
</template>

<script>
export default { name: 'Header' }
</script>

<style scoped lang="scss">
@font-face {
	font-family: "Exmouth";
	src: local("Exmouth"), url(/fonts/exmouth.ttf) format("truetype");
}

.header {
  margin-top: 50px;
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	align-content: center;
	justify-items: center;
	justify-content: center;

	.headline {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		font-family: "Exmouth";

		h1 {
			font-weight: bold;
			font-size: 4rem;
			color: #ffd54f;
			line-height: 1rem;
		}

		span {
			text-align: center;
			font-size: 25px;
		}
	}
}
</style>
