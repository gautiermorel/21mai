<template>
	<div class="p-3 message-list">
		<Message severity="warn" icon="info">
			<p>Nous avons eu beaucoup de demandes concernant notre liste de mariage: Même si notre plus beau cadeau sera de vous avoir près de nous le jour J, notre liste de mariage est enfin disponible ici: <a target="_blank" href="https://www.millemercismariage.com/21mai2022/liste.html">millemercismariage</a></p>
			<p>Si vous preferez nous participer de façon libre, c'est aussi possible par virement sur notre compte commun: <b>BE34001885252590</b> <small>(N'oubliez pas de nous dire qui vous êtes pour que nous puissions vous remercier 😀 )</small></p>
			<p>Merci ! 😍 Gautier & AnnSo</p>
		</Message>
	</div>
	<div class="flex flex-wrap align-items-center justify-content-center">
		<Headline />

		<LoginForm />
	</div>
</template>

<script>
import store from '@/store';

import Headline from "@/components/Headline.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
	name: "Login",
	components: {
		Headline,
		LoginForm,
	},
	computed: {
		isAuthenticated: () => store.getters.isAuthenticated,
	}
};
</script>

<style scoped lang="scss">
.message-list {
	p {
		font-size: 0.8rem;
	}
	a {
		font-size: 1rem;
	}
}
</style>
