<template>
	<div class="container col-md-8 col-lg-5 col-sm-10 px-4 text-center">
		<Headline anchor="welcome" title="Bienvenue" />
		<p>Bienvenue sur le site consacré à notre mariage !</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eos est consequatur, repudiandae alias eius delectus inventore ducimus iure doloribus illum praesentium veritatis, rerum odio ratione adipisci voluptatum, dignissimos consectetur.</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eos est consequatur, repudiandae alias eius delectus inventore ducimus iure doloribus illum praesentium veritatis, rerum odio ratione adipisci voluptatum, dignissimos consectetur.</p>
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
