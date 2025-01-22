<script>
	import { enhance } from '$app/forms';
	let { data } = $props();
</script>

<h1>Write a new Categorie</h1>

<div class="container">
	<form method="POST" action="?/createCategorie" use:enhance>
		<label class="label2" for="name">Name</label>
		<textarea placeholder="Name" name="name"></textarea>

		<button type="submit">Create Categorie</button>
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
		margin-bottom: 8px;
		color: #333;
		text-transform: uppercase;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

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
</style>
