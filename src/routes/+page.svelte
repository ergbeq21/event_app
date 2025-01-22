<script>
	import { flip } from 'svelte/animate';
	let { data } = $props();
	let filteredEvents = $state(data.events);
	let selectedCategorie = $state('all');

	function filterEvents() {
		if (selectedCategorie === 'all') {
			filteredEvents = data.events;
		} else {
			filteredEvents = data.events.filter((e) => e.category_id === selectedCategorie.id);
		}
	}
</script>

<div class="div1">
	{#if data.user}
		<p>Welcome back, {data.user.username}</p>
		<form action="/logout?/logout" method="POST">
			<button type="submit">Logout</button>
		</form>
		<form action="/logout?/deleteAccount" method="POST">
			<button type="submit">Delete Account</button>
		</form>
	{:else}
		<p>You are not logged in.</p>

		<p>
			<a href="/login">Login</a>
			or
			<a href="/register">Register</a>
		</p>
	{/if}
</div>

<div class="body">
	<div class="container">
		<h1>My Event App</h1>

		<p>Here are the current events.</p>

		<select name="" id="" bind:value={selectedCategorie} onchange={filterEvents}>
			<option value="all">All</option>
			{#each data.categories as category}
				<option value={category}>{category.name}</option>
			{/each}
		</select>

		{#each filteredEvents as event (event.id)}
			<p animate:flip>{event.id} - {event.title} - {new Date(event.start_date).toDateString()}</p>
		{/each}
	</div>
</div>

<style>
	.body {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(177, 233, 233);
		animation: 10s change infinite;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 200px;
		background-color: rgb(46, 97, 97);
		width: 70%;
		box-shadow: 20px 40px 60px rgba(0, 0, 0, 0.5);
		transition: 0.7s;
		animation: scale 2.5s ease-in-out infinite;
	}

	@keyframes scale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(1);
		}
	}

	.container:hover {
		transform: scale(1.1);
		transition: 0.7s;
	}

	.container h1 {
		color: white;
		font-size: 50px;
		font-family: Arial, Helvetica, sans-serif;
	}

	.container p {
		color: white;
		font-size: 20px;
		margin: 20px;
		font-family: 'Courier New', Courier, monospace;
	}

	.div1 {
		height: 120px;
		background-color: rgb(46, 97, 97);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.div1 p {
		color: white;
		font-family: 'Courier New', Courier, monospace;
		text-transform: capitalize;
		font-size: 20px;
	}

	.div1 button {
		height: 30px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		cursor: pointer;
		transition: 0.7s;
	}
	.div1 button:hover {
		transform: scale(1.1);
		transition: 0.7s;
	}
</style>
