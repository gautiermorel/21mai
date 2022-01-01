<template>
	<Menu />

	<div class="container col-md-5 px-4">
		<div class="session__or">
			<span>Bienvenue</span>
		</div>

		<div class="message">
			<p>
				Bienvenue sur le site consacré à notre mariage ! Retenez bien la date,
				c'est le 21 mai 2022 !
			</p>
			<p>
				Dans ce site, nous avons essayé de mettre en place toutes les
				informations partiques qui pourrons vous servir pour être pret lors de
				notre mariage
			</p>
			<p>
				Certaines sont publiques, d'autres seront accéssible dans votre espace
				invités
			</p>
			<p>Gautier & Ann-Sophie</p>
		</div>
	</div>

	<Login />

	<div class="container col-md-5 px-4">
		<div class="session__or">
			<span>Déroulement du mariage</span>
		</div>

		<div class="message">
			<p>
				Nous sommes vraiment heureux de vous retrouver sur notre site de mariage
			</p>
			<p>
				Dans ce site, nous avons essayé de mettre en place toutes les
				informations partiques qui pourrons vous servir pour être pret lors de
				notre mariage
			</p>
			<p>
				Certaines sont publiques, d'autres seront accéssible dans votre espace
				invités
			</p>
			<p>Gautier & Ann-Sophie</p>
		</div>

		<div class="session__or">
			<span>Logements</span>
		</div>

		<div class="message">
			<p>
				Nous sommes vraiment heureux de vous retrouver sur notre site de mariage
			</p>
			<p>
				Dans ce site, nous avons essayé de mettre en place toutes les
				informations partiques qui pourrons vous servir pour être pret lors de
				notre mariage
			</p>
			<p>
				Certaines sont publiques, d'autres seront accéssible dans votre espace
				invités
			</p>
		</div>

		<div class="session__or">
			<span>Comment s'y rendre</span>
		</div>

		<vue-picture-swipe class="image-carte" :items="[{
          src: photo,
          thumbnail: photo,
          w: 1777,
          h: 1000,
          title: 'Direction à prendre entre l\'église et le château',
        }]"></vue-picture-swipe>

		<div class="message">
			<p>
				Nous sommes vraiment heureux de vous retrouver sur notre site de mariage
			</p>
			<p>
				Dans ce site, nous avons essayé de mettre en place toutes les
				informations partiques qui pourrons vous servir pour être pret lors de
				notre mariage
			</p>
			<p>
				Certaines sont publiques, d'autres seront accéssible dans votre espace
				invités
			</p>
		</div>

		<div class="session__or">
			<span>Liste de mariage</span>
		</div>
	</div>
</template>

<script>
// computed: { currentGuest: () => store.getters.getGuest },
import Menu from "@/components/Menu.vue";
import Login from "@/components/Login.vue";
import VuePictureSwipe from "vue3-picture-swipe";

import photo from "@/assets/carte.png";

export default {
	name: "Home",
	components: {
		Menu,
		Login,
		VuePictureSwipe,
	},
	data () {
		return { photo };
	},
};
</script>

<style scoped lang="scss">
.session__or {
	color: #ffd54f;
}

.message {
	text-align: center;
}
</style>

<style>
.image-carte img {
	max-width: 100% !important;
}
</style>
