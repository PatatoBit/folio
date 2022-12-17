<script lang="ts">
	import Computer from '../components/Computer.svelte';
	let age: string = ' ';
	setInterval(() => {
		let time =
			(new Date().valueOf() - new Date(1206837420000).valueOf()) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
		age = time.toString().substring(0, 12);
	}, 25);
</script>

<main class="w-full h-screen flex flex-col items-center justify-center bg-slate-800">
	<div class="max-w-5xl flex md:flex-row flex-col md:gap-16 gap-8">
		<div>
			<Computer />
		</div>
		<div>
			<div class="text-white flex flex-col h-full justify-center">
				<div>
					<h1 class="text-3xl font-bold head">Hi, I&apos;m Pat</h1>
					<hr />
					<h2 class="content font-bold text-xl">I'm ...</h2>
					<ul class="content text-xl">
						<li>- {age} years old</li>
						<li>- from Thailand</li>
						<li>- a full-stack developer</li>
						<li>- a 3D modeler?</li>
						<li>- an absolute gamer</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</main>
