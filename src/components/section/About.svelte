<script lang="ts">
	import ContactButton from './../ContactButton.svelte';
</script>

<section class="section">
	<div class="container">
		<div class="bio">
			<h1 class="head ">Bio</h1>
			<hr />
			<div class="mt-2">
				<p class="content text-white">
					<span class="text-nicered">2008 -</span> Born in Bangkok, Thailand
				</p>
				<p class="content text-white"><span class="text-niceorange">2016 -</span> Got into art</p>
				<p class="content text-white">
					<span class="text-nicepurple">2018 -</span> Started digital drawing and animating
				</p>
				<p class="content text-white">
					<span class="text-niceblue">2019 -</span> Got into game development on Unity
				</p>
				<p class="content text-white">
					<span class="text-nicelightblue">2021 -</span> Discovered web development
				</p>
				<p class="content text-white">
					<span class="text-nicegreen">2022 to present -</span> Coding as a hobby
				</p>
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
