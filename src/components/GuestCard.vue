<template>
	<Card class="guest-card">
		<template #content>
			<div class="flex md:flex-row flex-column align-items-center md:align-items-between">
				<div class="flex md:w-6 w-full mb-2">
					<div class="flex p-2">
						<Avatar :label="getAvatarLabel(guest.firstName)" shape="circle" size="large" :style="getAvatarColors(guest.firstName)" />
					</div>
					<div class="flex text-left flex-column align-items-start p-2 w-full">
						<span>{{guest.username}}</span>
						<small>Invitation {{invitations[guest.invitation]?.map(t => t.type).join(', ')}} de mariage</small>
					</div>
				</div>
				<div class="flex md:w-6 w-full text-align-end justify-content-end">
					<div v-if="!guest.websiteAnswer" class="flex w-full justify-content-md-end">
						<div class="flex flex-column w-full align-items-end">
							<Button label="Présent" icon="pi pi-check" class="m-1" @click="updateAnswer(guest._id, `PRESENT (${getAnswers(answerKind)})`)" />
							<Button label="Absent" icon="pi pi-times" class="p-button-danger m-1" @click="updateAnswer(guest._id, 'ABSENT')" />
							<Button v-if="invitations[guest.invitation]?.[1]" label="Ne peut pas venir à tout" class="p-button-danger m-1 p-button-link" @click="displaySwitch=!displaySwitch" />

							<Dialog v-model:visible="displaySwitch">
								<template #header>
									Dîtes nous à quoi :)
								</template>

								<div class="input__switch" v-for="inv in invitations[guest.invitation]" :key="inv">
									<label class="input__switch--label" :for="inv.code">Peut venir {{inv.type}}</label>
									<InputSwitch :id="inv.code" v-model="answerKind[inv.code]" />
								</div>

								<template #footer>
									<Button label="Confirmer" icon="pi pi-check" class="m-1" @click="updateAnswer(guest._id, `PRESENT (${getAnswers(answerKind)})`)" />
								</template>
							</Dialog>
						</div>
					</div>
					<div class="flex flex-column md:align-items-end align-items-center" v-if="guest.websiteAnswer">
						<span class="answer-text">{{guest.websiteAnswer}}</span>
						<small>{{humanDate(guest.answerDate)}}</small>
						<small>Type de réponse: {{guest.answerType || (guest.websiteAnswer ? 'site web' : 'en direct')}}</small>
					</div>
				</div>
			</div>
		</template>
	</Card>
</template>

<script>
import moment from 'moment'

export default {
	name: 'GuestCard',
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
		},
		getAvatarLabel: () => value => value && value.charAt(0) || '',
		getAvatarColors: () => value => {
			const COLORS = [
				"#F44336",
				"#FF4081",
				"#9C27B0",
				"#673AB7",
				"#3F51B5",
				"#2196F3",
				"#03A9F4",
				"#00BCD4",
				"#009688",
				"#4CAF50",
				"#8BC34A",
				"#CDDC39",
				'#FFC107',
				"#FF9800",
				"#FF5722",
				"#795548",
				"#9E9E9E",
				"#607D8B",
			]
			return { 'background-color': COLORS[value?.length % COLORS.length], 'color': '#FFFFFF' }
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
	max-width: 250px;
	min-width: 250px;
}

.guest-card {
	position: relative;
	display: block;
	padding: 0.75rem 1.25rem;
	margin-bottom: -1px;
	border-top-left-radius: 0rem;
	border-top-right-radius: 0rem;
	border-bottom-left-radius: 0rem;
	border-bottom-right-radius: 0rem;
	padding: 0px;
	margin-top: 20px;
	margin-bottom: 20px;

	&:first-child {
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}

	&:last-child {
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}
}

.input__switch {
	display: flex;
	flex-direction: row;
	align-content: flex-end;
	justify-content: flex-end;
	padding-top: 10px;
	padding-bottom: 10px;

	.input__switch--label {
		margin-right: 10px;
    cursor: pointer;
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

<style lang="scss">
.p-avatar-text {
	font-family: Tahoma, Geneva, Verdana, sans-serif !important;
}

.status .guest-card {
	&:first-child {
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}

	&:last-child {
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}
}
</style>

