<script lang="ts">
	import Computer from '../components/Computer.svelte';
	let age: string = ' ';
	setInterval(() => {
		let time =
			(new Date().valueOf() - new Date(1206837420000).valueOf()) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
		age = time.toString().substring(0, 12);
	}, 25);
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<title>patato.live</title>
	<meta name="author" content="Patato" />
	<meta name="author" content="patato" />
	<meta name="description" content="I swear this is not a porn site" />

	<link rel="apple-touch-icon" href="apple-touch-icon.png" />
	<link rel="shortcut icon" href="/noporn.png" type="image/x-icon" />
	<meta name="twitter:title" content="Patato" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@patatotota" />
	<meta name="twitter:creator" content="@patatotota" />

	<meta property="og:site_name" content="patato.live" />
	<meta name="og:title" content="Patato" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/bing.png" />
</svelte:head>

<main class="w-full h-screen flex flex-col items-center justify-center bg-slate-800">
	<div class="max-w-5xl flex md:flex-row flex-col md:gap-16 gap-8">
		<div>
			<Computer />
		</div>
		<div>
			<div class="text-white flex flex-col h-full justify-center">
				<div>
					<h1 class="text-3xl font-bold head">
						Hi, I&apos;m <span class="text-niceorange">Pat</span>
					</h1>
					<hr />
					<h2 class="content font-bold text-xl">I'm ...</h2>
					<ul class="content text-xl">
						<li>- <span class="text-nicered">{age}</span> years old</li>
						<li>- from <span class="text-nicepurple">Thailand</span></li>
						<li>- a <span class="text-niceblue">full-stack developer</span></li>
						<li>- a <span class="text-nicelightblue">3D modeler?</span></li>
						<li>- an <span class="text-nicegreen">absolute gamer</span></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</main>
