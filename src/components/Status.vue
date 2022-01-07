<template>
	<div class="container col-md-8 col-lg-7 col-sm-10 px-4 text-center">
		<Headline anchor="status" title="Informations vous concernant" />

		<p>Bonjour {{currentUser.username}}, dites nous vite si nous aurons la chance de vous voir à notre mariage !</p>

		<b-card v-if="!hasRelations(guest)">
			<Guest :guest="guest" @update:answer="updateAnswer" />
		</b-card>

		<div v-if="hasRelations(guest)">Vous pouvez également répondre pour vos proches:</div>

		<b-list-group v-if="hasRelations(guest)">
			<b-list-group-item class="d-flex justify-content-between align-items-center" v-for="relation in guest.relations" :key="relation._id">
				<Guest :guest="guest" @update:answer="updateAnswer" />
			</b-list-group-item>
		</b-list-group>

		<br />
		<br />
		<br />

		<b-card title="Adresse postale" sub-title="Nous avons besoin de votre adresse pour que nous puissons envoyer notre faire-part :)">
			<b-card-text v-if="hasRelations(guest)">Cette adresse sera également mise à jour pour vos proches ci-dessus</b-card-text>
			<b-card-text v-if="!editing.address && (guest.address || guest.websiteAddress)" class="d-flex flex-column">
				<div style="white-space: pre;">{{guest.websiteAddress || guest.address}}</div>
			</b-card-text>

			<b-card-text v-if="editing.address || (!guest.address && !guest.websiteAddress)" class="d-flex flex-column">
				<Textarea v-model="guest.websiteAddress" :autoResize="true" rows="5" cols="30" />
				<div class="d-flex w-100 justify-content-between align-items-center">
					<Button class="p-button-danger m-1" label="Annuler" @click="editing.address = false" />
					<Button label="Mettre à jour mon adresse" class="p-button-primary m-1" @click="updateAddress(false)" />
				</div>
			</b-card-text>
			<Button label="Modifier votre adresse" v-if="!editing.address" @click="isEditing('address', true)" class="card-link p-button-link" />
		</b-card>

		<br />
		<br />
		<br />

		<b-card title="Laissez nous un commentaire" sub-title="Si vous avez des idées ou suggestions">
			<b-card-text v-if="!editing.comment && guest.comment" class="d-flex flex-column">
				<div style="white-space: pre;">{{guest.comment}}</div>
			</b-card-text>

			<b-card-text v-if="editing.comment || !guest.comment" class="d-flex flex-column">
				<Textarea v-model="guest.comment" :autoResize="true" rows="5" cols="30" />
				<div class="d-flex w-100 justify-content-between align-items-center">
					<Button class="p-button-danger m-1" label="Annuler" @click="editing.comment = false" />
					<Button label="Mettre à jour mon commentaire" class="p-button-primary m-1" @click="updateComment()" />
				</div>
			</b-card-text>
			<Button label="Modifier votre commentaire" v-if="!editing.comment" @click="isEditing('comment', true)" class="card-link p-button-link" />
		</b-card>
	</div>

	<ConfirmDialog></ConfirmDialog>

</template>

<script>
import store from '@/store';
import fetchApi from "@/services/http";

import moment from 'moment'
import Headline from "@/components/Headline.vue";
import Guest from "@/components/Guest.vue";
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
		Guest,
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

		async updateAnswer ({ guestId, value }) {
			this.confirm.require({
				message: 'Afin d\'être pleinnement capable de nous organiser, nous attendons de vous une réponse définitive !',
				header: 'Etes vous sûr ?',
				icon: 'pi pi-exclamation-triangle',
				accept: async () => {
					await fetchApi().put(`/guests/${guestId}`, { field: 'websiteAnswer', value, saveDate: true })
					this.$notify({ title: 'Merci', message: "Merci de votre réponse !", type: 'success' });
					this.guest = await this.getGuest(this.currentUser._id);
				},
				reject: () => { }
			});
		},

		async updateAddress () {
			this.editing.address = false
			const multi = this.guest.relations.length > 0
			await fetchApi().put(`/guests/${this.guest._id}`, { field: 'websiteAddress', value: this.guest.websiteAddress, multi })
			this.$notify({ title: 'Merci', message: "Votre adresse nous a bien été transmise ! Merci !", type: 'success' });
			this.guest = await this.getGuest(this.currentUser._id);
		},

		async updateComment () {
			this.editing.comment = false
			await fetchApi().put(`/guests/${this.guest._id}`, { field: 'comment', value: this.guest.comment })
			this.$notify({ title: 'Merci', message: "Votre commentaire nous a bien été transmise ! Merci !", type: 'success' });
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
		humanDate: () => value => `Fait le ${moment(value, null, 'fr').format('DD MMMM YYYY à HH:mm')}`,
		hasRelations: () => guest => guest.relations?.length > 0,
	},
	data () {
		return {
			inviations: {
				'DINER': [
					{ type: 'COCKTAIL', code: 'soiree' },
					{ type: 'DINER', code: 'diner' },
					{ type: 'SOIREE', code: 'soiree' },
				],
				'COCKTAIL & SOIREE': [
					{ type: 'COCKTAIL', code: 'cocktail' },
					{ type: 'SOIREE', code: 'soiree' },
				],
			},
			guest: {},
			editing: {
				address: false,
				comment: false,
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
