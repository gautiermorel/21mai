<template>
	<div :id="anchor" class="headline">
		<span>{{title}}</span>
	</div>
</template>

<script>
export default {
	name: 'Headline',
	props: {
		title: String,
    anchor: String
	}
}
</script>

<style scoped lang="scss">
.headline {
	background-color: white;
	font-weight: 600;
	font-size: 0.8rem;
	position: relative;
	text-align: center;
	margin: 1.3rem 0;
	color: #ffd54f;

	&::before {
		content: "";
		position: absolute;
		height: 1px;
		border-top: 1px solid #e9ecef;
		top: 12px;
		left: 0;
		right: 0;
		width: 100%;
	}

	& span {
		background-color: white;
		padding: 0.5rem 1rem;
		position: relative;
		font-weight: 600;
		font-size: 0.8rem;
	}
}
</style>
