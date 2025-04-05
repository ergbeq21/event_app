<script>
	let { data } = $props();
	let filteredEvents = $state(data.events);
	let selectedCategorie = $state('all');

	function filterEvents() {
		filteredEvents = selectedCategorie === 'all' ? data.events : data.events.filter(e => e.category_id === selectedCategorie.id);
	}
	import logo from '$lib/assets/logo.png';

</script>



<div class="flex items-center justify-between bg-blue-100 py-4 px-8 shadow-md">
	<img alt="The project logo" src={logo} class="h-18 w-18" />

	<nav class="flex space-x-6 text-lg font-semi">
		<a href="/" class="relative text-gray-800 hover:text-red-500 transition duration-300 after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Home</a>
		<a href="/admin/events" class="relative text-gray-800 hover:text-red-500 transition duration-300 after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Events</a>
		<a href="/admin/locations" class="relative text-gray-800 hover:text-red-500 transition duration-300 after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Location</a>
		<a href="/admin/categories" class="relative text-gray-800 hover:text-red-500 transition duration-300 after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Categories</a>
	</nav>
</div>

<div class="p-6 text-center">
	{#if data.user}
		<p class="text-lg font-semibold text-gray-800">Welcome back, {data.user.username}</p>
		<form action="/logout?/logout" method="POST" class="mt-4">
			<button class="px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition duration-300">Logout</button>
		</form>
		<form action="/logout?/deleteAccount" method="POST" class="mt-4">
			<button class="px-6 py-3 bg-gray-500 text-white rounded-xl shadow-md hover:bg-gray-600 transition duration-300">Delete Account</button>
		</form>
		<a href="/admin/events">Go to events</a>
	{:else}
		<p class="text-lg text-gray-700">You are not logged in.</p>
		<p class="mt-4">
			<a href="/login" class="text-blue-500 hover:underline text-lg">Login</a> or <a href="/register" class="text-blue-500 hover:underline text-lg">Register</a>
		</p>
	{/if}
</div>

<div class="flex flex-col items-center p-8 bg-teal-50 min-h-screen">
	<h1 class="text-4xl font-bold text-gray-800 mb-6">My Event App</h1>
	<p class="text-xl text-gray-600 mb-4">Current events:</p>
	<select bind:value={selectedCategorie} onchange={filterEvents} class="mt-4 p-3 border-2 border-teal-500 rounded-xl bg-white shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
		<option value="all">All Categories</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>
	<div class="mt-6 w-full max-w-4xl space-y-6">
		{#each filteredEvents as event (event.id)}
		  <div class="p-8 bg-white shadow-xl rounded-2xl flex items-center space-x-8">
			<img 
			  src={event.image} 
			  alt={event.title} 
			  class="h-100 w-150 object-cover rounded-lg" 
			/>
			<div class="flex-1 text-right">
			  <p class="font-bold text-2xl text-gray-800">{event.title}</p>
			  <p class="font-bold text-xl text-gray-800">{event.description}</p>
			  <label for="date">Start Date:</label>
			  <p class="font-bold text-s text-gray-800">{event.start_date}</p>
			  <p class="text-gray-600 text-xl">{new Date(event.start_date).toLocaleDateString('de-DE')}</p>
			</div>
		  </div>
		{/each}
	  </div>
	  
</div>
