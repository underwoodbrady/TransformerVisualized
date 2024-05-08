<script lang="ts">
	import Element from '../Element.svelte';
	import VerticalArrow from '../VerticalArrow.svelte';
</script>

<p class="text-center text-neutral-700 font-semibold hover:text-white duration-150 cursor-pointer">
	Output
</p>
<div class="h-6"><VerticalArrow showArrow /></div>
<Element
	title="Softmax"
	color="#86efac"
/>
<div class="h-6"><VerticalArrow showArrow /></div>
<Element
	title="Conditional Probabilities"
	color="#fde047"
/>
<div class="h-6"><VerticalArrow showArrow /></div>
<Element
	title="Count Occurrences"
	color="#fca5a5"
/>
<div class="h-6"><VerticalArrow showArrow /></div>
<p class="text-center text-neutral-700 font-semibold hover:text-white duration-150 cursor-pointer">
	Input
</p>
