<template>
	<footer>
		<div class="flex justify-content-center">
			<Divider class="w-6" />
		</div>
		<div class="flex flex-column align-items-center">
			<p class="footer__copyright mb-0">© 2022 - 21mai.be · <a class="footer__link md-0" href="#" @click="show=!show">Liste de mariage</a></p>
			<a v-if="isAuthenticated" href="#" @click="onLogout">Se déconnecter</a>
		</div>
		<Dialog v-model:visible="show">
			<template #header>
				Encore un petit instant...
			</template>

			<div>Nous sommes entrain de constituer notre liste de mariage :)</div>
			<div>Si vous preferez nous aider en nous apportant une contribution libre, voilà nos identifiants bancaires:</div>

			<pre style="text-align:center">IVEZEZAKAK</pre>

			<template #footer>
				<Button label="D'accord" class="m-1" @click="show = false" />
			</template>
		</Dialog>
	</footer>
</template>

<script>
import { computed } from 'vue';
import store from '@/store';

export default {
	name: 'Footer',
	computed: {
		currentUser: () => store.getters.getUser
	},
	setup () {
		return {
			isAuthenticated: computed(() => store.getters.isAuthenticated),
			onLogout: () => store.dispatch("logout"),
		};
	},
	data () {
		return {
			show: false
		}
	}
}
</script>
