<template>
	<el-autocomplete v-model="state" :trigger-on-focus="false" :fetch-suggestions="querySearchAsync" autocomplete="nope" placeholder="Recherchez votre prénom/nom dans la liste invités" @select="handleSelect">
		<template #suffix>
			<unicon viewBox="0 0 512 512" fill="#DCDFE6" height="1.5em" width="1.5em" name="go-search" />
		</template>
		<template #default="{ item }">
			<div v-if="item.value" class="value">{{ item.value }}</div>
			<div v-if="item.error">{{item.error}}</div>
		</template>
	</el-autocomplete>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";
import fetchApi from "@/services/http";

export default defineComponent({
	setup (props, { emit }) {
		const links = ref([]);
		const loadAll = () => {
			return [{ value: "vue", link: "https://github.com/vuejs/vue" }];
		};

		let timeout;
		const querySearchAsync = async (queryString, cb) => {
			if (queryString && queryString.length < 3) return;

			let { data: guests = [] } = await fetchApi().get(`/public/guests`, {
				params: {
					query: queryString,
				},
			});

			const results = guests.map((g) => ({
				value: `${g.firstName} ${g.lastName}`,
				id: g._id,
			}));

      clearTimeout(timeout);
			if (guests.length === 0) {
				timeout = setTimeout(() => {
					return cb([{ error: "Désolé, nous ne vous tronvons pas dans la liste...", },]);
				}, 3000);
			} else {
				return cb(results);
			}
		};
		const createFilter = (queryString) => {
			return (restaurant) => {
				return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
				);
			};
		};
		const handleSelect = (item) => {
			emit("selected", item);
		};
		onMounted(() => {
			links.value = loadAll();
		});
		return {
			links,
			state: ref(""),
			querySearchAsync,
			createFilter,
			loadAll,
			handleSelect,
			Search,
		};
	},
});
</script>

<style lang="scss">
.is-loading svg {
	max-height: 20px;
}

.el-icon svg {
	max-height: 20px;
}

@keyframes spinner {
	to {
		transform: rotate(360deg);
	}
}
.is-loading .icon {
	animation: spinner 1s linear infinite;
}

.el-input__inner {
	border: none !important;
	height: unset !important;
	line-height: 1.5 !important;
	padding: unset !important;
	font-size: 1rem !important;
	color: #495057 !important;
}
</style>
