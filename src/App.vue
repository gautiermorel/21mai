<template>
	<div>
		<ProgressBar v-if="isBusy" mode="indeterminate" />

		<router-view v-slot="{ Component }">
			<transition name="slide-left">
				<component :is="Component" />
			</transition>
		</router-view>

		<Footer />
	</div>
</template>

<script>
import store from "@/store";
import { computed } from "vue";

import Footer from "@/components/Footer.vue";

export default {
	name: "App",
	components: {
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

body {
  background-color: #fcfcfc;
}

.p-progressbar-indeterminate {
	height: 5px !important;
}
</style>
