<script lang="ts">
	import { display_random_imgur_image } from "../lib/imgur";
	import { onMount } from "svelte";

	let link: string;

	onMount(async() => {
		await display_random_imgur_image().then((result) => {
			console.log(result);
			
			link = result!;
		});
		
	});
</script>

<main class="section">
	<div class="w-full h-full flex justify-center items-center">
		<div>
			<div class="mt-7 ml-[5.7rem] w-[12rem] h-[8.7rem] absolute z-0 bg-red" >
				<img class="object-contain w-full h-full" src={link} alt="">
			</div>	
			<img class="z-10" src="/computer.png" alt="Computer" />
		</div>
	</div>
	<div class="w-full h-full flex flex-col justify-center items-center">
		<div>
			<h1 class="text-3xl font-bold head">Hi, I&apos;m Pat</h1>
			<h2 class="content font-bold">I'm ...</h2>
			<ul>
				<li>14.123456 years old</li>
				<li>from Thailand</li>
				<li>a full-stack developer</li>
				<li>a 3D modeler?</li>
				<li>an absolute gamer</li>
			</ul>
		</div>
	</div>
</main>
