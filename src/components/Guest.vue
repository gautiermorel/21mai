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
					<div class="input__switch" v-for="inv in invitations[guest.invitation]" :key="inv">
						<label class="input__switch--label" :for="inv.code">Je viendrais {{inv.type}}</label>
						<InputSwitch :id="inv.code" v-model="answerKind[inv.code]" />
					</div>

					<Button v-if="getAnswers(answerKind)" label="Confirmer" icon="pi pi-check" class="p-button-warning m-1" @click="updateAnswer(guest._id, `PRESENT (${getAnswers(answerKind)})`)" />
					<Button v-if="!getAnswers(answerKind)" label="Absent" icon="pi pi-times" class="p-button-danger m-1" @click="updateAnswer(guest._id, 'ABSENT')" />
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

export default {
	name: 'Status',
	components: {
		Avatar,
		Button,
		InputSwitch,
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
			return Object.entries(answerKind).filter(([_, value]) => value).map(([key]) => key).join(', ')
		}
	},
	data () {
		return {
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
			answerKind: {},
		}
	},
}
</script>

<style scoped lang="scss">
.input__switch {
	display: flex;
	flex-direction: row;
	align-content: end;
	justify-content: end;

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
