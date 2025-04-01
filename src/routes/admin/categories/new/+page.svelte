<script>
	import { enhance } from '$app/forms';
	let { data } = $props();
</script>

<h1 class="text-4xl text-[#2a2b55] text-center mb-6 font-bold">Write a new Category</h1>

<div class="container mx-auto">
	<form method="POST" action="?/createCategorie" use:enhance class="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg flex flex-col">
		<label for="name" class="text-lg font-semibold mb-2 text-gray-800 uppercase">Name</label>
		<textarea name="name" placeholder="Name" class="p-3 text-lg border border-gray-300 rounded-md mb-4 min-h-[120px]"></textarea>

		<button type="submit" class="bg-[#0088a9] text-white py-3 px-6 text-lg font-semibold rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-[#00788c]">
			Create Category
		</button>
	</form>
</div>
