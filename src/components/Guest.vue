<template>
	<div class="d-flex flex-md-row flex-column align-items-center justify-content-md-between">
		<div class="d-flex">
			<div class="d-flex p-2">
				<Avatar class="p-col profile-picture profile-picture--small" :username="guest.firstName" :inline="true" :size="40" />
			</div>
			<div class="d-flex text-left flex-column align-items-start p-2 w-100">
				<span>{{guest.username}}</span>
				<small>Invitation à notre {{invitations[guest.invitation]?.map(t => t.type).join(', ') || guest.inviation}} de mariage</small>
			</div>
		</div>
		<div class="d-flex">
			<div v-if="!guest.websiteAnswer" class="d-flex">
				<div v-if="invitations[guest.invitation]" class="d-flex flex-column w-100">
					<SelectButton class="p-selectbutton-warning d-flex flex-row w-100 p-1" v-model="answerKind" :options="invitations[guest.invitation]" optionLabel="type" :multiple="true" />
					<Button v-if="answerKind && answerKind.length > 0" :label="`PRESENT (${answerKind.map(a => a.type).join(', ')})`" class="p-button-warning m-1" @click="updateAnswer(guest._id, `PRESENT (${answerKind.map(a => a.type).join(', ')})`)" />
					<Button v-else label="ABSENT" icon="pi pi-times" class="p-button-danger m-1" @click="updateAnswer(guest._id, 'ABSENT')" />
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
import SelectButton from 'primevue/selectbutton';

export default {
	name: 'Status',
	components: {
		Avatar,
		Button,
		SelectButton,
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
	},
	data () {
		return {
			invitations: {
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
			answerKind: null,
		}
	},
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
