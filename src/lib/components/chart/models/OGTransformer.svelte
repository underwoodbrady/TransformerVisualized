<script lang="ts">
	import { focus } from '../../../../writables';
	import Block from '../Block.svelte';
	import BypassArrow from '../BypassArrow.svelte';
	import Element from '../Element.svelte';
	import MultiVerticalArrow from '../MultiVerticalArrow.svelte';
	import VerticalArrow from '../VerticalArrow.svelte';
</script>

<p class="text-center text-neutral-700 font-semibold hover:text-white duration-150 cursor-pointer">
	Output
</p>
<div class="h-6"><VerticalArrow showArrow /></div>
<Element
	title="Softmax"
	color="#86efac"
	onHover={() =>
		focus.set({
			...$focus,
			name: 'softmax'
		})}
/>
<div class="h-6"><VerticalArrow showArrow /></div>
<Element
	title="Linear"
	onHover={() =>
		focus.set({
			...$focus,
			name: 'linear'
		})}
/>
<div class="h-6"><VerticalArrow showArrow /></div>
<Block
	onHover={() =>
		focus.set({
			linesHighlighted: [],
			name: 'block'
		})}
>
	<Element
		title="Add & Norm"
		color="#fde047"
		onHover={() =>
			focus.set({
				name: 'block',
				linesHighlighted: [8, 12]
			})}
	/>
	<div class="h-2"><VerticalArrow /></div>
	<Element
		title="Feed Forward"
		color="#7dd3fc"
		onHover={() =>
			focus.set({
				...$focus,
				name: 'feed-forward'
			})}
	/>
	<div class="h-6"><VerticalArrow showArrow /></div>
	<Element
		title="Add & Norm"
		color="#fde047"
		onHover={() =>
			focus.set({
				name: 'block',
				linesHighlighted: [7, 11]
			})}
	/>
	<div class="h-2"><VerticalArrow /></div>
	<Element
		title="Multihead-Attention"
		color="#fdba74"
		onHover={() =>
			focus.set({
				...$focus,
				name: 'multihead'
			})}
	/>
	<div class="h-6"><MultiVerticalArrow showArrow /></div>
</Block>
<div class="h-6"><VerticalArrow showArrow /></div>
<Element
	title="Positional Encoding"
	color="#d8b4fe"
	onHover={() =>
		focus.set({
			...$focus,
			name: 'encoding'
		})}
/>
<div class="h-6"><VerticalArrow showArrow /></div>
<Element
	title="Embedding"
	color="#fca5a5"
	onHover={() =>
		focus.set({
			...$focus,
			name: 'embedding'
		})}
/>
<div class="h-6"><VerticalArrow showArrow /></div>
<p class="text-center text-neutral-700 font-semibold hover:text-white duration-150 cursor-pointer">
	Input
</p>
