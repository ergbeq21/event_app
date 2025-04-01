<script>
	import { enhance } from '$app/forms';
	let { data } = $props();
</script>

<h1 class="text-4xl text-[#2a2b55] text-center mb-6 font-bold">Create a new event</h1>

<div class="container mx-auto">
	<form method="POST" action="?/createEvent" use:enhance class="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg flex flex-col" enctype="multipart/form-data">
		<label for="title" class="text-lg font-semibold mb-2 text-gray-800 uppercase">Title</label>
		<input type="text" name="title" placeholder="Title" class="p-3 text-lg border border-gray-300 rounded-md mb-4" />
		
		<label for="image" class="text-lg font-semibold mb-2 text-gray-800 uppercase">Upload image</label>
		<input type="file" name="image" class="w-full rounded-lg border border-gray-300 p-2" />


		<label for="description" class="text-lg font-semibold mb-2 text-gray-800 uppercase">Description</label>
		<textarea name="description" placeholder="Description" class="p-3 text-lg border border-gray-300 rounded-md mb-4 min-h-[120px]"></textarea>

		<label for="url" class="text-lg font-semibold mb-2 text-gray-800 uppercase">URL</label>
		<input type="text" name="url" placeholder="URL" class="p-3 text-lg border border-gray-300 rounded-md mb-4" />

		<label for="startDate" class="text-lg font-semibold mb-2 text-gray-800 uppercase">Start Date</label>
		<input type="date" name="startDate" class="p-3 text-lg border border-gray-300 rounded-md mb-4" />

		<label for="endDate" class="text-lg font-semibold mb-2 text-gray-800 uppercase">End Date</label>
		<input type="date" name="endDate" class="p-3 text-lg border border-gray-300 rounded-md mb-4" />

		<label for="startTime" class="text-lg font-semibold mb-2 text-gray-800 uppercase">Start Time</label>
		<input type="time" name="startTime" class="p-3 text-lg border border-gray-300 rounded-md mb-4" />

		<label for="location" class="text-lg font-semibold mb-2 text-gray-800 uppercase">Location</label>
		<select name="locationId" class="mb-4 h-12 border border-gray-300 rounded-md">
			{#each data.locations as location (location.id)}
				<option value={location.id}>{location.name}</option>
			{/each}
		</select>

		<label for="category" class="text-lg font-semibold mb-2 text-gray-800 uppercase">Category</label>
		<select name="categoryId" class="mb-4 h-12 border border-gray-300 rounded-md">
			{#each data.categories as category (category.id)}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>

		<button type="submit" class="bg-[#0088a9] text-white py-3 px-6 text-lg font-semibold rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-[#00788c]">
			Create event
		</button>
	</form>
</div>
