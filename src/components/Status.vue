<template>
	<div class="container col-md-8 col-lg-5 col-sm-10 px-4 text-center">
		<Headline anchor="status" title="Informations vous concernant" />

		<p>Bonjour {{currentUser.username}}, dites nous vite si nous aurons la chance de vous voir à notre mariage !</p>
		<p>nous vous invitons également à répondre pour vos proches:</p>

		<b-list-group>
			<b-list-group-item class="d-flex justify-content-between align-items-center" v-for="relation in guest.relations" :key="relation._id">
				<div class="d-flex w-100">
					<div class="d-flex p-2">
						<Avatar class="p-col profile-picture profile-picture--small" :username="relation.firstName" :inline="true" :size="40" />
					</div>
					<div class="d-flex flex-column align-items-start p-2 w-100">
						<span>{{relation.username}}</span>
						<small>Invitation à notre {{relation.invitation}} de mariage</small>
					</div>
				</div>
				<div class="d-flex w-100 justify-content-end">
					<div v-if="!relation.websiteAnswer" class="d-flex flex-row justify-content-end w-100">
						<Button label="PRESENT" icon="pi pi-times" class="p-button-primary m-1" @click="updateAnswer(relation._id, 'PRESENT')" />
						<Button label="ABSENT" icon="pi pi-times" class="p-button-danger m-1" @click="updateAnswer(relation._id, 'ABSENT')" />
					</div>
					<div class="d-flex flex-column align-items-end p-2 w-100" v-if="relation.websiteAnswer">
						<span>Réponse: {{relation.websiteAnswer}}</span>
						<small>{{humanDate(relation.logs?.find(l => l.action === 'websiteAnswer')?.when)}}</small>
            <small>Facebook|Lettre|Site web</small>
					</div>
				</div>
			</b-list-group-item>
		</b-list-group>

		<br />
		<br />
		<br />

		<b-card title="Adresse postale" sub-title="Nous avons besoin de votre adresse pour que nous puissons envoyer notre faire-part :)">
			<b-card-text v-if="!editing.address && (guest.address || guest.websiteAddress)" class="d-flex flex-column">
				<div style="white-space: pre;">{{guest.websiteAddress || guest.address}}</div>
			</b-card-text>

			<b-card-text v-if="editing.address || (!guest.address && !guest.websiteAddress)" class="d-flex flex-column">
				<Textarea v-model="guest.websiteAddress" :autoResize="true" rows="5" cols="30" />
				<div class="d-flex w-100 justify-content-between align-items-center">
					<Button class="p-button-danger m-1" label="Annuler" @click="editing.address = false" />
          <Button label="Mettre à jour mon adresse" class="p-button-primary m-1" @click="updateAddress()" />
				</div>
			</b-card-text>
			<Button label="Modifier votre adresse" v-if="!editing.address" @click="isEditing('address', true)" class="card-link p-button-link" />
		</b-card>
	</div>

	<ConfirmDialog></ConfirmDialog>

</template>

<script>
import store from '@/store';
import fetchApi from "@/services/http";

import moment from 'moment'
import Avatar from "@/components/Avatar.vue";
import Headline from "@/components/Headline.vue";
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";

export default {
	name: 'Status',
	components: {
		Avatar,
		ConfirmDialog,
		Textarea,
		Headline,
		Button,
	},
	created () {
		this.moment = moment;
	},
	setup () {
		const confirm = useConfirm();
		return { confirm }
	},
	methods: {
		isEditing (field, value) {
			this.editing[field] = value
		},

		async updateAnswer (guestId, value) {
			this.confirm.require({
				message: 'Afin d\'être pleinnement capable de nous organiser, nous attendons de vous une réponse définitive !',
				header: 'Etes vous sûr ?',
				icon: 'pi pi-exclamation-triangle',
				accept: async () => {
					await fetchApi().put(`/guests/${guestId}`, { field: 'websiteAnswer', value })
					this.$notify({ title: 'Merci', message: "Merci de votre réponse !", type: 'success' });
					this.guest = await this.getGuest(this.currentUser._id);
				},
				reject: () => { }
			});
		},

		async updateAddress () {
			this.editing.address = false
			await fetchApi().put(`/guests/${this.guest._id}`, { field: 'websiteAddress', value: this.guest.websiteAddress, multi: true })
			this.$notify({ title: 'Merci', message: "Votre adresse nous a bien été transmise ! Merci !", type: 'success' });
			this.guest = await this.getGuest(this.currentUser._id);
		},

		async getGuest (guestId) {
			let { data: guest = {} } = await fetchApi().get(`/guests/${guestId}`)

			return guest;
		},
	},
	computed: {
		isAuthenticated: () => store.getters.isAuthenticated,
		currentUser: () => store.getters.getUser,
		humanDate: () => value => `Le ${moment(value, null, 'fr').format('DD MMMM YYYY à HH:mm')}`
	},
	data () {
		return {
			guest: {},
			editing: {
				address: false,
			}
		}
	},
	async mounted () {
		this.guest = await this.getGuest(this.currentUser._id)
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
.status-address {
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
}

.p-inputtextarea {
  text-align: center;
}
</style>
