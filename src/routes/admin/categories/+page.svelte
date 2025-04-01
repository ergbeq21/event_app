<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';
	let { data, form } = $props();
</script>

<div class="flex flex-col items-center justify-center border border-black m-12 p-6">
	<div class="flex flex-col items-center justify-center mb-8">
		<h1 class="text-5xl font-sans mb-4">Categories</h1>
		<a href="/admin/categories/new" class="text-xl text-green-700 font-serif transition-transform duration-700 hover:scale-110">
			Write a new category
		</a>
	</div>

	<div class="w-full">
		{#if form && !form.success}
			<Warning message={form.message} />
		{/if}

		{#each data.categories as category (category.id)}
			<div class="box p-4 m-4 shadow-md transition-all duration-700 hover:scale-105" transition:slide>
				<p class="font-mono">{category.id} - {category.name}</p>

				<form action="?/deleteCategorie" method="POST" use:enhance>
					<input type="hidden" name="id" value={category.id} />
					<button type="submit" class="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-300">
						Delete
					</button>
				</form>
			</div>
		{/each}
	</div>
</div>

<style>

	@keyframes scale {
		0%, 100% {
			transform: scale(1);
		}
		25% {
			transform: scale(1.1);
		}
		50% {
			transform: scale(1.15);
		}
		75% {
			transform: scale(1.1);
		}
	}
</style>
