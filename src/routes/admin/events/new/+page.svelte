<script>
	import { enhance } from '$app/forms';
	let { data } = $props();
</script>

<h1>Create a new event</h1>

<div class="container">
	<form method="POST" action="?/createEvent" use:enhance>
		<label class="label1" for="title">Title</label>
		<input type="text" placeholder="Title" name="title" />

		<label class="label2" for="description">Description</label>
		<textarea placeholder="Description" name="description"></textarea>

		<label for="url">URL</label>
		<input type="text" placeholder="URL" name="url" />

		<label for="startDate">Start Date</label>
		<input type="date" name="startDate" />

		<label for="endDate">End Date</label>
		<input type="date" name="endDate" />

		<label for="startTime">Start Time</label>
		<input type="time" name="startTime" />

		<label for="location">Location</label>
		<select name="locationId">
			{#each data.locations as location (location.id)}
				<option value={location.id}>{location.name}</option>
			{/each}
		</select>

		<label for="location">Categorie</label>
		<select name="categoryId">
			{#each data.categories as categorie (categorie.id)}
				<option value={categorie.id}>{categorie.name}</option>
			{/each}
		</select>

		<button type="submit">Create event</button>
	</form>
</div>

<style>
	h1 {
		font-size: 32px;
		color: #2a2b55;
		text-align: center;
		margin-bottom: 24px;
		font-weight: 700;
	}

	form {
		max-width: 500px;
		margin: 0 auto;
		padding: 32px;
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
	}

	label {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 10px;
		color: #333;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		text-transform: uppercase;
	}

	input,
	textarea {
		padding: 12px;
		font-size: 16px;
		border: 1px solid #ddd;
		border-radius: 4px;
		margin-bottom: 16px;
	}

	textarea {
		min-height: 120px;
	}

	button {
		background-color: #0088a9;
		color: #fff;
		padding: 12px 20px;
		font-size: 16px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		font-weight: 600;
	}

	button:hover {
		background-color: #00788c;
	}

	select {
		margin-bottom: 10px;
		height: 50px;
		border: 1px solid rgba(73, 73, 73, 0.2);
		border-radius: 3px;
	}
</style>
