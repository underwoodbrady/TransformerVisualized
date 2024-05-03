<script lang="ts">
	import Transformer from './code/Transformer.svelte';
	import Block from './code/Block.svelte';
	import FeedForward from './code/FeedForward.svelte';
	import MultiHead from './code/MultiHead.svelte';
	import { focus } from '../../writables';

	let focusOptions = ['transformer', 'block', 'feed-forward', 'multihead'];
	let currentFocus = 'block';

	let linesHighlighted: number[] = [];

	focus.subscribe((f) => {
		linesHighlighted = f.linesHighlighted;
		if (focusOptions.includes(f.name)) currentFocus = f.name;
		else currentFocus = 'transformer';
	});
</script>

<h2>Code</h2>

<div
	class="w-full border-2 border-neutral-800 hover:border-white duration-150 rounded-md bg-neutral-700 p-4 mx-auto max-w-xl cursor-text"
>
	<div class="flex justify-between items-center mb-4">
		<p class="text-white font-semibold text-sm">Python</p>
		<div class="flex space-x-1">
			<div class="w-2 h-2 rounded-full bg-red-300"></div>
			<div class="w-2 h-2 rounded-full bg-orange-300"></div>
			<div class="w-2 h-2 rounded-full bg-green-300"></div>
		</div>
	</div>
	<code class="text-neutral-200 max-2xl:text-sm">
		{#if currentFocus == 'transformer'}
			<Transformer />
		{:else if currentFocus == 'block'}
			<Block {linesHighlighted} />
		{:else if currentFocus == 'feed-forward'}
			<FeedForward />
		{:else if currentFocus == 'multihead'}
			<MultiHead />
		{/if}
	</code>
</div>
