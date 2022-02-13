<template>
	<div>Logout</div>
</template>

<script>
import { onMounted } from "vue";
import store from '@/store';

export default {
	name: "Logout",
	setup () {
		onMounted(() => {
			console.log('mounted in the composition api!')
			store.dispatch("logout")
		})
	}
};
</script>
