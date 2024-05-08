<script lang="ts">
	import { focus } from '../../writables';
	import Bigram from './chart/models/Bigram.svelte';
	import OgTransformer from './chart/models/OGTransformer.svelte';

	let model = "OGTransformer"
</script>

<h2>Visual</h2>
<div class="mx-auto max-w-xl">
	<div class="flex flex-col justify-center mx-4 max-2xl:text-sm">
		{#if model == 'OGTransformer'}
		<OgTransformer/>
		{:else if model = "Bigram"}
		<Bigram/>
		{/if}
	</div>
</div>

