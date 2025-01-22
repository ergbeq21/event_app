<script>
	import { enhance } from '$app/forms';
</script>

<div class="container">
	<h1>Create a New Location</h1>

	<form method="POST" action="?/createLocation" use:enhance>
		<div class="info">
			<label for="name">Name</label>
			<input type="text" placeholder="Enter location name" name="name" id="name" />

			<label for="street">Street</label>
			<textarea placeholder="Enter street details" name="street" id="street"></textarea>

			<button type="submit">Create Location</button>
		</div>
	</form>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 20px;
		margin-top: 50px;
		border-radius: 10px;
	}

	.container h1 {
		font-family: 'Arial', sans-serif;
		font-size: 30px;
		color: #005f73;
		margin-bottom: 20px;
	}

	form {
		width: 100%;
		width: 500px;
		background: #ffffff;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	label {
		font-family: 'Arial', sans-serif;
		font-size: 18px;
		color: #333;
		margin-bottom: 5px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		text-transform: uppercase;
		font-weight: 600;
	}

	textarea {
		resize: none;
		height: 150px;
	}

	button {
		background-color: #005f73;
		color: #ffffff;
		font-family: 'Arial', sans-serif;
		font-size: 1rem;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: 0.7s;
	}

	button:hover {
		background-color: #0a9396;
		transform: scale(1.05);
		transition: 0.7s;
	}

	button:active {
		background-color: #94d2bd;
	}

	input {
		height: 50px;
	}
</style>
