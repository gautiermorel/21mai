<template>
	<div class="container col-md-8 col-lg-5 col-sm-10 px-4 text-center">
		<Headline anchor="status" title="Informations vous concernant" />

		<p>Bonjour {{currentUser.firstName}}, nous sommes très heureux de pouvoir vous inviter à notre {{guest.invitation || '_______'}} de notre mariage !</p>

		<div class="status__address">
			<div v-if="guest.websiteAddress">
				<p>Voici l'adresse postale que vous nous avez transmis par via notre site web:</p>
				<p style="white-space: pre;">{{guest.websiteAddress}}</p>
			</div>
			<div v-else-if="guest.address">
				<p>Voici l'adresse postale que nous avons pour vous:</p>
				<p>{{guest.address}}</p>
			</div>
			<div v-else>
				<p>Nous ne connaissons pas encore votre adresse ! Donnez nous la vite ! :)</p>

				<Textarea v-model="websiteAddress" :autoResize="true" rows="5" cols="30" />

				<Button label="Mettre à jour mon adresse" @click="updateAddress()" />

			</div>
		</div>

		<!-- <p>Nous vous avons envoyé un faire-part le 24 janvier 2022</p> -->

		<p>Nous n'avons pas encore de réponse de votre part:</p>
		<p>Viendrez-vous au mariage ?</p>
		<div class="answer">
			<div class="answer-buttons">
				<Button label="PRESENT" icon="pi pi-times" class="p-button-primary" @click="removeList('')" />
				<Button label="ABSENT" icon="pi pi-times" class="p-button-danger" @click="removeList('')" />
			</div>
		</div>

	</div>

	<ConfirmDialog></ConfirmDialog>

</template>

<script>
import store from '@/store';
import fetchApi from "@/services/http";

import Headline from "@/components/Headline.vue";
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";

export default {
	name: 'Status',
	components: {
		ConfirmDialog,
		Textarea,
		Headline,
		Button,
	},
	setup () {
		const confirm = useConfirm();
		return { confirm }
	},
	// emits: {
	// 	onRemoveList: (listId) => {
	// 		if (listId) {
	// 			console.log('contract:', listId)
	// 			return true
	// 		} else {
	// 			console.warn('Invalid submit event payload!')
	// 			return false
	// 		}
	// 	}
	// },
	methods: {
		removeList (listId) {
			this.confirm.require({
				message: 'Afin d\'être pleinnement capable de nous organiser, nous attendons de vous une réponse définitive !',
				header: 'Etes vous sûr ?',
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					console.log('accept', listId)
					// this.$emit('onRemoveList', listId)
				},
				reject: () => { }
			});
		},

		async updateAddress () {
			await fetchApi().put(`/guests/${this.guest._id}`, { field: 'websiteAddress', value: this.websiteAddress })
			this.$notify({ title: 'Merci', message: "Votre adresse nous a bien été transmise ! Merci !", type: 'success' });
		},

		async getGuest (guestId) {
			let { data: guest = {} } = await fetchApi().get(`/guests/${guestId}`)

			return guest;
		},
	},
	computed: {
		isAuthenticated: () => store.getters.isAuthenticated,
		currentUser: () => store.getters.getUser,
	},
	data () {
		return {
			guest: {},
			websiteAddress: null,
		}
	},
	async mounted () {
		this.guest = await this.getGuest(this.currentUser._id);
	}
}
</script>

<style scoped lang="scss">
.answer {
	width: 100%;
	display: flex;
	justify-content: center;

	.answer-buttons {
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		justify-items: center;
	}
}
</style>
