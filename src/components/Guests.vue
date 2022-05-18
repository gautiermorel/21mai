<template>
	<div class="card">
		<DataTable stripedRows dataKey="_id" :rows="4" v-model:filters="filters" :loading="loading" filterDisplay="menu" :value="guests" responsiveLayout="stack" breakpoint="960px" :globalFilterFields="['username']">
			<template #header>
				<div class="flex">
					<span class="p-input-icon-left">
						<i class="pi pi-search" />
						<InputText v-model="filters['global'].value" placeholder="Prénom ou nom" />
					</span>
				</div>
			</template>
			<template #empty>
				Aucun résultat.
			</template>
			<template #loading>
				Chargement de la liste des invités...
			</template>
			<Column field="username" header="#"></Column>
			<Column header="Présence" filterField="invitation" :showFilterMenu="false">
				<template #body="{data}">
					<span class="image-text">{{data.invitation.type}}</span>
				</template>
			</Column>
			<Column field="table" :sortable="true" header="Table"></Column>
			<Column field="room" :sortable="true" header="Chambre à la Rocq" headerClass="flex justify-content-center">
				<template #body="{data}">
					<div class="flex justify-content-center">
						<unicon v-if="data.room === 'OUI'" viewBox="0 0 384 512" fill="#22C55E" height="2.5em" width="2.5em" name="go-house-circle-check" />
						<unicon v-else fill="#EF4444" viewBox="0 0 384 512" height="2.5em" width="2.5em" name="go-house-circle-xmark" />
					</div>
				</template>
			</Column>
		</DataTable>
	</div>
</template>

<script>
import GuestService from '@/services/GuestService';
import { FilterMatchMode } from 'primevue/api';

export default {
	data () {
		return {
			guests: null,
			filters: null,
			loading: true,
			invitations: [
				{ type: "COCKTAIL" },
				{ type: "DINER" },
				{ type: "ENFANT" },
			],
		}
	},
	guestService: null,
	created () {
		this.guestService = new GuestService();
		this.initfilters();
	},
	mounted () {
		this.guestService.getGuests().then(data => {
			this.loading = false;
			this.guests = data.map(d => ({ ...d, invitation: { type: d.invitation } }))
		});
	},
	methods: {
		initfilters () {
			this.filters = {
				'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
				'invitation': { value: null, matchMode: FilterMatchMode.IN },
			}
		}
	}
}
</script>
