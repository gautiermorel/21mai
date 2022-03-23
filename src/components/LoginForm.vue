<template>
	<div>
		<form ref="form" autocomplete="off" readonly onfocus="this.removeAttribute('readonly');" v-on:keyup.enter="onSubmit" style="border-radius:56px; padding:0.3rem;">
			<div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px;">
				<div class="text-center mb-5">
					<img :src="logo21mai" alt="Image" height="50" class="mb-3">
					<div class="text-900 text-3xl font-medium mb-3">Bienvenue {{user && user.username }} !</div>
					<div class="flex flex-column">
						<span class="text-600 font-medium">Cherchez votre nom dans la liste</span>
						<span class="text-600 font-medium">Utilisez le mot de passe du groupe facebook ou du faire-part de mariage</span>
					</div>
				</div>

				<div class="w-full md:w-10 mx-auto">
					<label for="email1" class="block text-900 text-sm font-medium mb-2">Tapez au moins 3 lettres de votre nom ou prénom</label>

					<div class="grid formgrid w-full">
						<div class="w-full col-12 mb-2 lg:col-4 lg:mb-0">
							<span class="w-full p-input-icon-left p-input-icon-right autocomplete-full">
								<i class="pi pi-user"></i>
								<AutoComplete ref="autofill" :minLength="3" name="name" autocomplete="off" class="w-full" :class="isValid" inputStyle="padding-left:3rem;padding-right:3rem" inputClass="w-full" placeholder="Recherchez votre nom dans la liste" field="name" v-model="user" :suggestions="filteredGuests" @complete="searchGuests($event)" />
								<i class="pi pi-search"></i>
							</span>
						</div>

					</div>

					<label for="password1" class="block text-900 font-medium text-sm mb-2 mt-2">Mot de passe sur le carton d'invitation</label>
					<InputText ref="inputPassword" placeholder="Mot de passe" autocomplete="off" id="password" type="password" v-model="password" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem" />

					<div class="flex align-items-center justify-content-between mb-5">
						<div class="flex align-items-center">
							<small>Vous ne vous trouvez pas dans la liste ? <a class="session__link sign-up-link" href="mailto:gautier.morel@gmail.com">Contactez-nous !</a></small>

						</div>
						<small><a @click="show = true" class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Je ne connais pas le mot de passe</a></small>
					</div>
					<Button :disabled="!isActive" label="Connexion" class="w-full p-3 text-xl" @click="onSubmit"></button>

				</div>
			</div>
		</form>

		<Toast />
		<Dialog v-model:visible="show">
			<template #header>
				Mot de passe
			</template>

			<div>Le mot de passe c'est notre date commune d'anniversaire (de naissance) avec un "!" entre.</div>
			<small>Par exemple: <pre>21!mai</pre> </small>

			<div>Toujours pas ? Contactez-nous :) </div>

			<template #footer>
				<Button label="D'accord" class="m-1" @click="show = false" />
			</template>
		</Dialog>
	</div>
</template>

<script>
import { ref, watch, computed } from "vue";
import store from "@/store";
import fetchApi from "@/services/http";
import { useToast } from "primevue/usetoast";

import logo21mai from "@/assets/logo.png";

export default {
	name: "LoginForm",
	setup () {
		const user = ref();
		const password = ref();
		const filteredGuests = ref();
		const toast = useToast();
		const editClass = ref();

		watch(
			() => store.state.error,
			(error) => {
				toast.add({ severity: 'error', summary: 'Connexion impossible', detail: error, life: 3000 });
			}
		)

		const onSubmit = () => {
			if (user.value && user.value.id && password.value) store.dispatch("login", { id: user.value.id, password: password.value })
			else {
				toast.add({ severity: 'error', summary: 'Connexion impossible', detail: 'Verifiez que vous avez bien selectioné votre nom dans la liste', life: 3000 });
			}
		}

		const searchGuests = async ({ query }) => {
			let { data: guests = [] } = await fetchApi().get(`/public/guests`, { params: { query } });
			filteredGuests.value = guests.length > 0 ? guests.map(g => ({ name: g.fullName, id: g._id, username: g.username })) : [{ name: 'Nous ne vous trouvons pas dans la liste...' }]
		};

		return {
      isValid: computed(() => user.value && user.value.id ?  'p-valid' : ''),
			isActive: computed(() => user.value && user.value.id && password.value),
			editClass,
			toast,
			logo21mai,
			user,
			onSubmit,
			filteredGuests,
			searchGuests,
			password,
		};
	},
  data () {
		return {
			show: false
		}
	}
};
</script>

<style scoped lang="scss">
.autocomplete-full {
	width: 102% !important;
}
.p-valid-text {
	color: green;
}
input:-webkit-autofill {
	animation-name: onAutoFillStart;
}

:not(input:-webkit-autofill) {
	animation-name: onAutoFillCancel;
}

@keyframes onAutoFillStart {
	from {
	}
	to {
	}
}
@keyframes onAutoFillCancel {
	from {
	}
	to {
	}
}
</style>

<style lang="scss">
.p-autocomplete.p-valid.p-component > .p-inputtext {
	border-color: #ffd54f;
}

.p-input-icon-left > i:first-of-type {
	z-index: 1;
}
</style>
