<script lang="ts">
	import Data from '$lib/components/Data.svelte';
	import Visual from '$lib/components/Visual.svelte';
	import Code from '$lib/components/Code.svelte';
	import { focus } from '../writables';

	let f: any;
	focus.subscribe((val) => {
		f = val;
	});
</script>

<main class="flex w-full">
	<section class="flex-1 bg-red-300 p-4">
		<Data />
	</section>
	<section class="flex-1 bg-blue-300 p-4">
		<Visual />
	</section>
	<section class="flex-1 bg-green-300 p-4">
		<Code />
	</section>
</main>
