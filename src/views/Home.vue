<template>
	<div>
		<div class="flex flex-wrap align-items-center justify-content-center">
			<Headline />
		</div>
		<br />
		<br />
		<br />
		<div class="home flex flex-wrap align-items-center justify-content-center">

			<div class="status">
				<p>Bonjour {{currentUser.username}}, dites nous vite si nous aurons la chance de vous voir à notre mariage !</p>

				<GuestCard v-if="!hasRelations(guest)" :guest="guest" @update:answer="updateAnswer" />

				<small v-if="hasRelations(guest)">Vous pouvez également répondre pour vos proches:</small>

				<div v-if="hasRelations(guest)">
					<div v-for="relation in guest.relations" :key="relation._id">
						<GuestCard :guest="relation" @update:answer="updateAnswer" />
					</div>
				</div>

				<br />
				<br />
				<br />

				<Card>
					<template #title>
						Adresse postale
					</template>
					<template #content>
						<small v-if="hasRelations(guest)">Cette adresse sera également mise à jour pour vos proches ci-dessus</small>
						<br />
						<br />
						<br />
						<div v-if="!editing.address && (guest.address || guest.websiteAddress)" class="flex flex-column">
							<div style="white-space: pre;">{{guest.websiteAddress || guest.address}}</div>
						</div>

						<div v-if="editing.address || (!guest.address && !guest.websiteAddress)" class="flex flex-column">
							<Textarea v-model="guest.websiteAddress" :autoResize="false" rows="5" cols="30" @click="editing.address=true" />
							<div class="flex w-full justify-content-center align-items-center">
								<Button class="p-button-danger m-1" label="Annuler" @click="editing.address = false" />
								<Button label="Confirmer" class="m-1" @click="updateAddress(false)" />
							</div>
						</div>

					</template>
					<template #footer>
						<div class="flex justify-content-end">
							<Button label="Modifier votre adresse" v-if="!editing.address" @click="isEditing('address', true)" class="card-link p-button-link" />
						</div>
					</template>
				</Card>

				<br />
				<br />
				<br />

				<Card>
					<template #title>
						Des questions, remarques ou suggestions ?
					</template>
					<template #content>
						<div class="flex flex-column">
							<small>Dites-nous par exemple si vous avez des allergies ou que vous préférez un plat végétarien.</small>
							<small>Une musique préférée ?</small>
							<small>Vous avez ou vous recherhez une place dans une voiture ?</small>
						</div>
						<br />
						<br />
						<br />
						<div v-if="!editing.comment && guest.comment" class="flex flex-column">
							<div style="white-space: pre;">{{guest.comment}}</div>
						</div>

						<div v-if="editing.comment || !guest.comment" class="flex flex-column">
							<Textarea v-model="guest.comment" :autoResize="false" rows="5" cols="30" @click="editing.comment=true" />
							<div class="flex w-full justify-content-center align-content-center align-items-center">
								<Button class="p-button-danger m-1" label="Annuler" @click="editing.comment = false" />
								<Button label="Confirmer" class="m-1" @click="updateComment()" />
							</div>
						</div>
					</template>
					<template #footer>
						<div class="flex justify-content-end">
							<Button label="Modifier votre commentaire" v-if="!editing.comment" @click="isEditing('comment', true)" class="card-link p-button-link" />
						</div>
					</template>
				</Card>
			</div>

			<ConfirmDialog></ConfirmDialog>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import fetchApi from "@/services/http";

import moment from 'moment'
import Headline from "@/components/Headline.vue";
import GuestCard from "@/components/GuestCard.vue";
import { useConfirm } from "primevue/useconfirm";

export default {
	name: 'Home',
	components: {
		Headline,
		GuestCard,
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
