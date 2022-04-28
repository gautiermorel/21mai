<template>
	<div class="p-3 message-list">
		<Message severity="success" icon="info">
			<p>Notre liste de mariage enfin disponible ici: <a target="_blank" href="https://www.millemercismariage.com/21mai2022/liste.html">millemercismariage</a> - Merci ! 😍 Gautier & AnnSo</p>
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
	font-size: 1rem;
}
</style>
