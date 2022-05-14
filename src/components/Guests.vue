<template>
	<div>
		<div class="card">
			<DataTable stripedRows dataKey="_id" :rows="4" v-model:filters="filters1" :loading="loading1" filterDisplay="menu" :value="guests" responsiveLayout="stack" breakpoint="960px" :globalFilterFields="['username']">
				<template #header>
					<div class="flex justify-content-between">
						<span class="p-input-icon-left">
							<i class="pi pi-search" />
							<InputText v-model="filters1['global'].value" placeholder="Recherchez" />
						</span>
						<Button type="button" icon="pi pi-filter-slash" label="Effacer le filtre" class="p-button-outlined" @click="clearFilter1()" />
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
					<!-- <template #filter="{filterModel,filterCallback}">
						<MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="invitations" optionLabel="type" placeholder="Présence" class="p-column-filter">
							<template #option="slotProps">
								<div class="p-multiselect-representative-option">
									<span class="image-text">{{slotProps.option.type}}</span>
								</div>
							</template>
						</MultiSelect>
					</template> -->
				</Column>
				<Column field="table" header="Table">
					<template #body="{data}">
						<p v-if="data.invitation === 'DINER'">Dispo le 17 mai</p>
					</template>
				</Column>
				<Column field="room" header="Chambre à la Rocq"></Column>
			</DataTable>
		</div>
	</div>
</template>

<script>
import GuestService from '@/services/GuestService';
import { FilterMatchMode } from 'primevue/api';

export default {
	data () {
		return {
			guests: null,
			filters1: null,
			loading1: true,
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
		this.initFilters1();
	},
	mounted () {
		this.guestService.getGuests().then(data => {
			this.loading1 = false;
			this.guests = data.map(d => ({ ...d, invitation: { type: d.invitation } }))
		});
	},
	methods: {
		clearFilter1 () {
			this.initFilters1();
		},
		initFilters1 () {
			this.filters1 = {
				'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
				'invitation': { value: null, matchMode: FilterMatchMode.IN },
			}
		}
	}
}
</script>         
