<template>
	<div>
		<div class="flex flex-column align-items-center">
			<div class="wedding-list">
				<a href="https://www.millemercismariage.com/21mai2022/liste.html" target="_blank">Vers la liste de mariage <span class="highlight">♡</span></a>
			</div>

			<Header />

			<router-view v-slot="{ Component }">
				<component :is="Component" />
			</router-view>

			<Footer />
		</div>
	</div>
</template>

<script>
import store from "@/store";
import { computed } from "vue";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "App",
	components: {
		Header,
		Footer,
	},
	setup () {
		return {
			isBusy: computed(() => store.state.isBusy),
			error: computed(() => store.state.error),
			isAuthenticated: computed(() => store.getters.isAuthenticated),
			onLogout: () => store.dispatch("logout"),
			currentUser: computed(() => store.getters.getUser),
		};
	},
};
</script>

<style lang="scss">
@font-face {
	font-family: "Caudex";
	src: local("Caudex"), url(/fonts/Caudex.ttf) format("truetype");
}

* {
	font-family: "Caudex", "sans-serif";
}

html {
	margin: 0;
	padding: 0;
}

body {
	background-color: #fcfcfc;
}

.wedding-list {
	a {
		text-decoration: none;
	}
	position: absolute;
	top: 10px;
	right: 25px;
}
</style>
