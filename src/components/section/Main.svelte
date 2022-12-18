<script lang="ts">
	import Computer from '../Computer.svelte';

	let age: string = ' ';
	setInterval(() => {
		let time =
			(new Date().valueOf() - new Date(1206837420000).valueOf()) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
		age = time.toString().substring(0, 12);
	}, 25);
</script>

<main class="section">
	<div class="container items-center">
		<div>
			<Computer />
		</div>
		<div>
			<div class="text-white flex flex-col h-full justify-center md:p-0 px-8 ">
				<div>
					<h1 class="text-3xl font-bold head">
						Hi, I&apos;m <span class="text-niceorange">Pat</span>
					</h1>
					<hr class="border-niceyellow w-36" />
					<h2 class="content font-bold text-xl mt-3">I'm ...</h2>
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
