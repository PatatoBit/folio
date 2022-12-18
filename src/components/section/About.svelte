<script lang="ts">
	import ContactButton from './../ContactButton.svelte';
</script>

<section class="section">
	<div class="grid md:grid-cols-2 grid-cols-1 grid-row-2 gap-4">
		<div class="bio">
			<h1 class="head ">Bio</h1>
			<hr class="w-12" />
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
			<hr class="w-36" />

			<div class="mt-2 flex gap-2 flex-wrap">
				<ContactButton name="Twitter" url="https://twitter.com/patatotota" colorCode="#4EAAFF" />
				<ContactButton name="Github" url="https://github.com/pathonscript" colorCode="#2C2C2C" />
				<ContactButton name="Garden" url="https://garden.patato.live" colorCode="#00983D" />
				<ContactButton name="Email" url="mailto:pathonscript@gmail.com" colorCode="#FF4848" />
			</div>
		</div>

		<div class="mt-6 bio md:col-span-2">
			<h1 class="head">About me</h1>
			<hr class="w-36" />
			<p class="mt-2 content text-white">
				I started my coding journey by writing my first line of code in <code>C#</code>. I was
				trying out game development, being inspired by
				<a
					class="font-bold underline text-niceblue"
					href="https://www.youtube.com/@Danidev"
					target="_blank"
					rel="noreferrer">Dani</a
				>. Eventually, I got bored and quit. But the urge of wanting to code still exists so I tried
				out many different fields like Machine Learning, App development, etc. Currently, I've
				landed on web development and I've been enjoying it so far.
			</p>
		</div>
	</div>
</section>
