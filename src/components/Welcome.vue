<template>
	<div>
		<!-- <Headline anchor="welcome" title="Bienvenue" /> -->
		<p>Nous sommes vraiment heureux de vous voir sur le site de notre mariage !</p>
		<p>Notre mariage se déroulera le 21 mai 2022, la messe sera à Bruxelles à 15h (Eglise de l'annonciation - Ixelles) et la récéption se tiendra au Château de la Rocq à Senefe à partir de 17h30 !</p>
    <p>Afin de nous organiser nous avons mis en place (pour le moment) un <strong>"espace invités"</strong></p>
    <p>Vous pourrez:</p>
    <ul style="text-align: left">
      <li>Indiquer votre adresse postale (pour l'envoi des faire-part de mariage)</li>
      <li>Répondre directement sur le site web (où suivre l'état de votre réponse si vous aviez décidé de nous répondre autrement.)</li>
      <li>Nous laisser un commentaire, questions ou des suggestions.</li>
    </ul>
    <p>Le site peut-être amené à évoluer d'ici là, nous vous tiendrons au courant au fur et à mesure !</p>
		<p>On a hâte de vous retrouver le 21 !</p>
    <p>Gautier & Ann-Sophie</p>
	</div>
</template>

<script>
import Headline from "@/components/Headline.vue";

export default {
	name: 'Welcome',
	components: {
		Headline,
	},
}
</script>
