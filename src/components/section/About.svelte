<script lang="ts">
	import ContactButton from './../ContactButton.svelte';
</script>

<section class="section">
	<div class="container">
		<div class="bio">
			<h1 class="head ">Bio</h1>
			<hr />
			<div class="mt-2">
				<p class="content text-white">2008 - Born in Bangkok, Thailand</p>
				<p class="content text-white">2016 - Got into art</p>
				<p class="content text-white">2018 - Started digital drawing and animating</p>
				<p class="content text-white">2019 - Got into game development on Unity</p>
				<p class="content text-white">2021 - Discovered web development</p>
				<p class="content text-white">2022 to present - Coding as a hobby</p>
			</div>
		</div>

		<div class="bio">
			<h1 class="head ">Contacts</h1>
			<hr />
			<div class="mt-2 flex gap-2">
				<ContactButton name="Twitter" url="https://twitter.com/patatotota" />
				<ContactButton name="Github" url="https://github.com/pathonscript" />
				<ContactButton name="Garden" url="https://garden.patato.live" />
				<ContactButton name="Email" url="mailto:pathonscript@gmail.com" />
			</div>
		</div>
	</div>
</section>
