<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';
	let { data, form } = $props();
</script>

<div class="final">
	<div class="container">
		<h1>Categories</h1>

		<a href="/admin/categories/new">Write a new categorie</a>
	</div>

	<div class="con2">
		{#if form && !form.success}
			<Warning message={form.message} />
		{/if}

		{#each data.categories as categorie (categorie.id)}
			<div class="box" transition:slide>
				<p>{categorie.id} - {categorie.name}</p>

				<form action="?/deleteCategorie" method="POST" use:enhance>
					<input type="hidden" name="id" value={categorie.id} />
					<button type="submit">Delete</button>
				</form>
			</div>
		{/each}
	</div>
</div>

<style>
	.final {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: 1px solid black;
		margin: 50px;
	}
	.box {
		border: 1px solid #ccc;
		padding: 1rem;
		margin: 1rem 0;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 30px;
	}

	.container a {
		text-decoration: none;
		color: rgb(58, 86, 49);
		font-family: 'Times New Roman', Times, serif;
		font-size: 20px;
		transition: 0.7s;
		animation: scale 3s infinite;
		transition: 0.7s;
	}

	@keyframes scale {
		0% {
			transform: scale(1);
			transition: 0.7s;
		}
		25% {
			transform: scale(1.1);
			transition: 0.7s;
		}
		50% {
			transform: scale(1.15);
			transition: 0.7s;
		}
		75% {
			transform: scale(1.1);
			transition: 0.7s;
		}
		100% {
			transform: scale(1);
			transition: 0.7s;
		}
	}

	.container a:hover {
		transform: scale(1.1);
		transition: 0.7s;
	}

	.container h1 {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 50px;
	}

	.box {
		padding: 10px;
		margin: 20px;
		box-shadow: 1px 3px 2px 1px rgb(118, 115, 115);
		transition: 0.7s;
	}

	.box:hover {
		transform: scale(1.02);
		transition: 0.7s;
	}

	.box p {
		font-family: 'Courier New', Courier, monospace;
	}

	.box button {
		font-family: 'Courier New', Courier, monospace;
		background-color: red;
		border: 0px;
		color: white;
		padding: 5px;
		cursor: pointer;
	}

	.con2 {
		width: 100%;
	}
</style>
