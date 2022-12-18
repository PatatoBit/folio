<script lang="ts">
	export let name: string;
	export let url: string;
	export let colorCode: `#${string}`;
</script>

<button
	class="px-4 py-2 rounded-md content hover:invert transition-all"
	style="background-color: {colorCode}"
>
	<a href={url} target="_blank" rel="noreferrer">
		<h2 class="text-xl text-white">
			{name}
		</h2>
	</a>
</button>
