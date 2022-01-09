<template>
	<div v-if="isAuthenticated" class="top__header dropdown">
		<div class="dropdown d-none d-lg-block show">
			<a class="navbar__link nav-link p-0 ml-3 top__header__username" data-bs-toggle="dropdown" href="#" role="button">
				<div class="top__header__username_use">Bienvenue, {{currentUser.username}}</div>
        <Avatar class="profile-picture__img" :username="currentUser.firstName" :inline="true" :size="40" />
			</a>
			<div class="navbar__dropdown dropdown-menu dropdown-menu-right">
				<div class="navbar__dropdown-item navbar__title">{{currentUser.firstName}} {{currentUser.lastName}}</div>
				<div class="dropdown-divider"></div>
				<a class="navbar__dropdown-item dropdown-item" rel="nofollow" data-method="delete" href="#" @click="onLogout">
					<unicon class="navbar__icon navbar__icon--with-text" viewBox="0 0 512 512" name="go-sign-out" />
					Déconnexion
				</a>
			</div>
		</div>
	</div>
	<div class="header">
		<div class="headline">
			<h1 class="title">Gautier et Ann-Sophie</h1>
			<span>21 mai 2022</span>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import Avatar from '@/components/Avatar.vue';

export default {
	name: 'Header',
	components: {
		Avatar,
	},
	computed: {
		isAuthenticated: () => store.getters.isAuthenticated,
		currentUser: () => store.getters.getUser,
	},
	methods: {
		onLogout: () => store.dispatch("logout"),
	}
}
</script>

<style scoped lang="scss">
@font-face {
	font-family: "Exmouth";
	src: local("Exmouth"), url(/fonts/exmouth.ttf) format("truetype");
}

.top__header {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-content: center;
	padding-top: 30px;
	padding-right: 50px;
}

.top__header__username {
  display: flex;
  flex-direction: row;
  align-items: center;
  // background: yellow;
  .top__header__username_use {
    padding-right: 20px;
    font-size: 15px;
    font-weight: bold;
  }
}

.header {
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	align-content: center;
	justify-items: center;
	justify-content: center;

	.headline {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		font-family: "Exmouth";

		h1 {
			font-weight: bold;
			font-size: 2rem;
			color: #ffd54f;
			line-height: 1rem;
		}

		@media (min-width: 576px) {
			h1 {
				font-size: 4rem;
			}
		}

		span {
			text-align: center;
			font-size: 25px;
		}
	}
}
</style>
