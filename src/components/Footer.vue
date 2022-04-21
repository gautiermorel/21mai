<template>
	<footer>
		<div class="flex justify-content-center">
			<Divider class="w-6" />
		</div>
		<div class="flex flex-column align-items-center">
			<p><a href="https://www.millemercismariage.com/21mai2022/liste.html" target="blank">https://www.millemercismariage.com/21mai2022/liste.html</a></p>
			<p class="footer__copyright mb-0">© 2022 - 21mai.be · <a class="footer__link md-0" href="#" @click="show=!show">Liste de mariage</a></p>
			<a v-if="isAuthenticated" href="#" @click="onLogout">Se déconnecter</a>
		</div>
		<Dialog v-model:visible="show">
			<template #header>
				♡
			</template>

			<div>Si vous comptez nous aider, nous vous proposons de le faire grâce à notre liste de mariage</div>
      <div>Comme nous ne comptons pas déménager avant quelques temps, nous avons fait le choix d'y mettre principalement des activités liées à notre voyage de Noces !</div>
			<div>Si vous preferez nous aider en nous apportant une contribution libre, voilà nos identifiants bancaires:</div>

			<pre style="text-align:center">BE34001885252590</pre>

			<div>Merci !! :)</div>

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
