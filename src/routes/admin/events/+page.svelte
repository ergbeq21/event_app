<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import event from '$lib/assets/event.jpg';
	let { data } = $props();
</script>

<div class="final">
	<div class="div1">
		<img src={event} alt="event.jpg" />
	</div>

	<div class="div2">
		<div class="container">
			<h1>Todays Events</h1>

			<a href="/admin/events/new">Create a new event</a>
		</div>

		{#each data.events as event (event.id)}
			<div class="box" transition:slide>
				<div class="info">
					<p>ID: {event.id}</p>
					<p>TITLE: {event.title}</p>
					<p>LOCATION: {event.locationName}</p>
					<p>START_DATE: {event.start_date}</p>
				</div>

				<form action="?/deleteEvent" method="POST" use:enhance>
					<input type="hidden" name="id" value={event.id} />
					<button type="submit">Delete</button>
				</form>
			</div>
		{/each}
	</div>
</div>

<style>
	.box {
		border: 1px solid #ccc;
		padding: 20px;
		margin: 20px;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.div2 .container a {
		text-decoration: none;
		color: rgb(157, 17, 17);
		font-family: 'Times New Roman', Times, serif;
		font-size: 20px;
		height: 30px;
		width: 200px;
		border-radius: 10px;
		text-align: center;
		transition: 0.7s;
	}

	.div2 .container a:hover {
		transition: 0.7s;
		transform: scale(1.1);
	}

	.container h1 {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 50px;
		animation: animateh1 3s infinite;
	}

	@keyframes animateh1 {
		0% {
			transform: scale(1.05);
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
			transform: scale(1.05);
			transition: 0.7s;
		}
	}

	.box {
		padding: 10px;
		margin: 20px;
		box-shadow: 1px 3px 2px 1px rgb(118, 115, 115, 0.7);
		transition: 0.7s;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.box:hover {
		transform: scale(1.02);
		transition: 0.7s;
	}

	.box .info {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	.box .info p {
		font-family: 'Courier New', Courier, monospace;
		margin: 10px;
		padding: 10px;
	}

	.box button {
		font-family: 'Courier New', Courier, monospace;
		background-color: rgb(223, 110, 110);
		color: white;
		border: 0px;
		padding: 10px;
		margin: 10px;
		text-align: center;
		cursor: pointer;
	}

	.final {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	.div1 {
		width: 40%;
		padding: 20px;
	}

	.div1 img {
		height: 700px;
		width: 700px;
		position: fixed;
		position: relative;
		top: 0px;
	}

	.div2 {
		width: 40%;
		padding: 20px;
		border: 2px dotted black;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);

		margin-right: 40px;
		position: relative;
		top: 0px;
	}
</style>
