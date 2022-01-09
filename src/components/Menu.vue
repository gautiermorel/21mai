<template>
	<nav v-if="!isAuthenticated" class="header__nav">
		<router-link to="/" class="header__nav-item">Accueil</router-link>
		<router-link to="#info" class="header__nav-item">Info Pratiques</router-link>
		<router-link to="#logements" class="header__nav-item">Logements</router-link>
		<router-link to="#transport" class="header__nav-item">Transport</router-link>
		<router-link to="#liste" class="header__nav-item">Liste de mariage</router-link>
	</nav>
	<nav v-if="isAuthenticated" class="header__nav">
		<div class="dropdown d-none d-lg-block">
			<router-link to="/" class="header__nav-item" data-bs-toggle="dropdown">
				<!-- <Avatar class="profile-picture__img" :username="currentUser.firstName" :inline="true" :size="40" /> -->
				Accueil
			</router-link>
			<div class="navbar__dropdown dropdown-menu dropdown-menu-right">
				<div class="navbar__dropdown-item navbar__title">{{currentUser.firstName}} {{currentUser.lastName}}</div>
				<a class="navbar__dropdown-item dropdown-item" rel="nofollow" data-method="delete" href="#" @click="onLogout">
					<unicon class="navbar__icon navbar__icon--with-text" viewBox="0 0 512 512" name="go-sign-out" />
					Déconnexion
				</a>
			</div>
		</div>

		<router-link to="#info" class="header__nav-item">Info Pratiques</router-link>
		<router-link to="#logements" class="header__nav-item">Logements</router-link>
		<router-link to="#transport" class="header__nav-item">Transport</router-link>
		<router-link to="#invites" class="header__nav-item">Liste des invités</router-link>
		<router-link to="#photos" class="header__nav-item">Photos</router-link>
		<router-link to="#liste" class="header__nav-item">Liste de mariage</router-link>
	</nav>
	<nav class="navigation-bar auto-hide">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-2"></div>
				<div class="col-8">
					<div class="navigation-bar__title"></div>
				</div>
				<div class="col-2">
					<button @click="modalToggle" name="button" type="button" class="navigation-bar__action ml-auto" data-toggle="modal" data-target="#more_actions">
						<unicon class="svg-inline--fa" viewBox="0 0 128 512" name="go-ellipsis-v" />
					</button>
				</div>
			</div>
		</div>
	</nav>

	<!-- <VueBottomNavigation :options="options" v-model="selected" foregroundColor="#FFFFFF" badgeColor="red" /> -->

	<VueBottomNavigation class="bottom__navigation" :options="options" v-model="selected" foregroundColor="#FFFFFF" badgeColor="red">
		<template #icon="{ props }">
			<unicon class="navbar__icon navbar__icon--with-text" :viewBox="props.viewBox" :name="props.icon" />
		</template>
		<template #title="{ props }"> <span class="hello"><b>{{ props.title }}</b></span> </template>
	</VueBottomNavigation>
</template>

<script>
import store from '@/store';
import VueBottomNavigation from "bottom-navigation-vue";

export default {
	name: 'Menu',
	components: { VueBottomNavigation },
	computed: {
		isAuthenticated: () => store.getters.isAuthenticated,
		currentUser: () => store.getters.getUser,
		username: () => {
			const { firstName, lastName, name } = store.getters.getUser
			if (!firstName && !lastName) return name
			return `${firstName}${lastName}`
		}
	},
	methods: {
		onLogout: () => store.dispatch("logout"),
	},
	data: () => ({
		selected: 1,
		options: [
			{
				id: 1,
				icon: "go-home",
				viewBox: '0 0 576 512',
				title: "Accueil",
				badge: 0
			},
			{
				id: 2,
				icon: "go-cars",
				viewBox: '0 0 640 512',
				title: "Co-voiturage",
				badge: 0
			},
			{
				id: 3,
				icon: "go-users",
				viewBox: '0 0 640 512',
				title: "Invités",
				badge: 0
			},
      {
				id: 4,
				icon: "go-music",
				viewBox: '10 0 512 512',
				title: "Playlist",
				badge: 0
			},
      {
				id: 5,
				icon: "go-picture",
				viewBox: '0 0 576 512',
				title: "Photos",
				badge: 0
			},
      {
				id: 6,
				icon: "go-chair",
				viewBox: '0 0 448 512',
				title: "Table",
				badge: 0
			}
		]
	})
}
</script>

<style scoped lang="scss">
@font-face {
	font-family: "Optima";
	src: local("Optima"), url(/fonts/optima.ttf) format("truetype");
}

.hello {
  display: none;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  margin-right: 10px;
  font-size: 0.5rem;
}

.header__nav {
	font-family: "Optima";
	padding: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-items: center;
	align-content: center;
	justify-content: center;
	text-transform: uppercase;
	.header__nav-item {
		text-decoration: none;
		font-size: 16px;
		padding: 20px;
		color: #2c3e50;
	}
	.router-link-exact-active {
		font-weight: bold;
		color: rgb(53, 53, 53);
	}
}

.body--connected .header__nav {
	display: none;
}

@media (min-width: 992px) {
	.body--connected .header__nav {
		display: flex;
	}
}

.btn-containrt_foreground {
	height: 80px !important;

	::v-deep(.btn-containrt) {
		height: 80px !important;
    border-top: 1px solid #e9ecef;
	}
}
</style>
