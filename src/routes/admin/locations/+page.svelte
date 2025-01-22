<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';
	let { data, form } = $props();
</script>

<div class="final">
	<div class="container">
		<h1>Locations</h1>

		<a href="/admin/locations/new">Write a new location</a>
	</div>

	<div class="con2">
		{#if form && !form.success}
			<Warning message={form.message} />
		{/if}

		{#each data.locations as locations (locations.id)}
			<div class="box" transition:slide>
				<p>{locations.id} - {locations.name}</p>

				<form action="?/deleteLocation" method="POST" use:enhance>
					<input type="hidden" name="id" value={locations.id} />
					<button type="submit">Delete</button>
				</form>
			</div>
		{/each}
	</div>
</div>

<style>
	.box {
		border: 1px solid #000000;
		padding: 1rem;
		margin: 1rem 0;
		padding: 10px;
		margin: 20px;
		box-shadow: 5px 2px 5px black;
	}

	.container a {
		text-decoration: none;
		color: rgb(41, 105, 120);
		animation: bigger 5s infinite;
	}

	@keyframes bigger {
		0% {
			transform: scale(1.1);
			transition: 0.7s;
		}
		25% {
			transform: scale(1.2);
			transition: 0.7s;
		}
		50% {
			transform: scale(1.3);
			transition: 0.7s;
		}
		75% {
			transform: scale(1.2);
			transition: 0.7s;
		}
		100% {
			transform: scale(1.1);
			transition: 0.7s;
		}
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 200px;
		padding: 10px;
		margin: 10px;
	}

	.container h1 {
		color: black;
		font-size: 50px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	.final {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 40px;
		border: 1px solid black;
	}

	.con2 {
		width: 100%;
	}

	.con2 .box button {
		background-color: red;
		color: white;
		border: 0px;
		height: 20px;
		text-align: center;
		cursor: pointer;
	}
</style>
