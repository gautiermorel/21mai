<template>
	<div class="container col-md-8 col-lg-5 col-sm-10 px-4 text-center">
		<Headline anchor="status" title="Informations vous concernant" />
		<p>Votre rôle à notre mariage: PERE DU MARIE </p>
		<p>Vous avez répondu à notre invitation: PRESENT AU DINER (réponse enregistrée le 20 février 2022)</p>
		<p>Votre adresse postale:</p>
		<p>LE DOUSSAY, 72200 LA FLECHE - FRANCE</p>
		<p>Nous vous avons envoyé un faire-part le 24 janvier 2022</p>
	</div>

</template>

<script>
import Headline from "@/components/Headline.vue";

export default {
	name: 'Status',
	components: {
		Headline,
	},
}
</script>
