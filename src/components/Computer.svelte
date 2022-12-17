<script lang="ts">
	import { display_random_imgur_image } from '../lib/imgur';
	import { onMount } from 'svelte';

	let link: string;

	onMount(async () => {
		await display_random_imgur_image().then((result) => {
			console.log(result);

			link = result.the_link;
		});
	});
</script>

<div>
	<div class="mt-7 ml-[5.7rem] w-[11.8rem] h-[8.8rem] absolute bg-black">
		{#if link}
			<img class="object-contain w-full h-full" src={link} alt="" />
		{:else}
			<!-- else content here -->
			<h1 class="text-green-800">Loading...</h1>
		{/if}
	</div>
	<img class="" src="/computer.png" alt="Computer" />
</div>
