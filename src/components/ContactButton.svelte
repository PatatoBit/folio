<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<button>
	<a href={'https://' + url} target="_blank" rel="noreferrer">
		<h2 class="text-xl text-white">
			{name}
		</h2>
	</a>
</button>
