<template>
	<div class="container col-md-8 col-lg-5 col-sm-10 px-4 text-center">
		<Headline anchor="transport" title="Comment s'y rendre" />
		<vue-picture-swipe class="picture-swipe" :items="items"></vue-picture-swipe>
		<p>Voilà quelques informations pour vous aider à vous rendre sur les différents lieux de notre mariage</p>
		<p>- L'Eglise:</p>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fugit esse dolorum corrupti illum quam commodi mollitia ad eaque deserunt sequi maiores nesciunt et itaque dolorem ea dolore, hic temporibus!</p>
		<p>- Le chateau de la Rocq:</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum cumque aliquid, aperiam dignissimos accusantium numquam nesciunt voluptatibus nam? Fugit neque minima obcaecati magnam? Ea temporibus doloremque provident vel libero?</p>
	</div>

</template>

<script>
import VuePictureSwipe from "vue3-picture-swipe";
import Headline from "@/components/Headline.vue";

import tripMap from "@/assets/carte.png";

export default {
	name: 'Trip',
	components: {
		VuePictureSwipe,
		Headline,
	},
	data () {
		return {
			items: [{
				src: tripMap,
				thumbnail: tripMap,
				w: 1777,
				h: 1000,
				title: 'Direction à prendre entre l\'église et le château',
			}]
		};
	},
}
</script>

<style lang="scss">
.picture-swipe img {
	max-width: 100% !important;
}
</style>
