<template>
	<nav class="header__nav">
		<router-link to="/" class="header__nav-item">Accueil</router-link>
		<router-link to="/cours" class="header__nav-item">Apprendre</router-link>
		<router-link to="/creations" class="header__nav-item">Découvrir</router-link>
		<router-link to="/a-propos" class="header__nav-item">à propos</router-link>
		<router-link to="/contact" class="header__nav-item">Contact</router-link>
		<div class="header__social" @click="openURL('https://www.facebook.com/modelagedelaterre')">
			<v-icon name="instagram" base-class="instagram-icon"></v-icon>
			<v-icon name="facebook" base-class="facebook-icon"></v-icon>
		</div>
	</nav>
	<nav class="mobile-nav">
		<ul class="mobile-nav__list">
			<li class="mobile-nav__item">
				<a class="mobile-nav__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="496px" height="496px" viewBox="0 0 496 496" version="1.1" class="mobile-nav__icon">
						<title>compass</title>
						<desc>Created with Sketch.</desc>
						<g id="Page-1" stroke="none" stroke-width="1">
							<g id="compass">
								<path d="M264.97,264.97 C274.35,255.6 274.35,240.4 264.97,231.03 C255.6,221.66 240.4,221.66 231.03,231.03 C221.65,240.4 221.65,255.6 231.03,264.97 C240.4,274.34 255.6,274.34 264.97,264.97 Z M351.44,117 C349.18,117 346.93,117.37 344.73,118.16 L189.83,174.01 C182.34,176.71 176.73,182.32 174.03,189.81 L118.18,344.72 C112.53,360.39 128.51,378.99 144.58,378.99 C146.84,378.99 149.09,378.62 151.29,377.83 L306.19,321.98 C313.68,319.28 319.29,313.67 321.99,306.18 L377.84,151.28 C383.48,135.61 367.51,117 351.44,117 Z M292.79,292.79 L152.69,343.3 L203.2,203.19 L343.31,152.68 L292.79,292.79 Z M248,0 C111.03,0 0,111.03 0,248 C0,384.97 111.03,496 248,496 C384.97,496 496,384.97 496,248 C496,111.03 384.97,0 248,0 Z M248,464 C128.9,464 32,367.1 32,248 C32,128.9 128.9,32 248,32 C367.1,32 464,128.9 464,248 C464,367.1 367.1,464 248,464 Z" id="Shape"></path>
							</g>
						</g>
					</svg>
					Explorer</a>
			</li>
			<li class="mobile-nav__item">
				<a class="mobile-nav__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="472px" height="512px" viewBox="0 0 472 512" version="1.1" class="mobile-nav__icon">
						<!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
						<title>pin</title>
						<desc>Created with Sketch.</desc>
						<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
							<g id="pin">
								<path d="M129.106,512 C96.03,512 62.953,499.41 37.773,474.229 C-12.591,423.868 -12.591,341.924 37.771,291.564 L299.842,29.498 C339.173,-9.833 403.17,-9.833 442.502,29.498 C481.833,68.83 481.833,132.825 442.502,172.155 L219.872,394.781 C191.575,423.082 145.525,423.084 117.222,394.781 C88.922,366.48 88.922,320.432 117.222,292.132 L287.523,121.834 C292.209,117.148 299.807,117.148 304.493,121.834 L310.154,127.495 C314.84,132.181 314.84,139.779 310.154,144.466 L139.854,314.763 C124.033,330.584 124.033,356.326 139.855,372.148 C155.676,387.968 181.419,387.968 197.24,372.148 L419.87,149.522 C446.721,122.671 446.721,78.981 419.87,52.128 C393.015,25.277 349.326,25.279 322.475,52.128 L60.404,314.196 C22.522,352.078 22.522,413.715 60.404,451.597 C98.288,489.478 159.927,489.479 197.808,451.598 L415.551,233.859 C420.237,229.173 427.835,229.173 432.521,233.859 L438.182,239.52 C442.868,244.206 442.868,251.804 438.182,256.491 L220.44,474.229 C195.26,499.41 162.183,512 129.106,512 Z" id="Path"></path>
							</g>
						</g>
					</svg>
					Mes listes</a>
			</li>
			<li class="mobile-nav__item">
				<button name="button" type="button" class="mobile-nav__link" data-toggle="modal" data-target="#list-hub">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="496px" height="496px" viewBox="0 0 496 496" version="1.1" class="mobile-nav__icon">
						<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
							<g id="plus" fill-rule="nonzero">
								<path d="M376,242 L376,254 C376,260.6 370.6,266 364,266 L266,266 L266,364 C266,370.6 260.6,376 254,376 L242,376 C235.4,376 230,370.6 230,364 L230,266 L132,266 C125.4,266 120,260.6 120,254 L120,242 C120,235.4 125.4,230 132,230 L230,230 L230,132 C230,125.4 235.4,120 242,120 L254,120 C260.6,120 266,125.4 266,132 L266,230 L364,230 C370.6,230 376,235.4 376,242 Z M496,248 C496,385 385,496 248,496 C111,496 0,385 0,248 C0,111 111,0 248,0 C385,0 496,111 496,248 Z M464,248 C464,128.1 366.7,32 248,32 C128.1,32 32,129.3 32,248 C32,367.9 129.3,464 248,464 C367.9,464 464,366.7 464,248 Z" id="Shape"></path>
							</g>
						</g>
					</svg>
					Ajouter
				</button>
			</li>
			<li class="mobile-nav__item">
				<a class="mobile-nav__link position-relative" href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="448px" height="512px" viewBox="0 0 448 512" version="1.1" class="mobile-nav__icon">
						<!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->
						<title>bell</title>
						<desc>Created with Sketch.</desc>
						<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
							<g id="bell" transform="translate(-1.000000, 0.000000)" fill-rule="nonzero">
								<path d="M225,480 C207.34,480 193,465.62 193,447.97 L161,447.97 C161,483.28 189.72,512 225,512 C260.28,512 289,483.28 289,447.97 L257,447.97 C257,465.62 242.66,480 225,480 Z M434.38,334.81 C406.42,308.19 385.04,280.33 385.04,185.9 C385.04,106.31 321.65,41.4 241,33.55 L241,16 C241,7.16 233.84,0 225,0 C216.16,0 209,7.16 209,16 L209,33.56 C128.35,41.41 64.96,106.31 64.96,185.9 C64.96,280.32 43.57,308.19 15.61,334.81 C1.64,348.11 -2.77,368.22 4.36,386.04 C11.64,404.24 29.16,416 49,416 L401,416 C420.84,416 438.36,404.23 445.64,386.03 C452.77,368.21 448.35,348.11 434.38,334.81 Z M401,384 L49,384 C34.77,384 27.66,367.53 37.68,357.99 C72.54,324.8 96.96,287.65 96.96,185.91 C96.96,118.53 154.23,64 225,64 C295.76,64 353.04,118.52 353.04,185.9 C353.04,287.25 377.25,324.6 412.32,357.98 C422.38,367.57 415.17,384 401,384 Z" id="Shape"></path>
							</g>
						</g>
					</svg>
					Notifications<span class="mobile-nav__badge" id="notifications_badge_mobile">0</span></a>
			</li>
			<li class="mobile-nav__item">
				<a class="mobile-nav__link" href="#">
					<div class="profile-picture profile-picture--micro"><img class="profile-picture__img" alt="Gautier" src="#" /></div>
					Mon compte
				</a>
			</li>
		</ul>
	</nav>
	<nav class="navigation-bar auto-hide">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-2"></div>
				<div class="col-8">
					<div class="navigation-bar__title">Listes</div>
				</div>
				<div class="col-2">
					<button @click="modalToggle" name="button" type="button" class="navigation-bar__action ml-auto" data-toggle="modal" data-target="#more_actions">
						<unicon class="svg-inline--fa" viewBox="0 0 128 512" name="go-ellipsis-v" />
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import store from '@/store';
import Avatar from '@/components/Avatar.vue';

export default {
	name: 'Menu',
	components: {
		Avatar,
	},
	computed: {
		currentGuest: () => store.getters.getGuest,
		username: () => {
			const { firstName, lastName, name } = store.getters.getGuest
			if (!firstName && !lastName) return name
			return `${firstName}${lastName}`
		}
	},
	methods: {
		onLogout: () => store.dispatch("logout"),
	}
}
</script>

<style scoped lang="scss">
@font-face {
	font-family: "Optima";
	src: local("Optima"), url(/fonts/optima.ttf) format("truetype");
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
</style>
