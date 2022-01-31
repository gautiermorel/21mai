<template>
	<section>
		<!-- <Menu /> -->

		<section v-if="!isAuthenticated">
			<Welcome />
			<Login />
			<!-- <Organisation /> -->
			<!-- <Housing /> -->
			<!-- <Trip /> -->
			<!-- <Wishlist /> -->
		</section>

		<section v-if="isAuthenticated">
			<Status />
			<!-- <Organisation />
			<Housing />
			<Direction />
			<Wishlist /> -->
		</section>
	</section>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import store from '@/store';

import Login from "@/components/Login.vue";
import Housing from '@/components/Housing.vue';
import Organisation from '@/components/Organisation.vue';
import Menu from "@/components/Menu.vue";
import Status from '@/components/Status.vue';
import Direction from '@/components/Direction.vue';
import Welcome from '@/components/Welcome.vue';
import Wishlist from '@/components/Wishlist.vue';

export default {
	name: "Home",
	components: {
		Login,
		Organisation,
		Menu,
		Status,
		Direction,
		Welcome,
		Housing,
		Wishlist,
	},
	computed: {
		isAuthenticated: () => store.getters.isAuthenticated,
	}
};
</script>
