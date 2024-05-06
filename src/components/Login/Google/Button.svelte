<script lang="ts">
	import L from '@/i18n/i18n-node'
	import type { Locales } from '@/i18n/i18n-types'
	import {
		googleProvider,
		onGoogleLoginError,
		onGoogleLoginSuccess
	} from './helpers'

	export let locale: Locales

	const login = googleProvider.useGoogleLogin({
		flow: 'auth-code',
		onError: onGoogleLoginError,
		onSuccess: onGoogleLoginSuccess
	})
</script>

<button class="wrap" on:click={login} aria-label="Login with Google">
	<div class="flex items-center justify-center">
		<span>Login with Google</span>
	</div>
</button>
