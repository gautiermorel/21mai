<template>
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
