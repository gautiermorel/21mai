<template>
	<footer class="footer">
		<div class="container">
			<hr />
			<div class="row pb-3 align-items-center">
				<div class="col-12 col-md-6 text-center text-md-left">
					<p class="footer__copyright mb-0">© 2021 Doussay.com - Tous droits réservés</p>
				</div>
				<div class="col-12 col-md-6 text-center text-md-right d-flex justify-content-between"><a class="footer__link footer__link--smaller my-2 my-md-0" href="#">Conditions générales d'utilisation</a><a class="footer__link footer__link--smaller ml-md-4 my-2 my-md-0" href="#">Politique de confidentialité</a><a class="footer__link footer__link--smaller ml-md-4 my-2 my-md-0" href="#">Mentions légales</a></div>
			</div>
		</div>
	</footer>
</template>

<script>
import store from '@/store';

export default {
	name: 'Footer',
	computed: {
		currentUser: () => store.getters.getUser
	}
}
</script>
