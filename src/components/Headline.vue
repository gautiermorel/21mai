<template>
	<div class="welcome">
		<div class="label">Mariage</div>
		<div class="names">Gautier & Ann-Sophie</div>
		<div class="message">
			<p>Soyez les bienvenus sur notre site de mariage !</p>
			<p>Le programme de notre grand jour :</p>

			<ul style="text-align: left">
				<li>La messe se déroulera à Bruxelles à 15h à l’Église <a class="a_link" href="https://goo.gl/maps/2dcRafy5u243UWc67" target="_blank">Notre-Dame de l'Annonciation - 1050 Ixelles</a></li>
				<li>La réception (Cocktail, diner, soirée) aura lieu au <a class="a_link" href="https://goo.gl/maps/jHA7va5F5WA3ozYJ6" target="_blank">Château de la Rocq à Seneffe (Rue Omer Lion, 7180 Arquennes)</a> à partir de 18h. </li>
			</ul>

			<p>Nous avons hâte de tous vous retrouver/rencontrer !</p>

			<!-- <p>Nous sommes vraiment heureux de vous voir sur le site de notre mariage !</p> -->
			<!-- <p> Notre mariage se déroulera le 21 mai 2022, la messe sera à Bruxelles à 15h (Eglise de l'annonciation - Ixelles) et la récéption se tiendra au Château de la Rocq à Senefe à partir de 18h00 !</p> -->
			<!-- <p>Vous pourrez:</p>
			<ul style="text-align: left">
				<li>Indiquer votre adresse postale (pour l'envoi des faire-part de mariage)</li>
				<li>Répondre directement sur le site web (où suivre l'état de votre réponse si vous aviez décidé de nous répondre autrement.)</li>
				<li>Nous laisser un commentaire, questions ou des suggestions.</li>
			</ul>
			<p>Le site peut-être amené à évoluer d'ici là, nous vous tiendrons au courant au fur et à mesure !</p> -->
			<!-- <p>On a hâte de vous retrouver le 21 !</p>
			<p>Gautier & Ann-Sophie</p> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'Headline',
}
</script>

<style scoped lang="scss">
.a_link {
  color: black;
  font-weight: bold;
}
.welcome {
	margin-top: 100px;
	position: relative;
	text-align: center;
	max-width: 600px;

	.label {
		color: #ffd54f;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 4.5px;
	}

	.names {
		font-size: 52px;
	}

	.message {
		font-size: 1rem;
		line-height: 2em;
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
