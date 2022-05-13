<template>
	<div>
		<div class="card">
			<DataTable stripedRows :value="guests" responsiveLayout="stack" breakpoint="960px">
				<Column field="username" header="#"></Column>
				<Column field="invitation" header="Présence"></Column>
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

export default {
	data () {
		return {
			guests: null
		}
	},
	guestService: null,
	created () {
		this.guestService = new GuestService();
	},
	mounted () {
		this.guestService.getGuests().then(data => {
      console.log(data)
      this.guests = data
    });
	}
}
</script>         
