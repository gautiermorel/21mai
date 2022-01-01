<template>
	<div class="container col-md-8 col-lg-5 col-sm-10 px-4 text-center">
		<Headline anchor="liste" title="Notre liste de mariage" />
		<p>Voici notre liste de mariage :)</p>
		<p>Si vous preferez, vous pouvez également nous faire une virement sur notre compte bancaire suivant:</p>
		<p>BE 13149 1931 49114</p>
		<p>Merci !</p>
	</div>
</template>

<script>
import Headline from "@/components/Headline.vue";

export default {
	name: 'Wishlist',
	components: {
		Headline,
	},
}
</script>
