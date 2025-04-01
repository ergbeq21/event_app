<script>
	import logo from '$lib/assets/logo.png';
	let { children } = $props();
</script>

<div class="flex items-center justify-between bg-blue-100 py-4 px-8 shadow-md">
	<img alt="The project logo" src={logo} class="h-18 w-18" />

	<nav class="flex space-x-6 text-lg font-semi">
		<a href="/admin/events" class="relative text-gray-800 hover:text-red-500 transition duration-300 after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Events</a>
		<a href="/admin/locations" class="relative text-gray-800 hover:text-red-500 transition duration-300 after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Location</a>
		<a href="/admin/categories" class="relative text-gray-800 hover:text-red-500 transition duration-300 after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Categories</a>
	</nav>
</div>

{@render children()}