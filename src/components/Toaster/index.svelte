<script lang="ts">
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import { logError } from '@/utils/common/common'
	import Error from '@/components/Icons/Error.svelte'
	import Success from '@/components/Icons/Success.svelte'
	import {
		type Notification,
		NotificationType,
		clientNotification,
		getDefaultNotification
	} from './helpers'

	export let locale: Locales

	const timeout = 5000

	let notification: Notification | undefined

	onMount(() => {
		htmx.on('htmx:responseError', (evt) => {
			notification = getDefaultNotification(locale, NotificationType.ERROR)
			setTimeout(() => (notification = undefined), timeout)
		})
	})
</script>

{#if notification}
	<div class="wrap" in:fade out:fade>
		{#if notification.type === NotificationType.SUCCESS}
			<div class="icon">
				<Success class="w-4 h-4 text-green-medium" />
			</div>
		{/if}
		{#if notification.type === NotificationType.ERROR}
			<div class="icon">
				<Error class="w-4 h-4 text-red-500" />
			</div>
		{/if}
		<p class="text-b2 text-black line-clamp-3" title={notification.message}>
			{notification.message}
		</p>
	</div>
{/if}


