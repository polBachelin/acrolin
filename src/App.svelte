<script>
	import {Router, Route, Link} from 'svelte-routing';
	import Home from './Routes/Home.svelte';
	import Footer from "./components/Footer.svelte";

</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Baloo");
    </style>
</svelte:head>

<Router>
	<!-- <header>
		<nav>
			<Link to="/home">Home</Link>
		</nav>
	</header> -->
	<main>
		<div class="containerWrapper">
			<Route path="/">
				<Home/>
			</Route>
			<Footer/>
		</div>
	</main>
</Router>

<style>

	.containerWrapper {
		min-width: 320px;
		background-color: #3356b0;
	}
	
	:root {
		/* Font Family */
		--ff-p: "Baloo", sans-serif;
		/* Font-Size */
        --fs-xl: clamp(1.5rem, 1vw + 1rem, 2.5rem);
        --fs-l: clamp(1rem, 1vw + 0.7rem, 2rem);
        --fs-m: clamp(0.9rem, 1vw + 0.2rem, 1.8rem);
        --fs-s: clamp(0.8rem, 1vw + 0.6rem, 1.2rem);
        --fs-xs: clamp(0.8rem, 1vw + 0.1rem, 1rem);
		/* Color */
		--c-blue: #3356b0;
		--c-yellow: #e7be06;
		--c-yellow-light: #e6cc52;
		--c-yellow-white: #e5da9e;
		--c-white-gray: #e4e8eb; 
		--c-dark-red: #53131e;
		--c-light-green: #2ca6a4;
    }
</style>