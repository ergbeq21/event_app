<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';
	let { data, form } = $props();
</script>

<div class="flex flex-col items-center justify-center space-y-6 p-10 border border-black shadow-md">
	<div class="flex flex-col items-center space-y-4">
		<h1 class="text-4xl font-bold text-black">Locations</h1>
		<a href="/admin/locations/new" class="text-blue-600 text-lg transition-transform duration-500 hover:scale-110">Write a new location</a>
	</div>

	<div class="w-full max-w-2xl">
		{#if form && !form.success}
			<Warning message={form.message} />
		{/if}

		{#each data.locations as locations (locations.id)}
			<div class="flex items-center justify-between p-4 my-4 border border-black shadow-lg transition-transform duration-300 hover:scale-105" transition:slide>
				<p class="text-lg font-mono">{locations.id} - {locations.name}</p>

				<form action="?/deleteLocation" method="POST" use:enhance>
					<input type="hidden" name="id" value={locations.id} />
					<button type="submit" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">Delete</button>
				</form>
			</div>
		{/each}
	</div>
</div>
