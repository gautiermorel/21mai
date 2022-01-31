<template>
	<div class="d-flex flex-md-row flex-column align-items-center justify-content-md-between">
		<div class="d-flex">
			<div class="d-flex p-2">
				<Avatar class="p-col profile-picture profile-picture--small" :username="guest.firstName" :inline="true" :size="40" />
			</div>
			<div class="d-flex text-left flex-column align-items-start p-2 w-100">
				<span>{{guest.username}}</span>
				<small>Invitation {{invitations[guest.invitation]?.map(t => t.type).join(', ')}} de mariage</small>
			</div>
		</div>
		<div class="d-flex w-100 justify-content-md-end justify-content-center">
			<div v-if="!guest.websiteAnswer" class="d-flex w-100 justify-content-md-end">
				<div v-if="invitations[guest.invitation]?.[1]" class="d-flex flex-column w-100 w-sm-50 align-items-sm-end">
					<Button label="Présent" icon="pi pi-check" class="p-button-warning m-1" @click="updateAnswer(guest._id, `PRESENT (${getAnswers(answerKind)})`)" />
					<Button label="Absent" icon="pi pi-times" class="p-button-danger m-1" @click="updateAnswer(guest._id, 'ABSENT')" />
					<Button label="Ne peut pas venir à tout" class="p-button-danger m-1 p-button-link" @click="displaySwitch=!displaySwitch" />

					<Dialog v-model:visible="displaySwitch">
						<template #header>
							Décochez si vous ne pouvez pas venir:
						</template>

						<div class="input__switch" v-for="inv in invitations[guest.invitation]" :key="inv">
							<label class="input__switch--label" :for="inv.code">Je viendrais {{inv.type}}</label>
							<InputSwitch :id="inv.code" v-model="answerKind[inv.code]" />
						</div>

						<template #footer>
							<Button label="Confirmer" icon="pi pi-check" class="p-button-warning m-1" @click="updateAnswer(guest._id, `PRESENT (${getAnswers(answerKind)})`)" />
						</template>
					</Dialog>
				</div>

				<div v-else class="d-flex p-3">
					<Button label="PRESENT" icon="pi pi-times" class="p-button-warning m-1" @click="updateAnswer(guest._id, `PRESENT (${guest.invitation})`)" />
					<Button label="ABSENT" icon="pi pi-times" class="p-button-danger m-1" @click="updateAnswer(guest._id, 'ABSENT')" />
				</div>
			</div>
			<div class="d-flex flex-column align-items-md-end align-items-center" v-if="guest.websiteAnswer">
				<span class="answer-text">{{guest.websiteAnswer}}</span>
				<small>{{humanDate(guest.answerDate)}}</small>
				<small>Type de réponse: {{guest.answerType || (guest.websiteAnswer ? 'site web' : 'en direct')}}</small>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
import Avatar from "@/components/Avatar.vue";
import Button from 'primevue/button';
import InputSwitch from 'primevue/inputswitch';
import Dialog from 'primevue/dialog';

export default {
	name: 'Status',
	components: {
		Avatar,
		Button,
		InputSwitch,
		Dialog,
	},
	props: {
		guest: {}
	},
	created () {
		this.moment = moment;
	},
	emits: ['update:answer'],
	methods: {
		isEditing (field, value) {
			this.editing[field] = value
		},

		updateAnswer (guestId, value) {
			this.$emit('update:answer', { guestId, value })
		},
	},
	computed: {
		humanDate: () => value => `Fait le ${moment(value, null, 'fr').format('DD MMMM YYYY à HH:mm')}`,
		getAnswers: () => answerKind => {
			if (Object.values(answerKind).filter(value => value).length === 0) return null

			// eslint-disable-next-line no-unused-vars
			return Object.entries(answerKind).filter(([_, value]) => value).map(([key]) => key).join(', ')
		}
	},
	data () {
		return {
			displaySwitch: false,
			invitations: {
				'DINER': [
					{ type: 'au Cocktail', code: 'COCKTAIL' },
					{ type: 'au Dîner', code: 'DINER' },
					{ type: 'à la Soirée', code: 'SOIREE' },
				],
				'COCKTAIL': [{ type: 'au Cocktail', code: 'COCKTAIL' }],
				'SOIREE': [{ type: 'à la soirée', code: 'SOIREE' }],
				'COCKTAIL & SOIREE': [
					{ type: 'Cocktail', code: 'COCKTAIL' },
					{ type: 'Soirée', code: 'SOIREE' },
				],
			},
			answerKind: {
        'COCKTAIL': true,
        'DINER': true,
        'SOIREE': true,
      },
		}
	},
}
</script>

<style scoped lang="scss">
.p-button {
	min-width: 200px;
}

.input__switch {
	display: flex;
	flex-direction: row;
	align-content: flex-end;
	justify-content: flex-end;

	.input__switch--label {
		margin-right: 10px;
	}
}
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
