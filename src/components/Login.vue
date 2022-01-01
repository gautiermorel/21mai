<template>
	<div class="container col-md-8 col-lg-5 col-sm-10 px-4 text-center">
		<Headline anchor="login" title="Découvrez votre espace invité !" />
		<form class="new_guest" id="new_guest" accept-charset="UTF-8" :model="guest" v-on:submit.prevent="onSubmit" autocomplete="off">
			<div class="form-group session__field">
				<SearchInput class="form-control" @selected="setGuestId" />
			</div>
			<div class="form-group session__field">
				<b-form-input
							  autocomplete="new-password"
							  placeholder="Mot de passe du Faire-part ou du groupe Facebook"
							  class="form-control"
							  required="required"
							  type="password"
							  v-model="guest.password"></b-form-input>
			</div>
			<div class="row no-gutters justify-content-between mt-4">
				<div class="form-group session__field">
					<div class="custom-control custom-checkbox">
						<input name="guest[relist_me]" type="hidden" value="0" />
						<input
							   class="custom-control-input"
							   type="checkbox"
							   value="1"
							   name="guest[relist_me]"
							   id="guest_relist_me" />
						<label class="custom-control-label" for="guest_relist_me">Se souvenir de moi</label>
					</div>
				</div>
				<div class="form-group session__field">
					<a class="session__link" href="mailto:gautier.morel@gmail.com">Mot de passe oublié ?</a>
				</div>
			</div>
			<b-button
					  type="submit"
					  name="commit"
					  value="Se connecter"
					  class="session__btn"
					  data-disable-with="Se connecter"
					  @click="onSubmit">Se connecter</b-button>
		</form>
		<div class="session__switch mb-4">
			Vous ne vous trouvez pas dans la liste ?
			<a
			   class="session__link sign-up-link"
			   href="mailto:gautier.morel@gmail.com">Demande de compte</a>
		</div>
		<div class="session__switch session__switch--smaller">
			Votre compte est bloqué ?
			<a class="session__link" href="#">Débloquer</a>
		</div>
	</div>
</template>

<script>
import Headline from "@/components/Headline.vue";
import { reactive } from "vue";
import store from "@/store";
import router from "@/router";
import SearchInput from "@/components/SearchInput.vue";

export default {
	name: "Login",
	components: {
		SearchInput,
		Headline,
	},
	setup () {
		const guest = reactive({ id: "", password: "" });

		function onSubmit () {
			if (guest.password) store.dispatch("login", guest);
		}

		function onboard () {
			router.push({ name: "Register" });
		}

		function setGuestId (g) {
			guest.id = g.id;
		}

		return {
			guest,
			onSubmit,
			onboard,
			setGuestId,
		};
	},
};
</script>
