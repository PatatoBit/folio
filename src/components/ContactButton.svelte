<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<button class="px-4 py-2 border-2 border-white rounded-md content">
	<a href={url} target="_blank" rel="noreferrer">
		<h2 class="text-xl text-white">
			{name}
		</h2>
	</a>
</button>
