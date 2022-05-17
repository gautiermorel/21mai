<template>
	<div class="px-3 md:px-8">
		<!-- Schedule & Maps -->
		<section class="my-8 md:my-6">
			<div class="title">Programme du jour <span class="highlight">J</span></div>
			<div class="message">
				<ul class="bullet-list">
					<li>La messe se déroulera à Bruxelles à 15h à l’Église <a class="a_link" href="https://goo.gl/maps/2dcRafy5u243UWc67" target="_blank">Notre-Dame de l'Annonciation - 1050 Ixelles</a></li>

					<p>À partir de 18h, rendez-vous au <a class="a_link" href="https://goo.gl/maps/jHA7va5F5WA3ozYJ6" target="_blank">Château de la Rocq à Seneffe (Rue Omer Lion, 7180 Arquennes)</a> </p>

					<li>Cocktail de 18 à 20h.</li>
					<li>Diner placé et soirée de 20h à 4h du matin.</li>
				</ul>
			</div>
		</section>

		<!-- Parkings -->
		<section class="my-8 md:my-6">
			<div class="title">Parkings <span class="highlight">&</span> Voitures</div>
			<div class="message">
				<p>Attention, si vous êtes <span class="hightlight">FRANÇAIS 🇫🇷</span> sachez que la réglementation Bruxelloise à recemment mis en place une zone "LEZ".</p>
				<p>Vous devez normalement enregistrer votre véhicule en vous rendant sur ce site: <a href="https://lez.brussels/mytax/fr/" target="_blank">Low Emission Zone</a></p>
				<p>Il va probablement y avoir pas mal de voitures, et nous n'avons pas pu réserver d'emplacements. Prenez un petit moment pour explorer vos options:</p>
				<ul class="bullet-list">
					<li><a href="https://seety.co/fr/reglements-parking/bruxelles" target="_blank">Réglementations et tarifs de parking à Bruxelles</a></li>
					<li><a href="https://map.seety.co/Place%20Georges%20Brugmann,%201050%20Bruxelles/14.98?lang=fr">Plan de stationnement autour de l'église</a></li>
				</ul>

			</div>
		</section>

		<!-- Church songs -->
		<section class="my-8 md:my-6">
			<div class="title">Les chants <span class="highlight">🎶</span> de notre messe</div>
			<div class="message">
				<p>Aidez oncle Bernard, échauffez vos voix et révisez vos classiques !</p>
				<ul class="bullet-list">
					<li>Lien vers <a class="a_link" href="https://open.spotify.com/playlist/1Yc2NlKgWj8f70jw94IcfL?si=cabf4c8b07ae44e7&pt=abe13ca92cb60298dba3df44e7ae522c" target="_blank">la playlist Spotify</a></li>
					<li>Lien vers <a class="a_link" href="https://www.youtube.com/playlist?list=PLtIOUeSB-xClxuDG3SbJ_6fDJ7NKsDdMn" target="_blank">le mix Youtube</a></li>
				</ul>
			</div>
		</section>

		<!-- Gift list -->
		<section class="my-8 md:my-6">
			<div class="title">Liste de mariage <span class="highlight">♡</span></div>
			<div class="message">
				<p>Notre liste de mariage est disponible ici: <a target="_blank" href="https://www.millemercismariage.com/21mai2022/liste.html">millemercismariage</a> (<span style="font-size:0.8rem;">Participation libre: BE34001885252590)</span> - Merci ! 😍 Gautier & AnnSo</p>
			</div>
		</section>

		<!-- Guest -->
		<section class="my-8 md:my-6">
			<div class="title">Liste des invités présents <span class="highlight">☆</span></div>
			<p>Vérifiez que vous êtes bien dedans !</p>
			<small>Si jamais vous ne vous trouvez pas dans la liste, que vous aviez réservé une chambre au château de la Rocq et qu'il n'est pas marqué "OUI", alors contactez nous de toute urgence ! (c'est peut être simplement un bug d'affichage, mais il vaut mieux être sûr)</small>
			<br />
			<br />
			<Guests />
		</section>

		<section>
			<div class="title"></div>
			<div class="message">
				<p>Nous avons hâte de tous vous retrouver/rencontrer !</p>
				<p>Gautier & AnnSo</p>
			</div>
		</section>
	</div>
  <ScrollTop :threshold="200" />
</template>

<script>
import Guests from "@/components/Guests.vue";

export default {
	name: "Login",
	components: {
		Guests,
	},
};
</script>

<style scoped lang="scss">
.title {
	position: relative;
	display: inline-block;
	font-size: 1.5rem;

	&::after {
		content: "";
		position: absolute;
		height: 12px;
		width: 100%;
		background-color: #feffeb;
		top: 1.5rem;
		left: 0;
		z-index: -1;
	}
}

.highlight {
	color: #ffd54f;
}

.message {
	font-size: 1rem;
	line-height: 2em;
}

.bullet-list {
	text-align: left;
}

.guest-table {
	max-width: 100%;
	overflow-x: scroll;
}

.guest-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
</style>
