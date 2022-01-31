<template>
	<section>
		<Menu />
		<div class="container col-sm-8 col-md-8 col-lg-6 col-sm-10 px-4 text-center">
			<Message severity="info">Module en cours de création...</Message>
		</div>
	</section>
</template>

<script>
import Message from 'primevue/message';
import Menu from "@/components/Menu.vue";

export default {
	name: "Seats",
	components: {
		Menu,
		Message,
	},
};
</script>
