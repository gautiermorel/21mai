<template>
	<div class="container col-md-8 col-lg-5 col-sm-10 px-4 text-center">
		<Headline anchor="login" title="Découvrez votre espace invité !" />
		<form class="new_user" id="new_user" accept-charset="UTF-8" :model="user" v-on:submit.prevent="onSubmit" autocomplete="off">
			<div class="form-group session__field">
				<SearchInput class="form-control" @selected="setUserId" />
			</div>
			<div class="form-group session__field">
				<b-form-input placeholder="Mot de passe du Faire-part ou du groupe Facebook" class="form-control" required="required" type="password" v-model="user.password"></b-form-input>
			</div>
			<div class="row no-gutters justify-content-between mt-4">
				<div class="form-group session__field">
					<div class="custom-control custom-checkbox">
						<input name="user[relist_me]" type="hidden" value="0" />
						<input class="custom-control-input" type="checkbox" value="1" name="user[relist_me]" id="user_relist_me" />
						<label class="custom-control-label" for="user_relist_me">Se souvenir de moi</label>
					</div>
				</div>
				<div class="form-group session__field">
					<a class="session__link" href="mailto:gautier.morel@gmail.com">Mot de passe oublié ?</a>
				</div>
			</div>
			<b-button type="submit" name="commit" value="Se connecter" class="session__btn" data-disable-with="Se connecter" @click="onSubmit">Se connecter</b-button>
		</form>
		<div class="session__switch mb-4">
			Vous ne vous trouvez pas dans la liste ?
			<a class="session__link sign-up-link" href="mailto:gautier.morel@gmail.com">Contactez-nous !</a>
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
		const user = reactive({ id: "", password: "" });

		function onSubmit () {
			if (user.password) store.dispatch("login", user);
		}

		function onboard () {
			router.push({ name: "Register" });
		}

		function setUserId (u) {
			user.id = u.id;
		}

		return {
			user,
			onSubmit,
			onboard,
			setUserId,
		};
	},
};
</script>
