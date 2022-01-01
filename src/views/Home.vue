<template>
	<Menu />

	<div class="container col-md-5 px-4 message">
		<Headline anchor="welcome" title="Bienvenue" />
		<p>Bienvenue sur le site consacré à notre mariage !</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eos est consequatur, repudiandae alias eius delectus inventore ducimus iure doloribus illum praesentium veritatis, rerum odio ratione adipisci voluptatum, dignissimos consectetur.</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eos est consequatur, repudiandae alias eius delectus inventore ducimus iure doloribus illum praesentium veritatis, rerum odio ratione adipisci voluptatum, dignissimos consectetur.</p>
		<p>Gautier & Ann-Sophie</p>
	</div>

	<div class="container col-md-5 px-4 message">
		<Headline anchor="login" title="Découvrez votre espace invité !" />
		<Login />
	</div>

	<div class="container col-md-5 px-4 message">
		<Headline anchor="info" title="Informations pratiques" />
		<p>Le déroulement de notre mariage:</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eos est consequatur, repudiandae alias eius delectus inventore ducimus iure doloribus illum praesentium veritatis, rerum odio ratione adipisci voluptatum, dignissimos consectetur.</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eos est consequatur, repudiandae alias eius delectus inventore ducimus iure doloribus illum praesentium veritatis, rerum odio ratione adipisci voluptatum, dignissimos consectetur.</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eos est consequatur, repudiandae alias eius delectus inventore ducimus iure doloribus illum praesentium veritatis, rerum odio ratione adipisci voluptatum, dignissimos consectetur.</p>
	</div>

	<div class="container col-md-5 px-4 message">
		<Headline anchor="logements" title="Logements" />
		<p>Nous vous avons listé quelques idées de logements</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda quod quae sit, repudiandae minus esse aperiam atque molestiae deleniti quos. Magni facilis optio consequatur esse blanditiis id labore dignissimos!</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda quod quae sit, repudiandae minus esse aperiam atque molestiae deleniti quos. Magni facilis optio consequatur esse blanditiis id labore dignissimos!</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda quod quae sit, repudiandae minus esse aperiam atque molestiae deleniti quos. Magni facilis optio consequatur esse blanditiis id labore dignissimos!</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda quod quae sit, repudiandae minus esse aperiam atque molestiae deleniti quos. Magni facilis optio consequatur esse blanditiis id labore dignissimos!</p>
	</div>

	<div class="container col-md-5 px-4 message">
		<Headline anchor="transport" title="Comment s'y rendre" />
		<vue-picture-swipe class="picture-swipe" :items="items"></vue-picture-swipe>
		<p>Voilà quelques informations pour vous aider à vous rendre sur les différents lieux de notre mariage</p>
		<p>- L'Eglise:</p>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fugit esse dolorum corrupti illum quam commodi mollitia ad eaque deserunt sequi maiores nesciunt et itaque dolorem ea dolore, hic temporibus!</p>
		<p>- Le chateau de la Rocq:</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum cumque aliquid, aperiam dignissimos accusantium numquam nesciunt voluptatibus nam? Fugit neque minima obcaecati magnam? Ea temporibus doloremque provident vel libero?</p>
	</div>

	<div class="container col-md-5 px-4 message">
		<Headline anchor="liste" title="Notre liste de mariage" />
		<p>Voici notre liste de mariage :)</p>
		<p>Si vous preferez, vous pouvez également nous faire une virement sur notre compte bancaire suivant:</p>
		<p>BE 13149 1931 49114</p>
		<p>Merci !</p>
	</div>
</template>

<script>
// computed: { currentGuest: () => store.getters.getGuest },
import Menu from "@/components/Menu.vue";
import Headline from "@/components/Headline.vue";
import Login from "@/components/Login.vue";
import VuePictureSwipe from "vue3-picture-swipe";

import photo from "@/assets/carte.png";

export default {
	name: "Home",
	components: {
		Menu,
		Headline,
		Login,
		VuePictureSwipe,
	},
	data () {
		return {
			items: [{
				src: photo,
				thumbnail: photo,
				w: 1777,
				h: 1000,
				title: 'Direction à prendre entre l\'église et le château',
			}]
		};
	},
};
</script>

<style scoped lang="scss">
.message {
	text-align: center;
}
</style>

<style lang="scss">
.picture-swipe img {
	max-width: 100% !important;
}
</style>
