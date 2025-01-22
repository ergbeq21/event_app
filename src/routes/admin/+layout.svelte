<script>
	let { children } = $props();
	import logo from '$lib/assets/logo.png';
</script>

<div class="container">
	<img alt="The project logo" src={logo} />

	<nav>
		<a href="/admin/events"> Events</a>
		<a href="/admin/locations">Location</a>
		<a href="/admin/categories">Categories</a>
	</nav>
</div>

{@render children()}

<style>
	.container img {
		height: 90px;
		width: 90px;
		margin-left: 50px;
		animation: move 5s infinite;
	}

	@keyframes move {
		0% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(0px);
		}

		100% {
			transform: translateX(0);
		}
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		width: 100%;
		background-color: rgb(208, 212, 252);
	}

	.container nav a {
		position: relative;
		padding: 10px;
		margin: 10px;
		text-decoration: none;
		font-family: 'Courier New', Courier, monospace;
		font-size: 20px;
		color: black;
		transition: color 0.4s;
	}

	.container nav a:hover {
		color: rgb(255, 40, 40);
	}

	.container nav a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: rgb(255, 0, 0);
		transition: width 0.4s ease;
	}

	.container nav a:hover::after {
		width: 100%;
	}

	.container nav {
		padding: 70px;
	}
</style>
