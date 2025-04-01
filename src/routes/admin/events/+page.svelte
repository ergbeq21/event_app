<script>
	import { slide } from 'svelte/transition';
	import event from '$lib/assets/event.jpg';
	let { data } = $props();
</script>

<div class="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 min-h-screen">
	<div class="w-full md:w-2/5 flex justify-center">
		<img src={event} alt="event" class="w-full max-w-lg rounded-lg shadow-xl" />
	</div>

	<div class="w-full md:w-3/5 bg-white p-8 shadow-xl rounded-lg">
		<div class="text-center mb-8">
			<h1 class="text-4xl font-extrabold text-blue-600 animate-pulse">Today's Events</h1>
			<a href="/admin/events/new" class="mt-4 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">Create a new event</a>
		</div>

		{#each data.events as event (event.id)}
			<div class="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition-transform hover:scale-105" transition:slide>
				<div class="flex flex-wrap justify-between items-center">
					<div>
						<p class="text-gray-800 text-lg"><span class="font-semibold">ID:</span> {event.id}</p>
						<p class="text-gray-800 text-lg"><span class="font-semibold">TITLE:</span> {event.title}</p>
						<p class="text-gray-800 text-lg"><span class="font-semibold">LOCATION:</span> {event.locationName}</p>
						<p class="text-gray-800 text-lg"><span class="font-semibold">START DATE:</span> {event.start_date}</p>
						<img src={event.image} alt="" class="h-100  w-200 object-cover" />
					</div>
					<form action="?/deleteEvent" method="POST" class="mt-4">
						<input type="hidden" name="id" value={event.id} />
						<button type="submit" class="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300 shadow-md">Delete</button>
					</form>
				</div>
			</div>
		{/each}
	</div>
</div>