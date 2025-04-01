<script>
	import { enhance } from '$app/forms';
</script>

<div class="flex flex-col items-center w-full p-5 mt-12 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
	<h1 class="text-3xl font-bold text-teal-700 mb-6">Create a New Location</h1>

	<form method="POST" action="?/createLocation" use:enhance class="w-full space-y-4">
		<div class="flex flex-col gap-4">
			<label for="name" class="text-lg font-semibold text-gray-700 uppercase">Name</label>
			<input type="text" placeholder="Enter location name" name="name" id="name" class="h-12 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />

			<label for="street" class="text-lg font-semibold text-gray-700 uppercase">Street</label>
			<textarea placeholder="Enter street details" name="street" id="street" class="h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>

			<button type="submit" class="w-full py-3 text-white bg-teal-700 rounded-lg hover:bg-teal-600 transition transform hover:scale-105">Create Location</button>
		</div>
	</form>
</div>
