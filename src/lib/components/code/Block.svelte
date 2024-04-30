<script lang="ts">
	export let linesHighlighted: number[] = [];

	console.log('l ', linesHighlighted, linesHighlighted.includes(0));
</script>

<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(1) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">1</p>
	<p class={'ml-0 group-hover:text-white ' + (linesHighlighted.includes(1) ? 'text-white' : '')}>
		<span class="text-blue-200">class</span> <span class="text-green-200">Block</span><span
			class="text-yellow-200">(</span
		><span class="text-green-200">nn</span>.<span class="text-green-200">Module</span><span
			class="text-yellow-200">)</span
		>:
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(2) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">2</p>
	<p class={'ml-4 group-hover:text-white ' + (linesHighlighted.includes(2) ? 'text-white' : '')}>
		<span class="text-blue-200">def</span> <span class="text-blue-200">__init__</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>, <span class="text-orange-200">n_embd</span>,
		<span class="text-orange-200">n_head</span><span class="text-yellow-200">)</span>:
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(3) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">3</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(3) ? 'text-white' : '')}>
		<span class="text-green-200">super</span><span class="text-yellow-200">(</span><span
			class="text-yellow-200">)</span
		>.<span class="text-blue-200">__init__</span><span class="text-yellow-200">(</span><span
			class="text-yellow-200">)</span
		>
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(4) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">4</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(4) ? 'text-white' : '')}>
		<span class="text-orange-200">head_size</span> <span class="text-red-200">=</span>
		<span class="text-orange-200">n_embd</span> <span class="text-red-200">/</span><span
			class="text-red-200">/</span
		> <span class="text-orange-200">n_head</span>
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(5) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">5</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(5) ? 'text-white' : '')}>
		<span class="text-orange-200">self</span>.sa <span class="text-red-200">=</span>
		<span class="text-green-200">Multi<span class="text-green-200">Head</span>Attention</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">n_head</span>,
		<span class="text-orange-200">head_size</span><span class="text-yellow-200">)</span>
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(6) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">6</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(6) ? 'text-white' : '')}>
		<span class="text-orange-200">self</span>.ffwd <span class="text-red-200">=</span>
		<span class="text-green-200">FeedFoward</span><span class="text-yellow-200">(</span><span
			class="text-orange-200">n_embd</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(7) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">7</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(7) ? 'text-white' : '')}>
		<span class="text-orange-200">self</span>.ln<span class="text-purple-200">1</span>
		<span class="text-red-200">=</span> <span class="text-green-200">nn</span>.<span
			class="text-green-200">LayerNorm</span
		><span class="text-yellow-200">(</span><span class="text-orange-200">n_embd</span><span
			class="text-yellow-200">)</span
		>
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(8) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">8</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(8) ? 'text-white' : '')}>
		<span class="text-orange-200">self</span>.ln<span class="text-purple-200">2</span>
		<span class="text-red-200">=</span> <span class="text-green-200">nn</span>.<span
			class="text-green-200">LayerNorm</span
		><span class="text-yellow-200">(</span><span class="text-orange-200">n_embd</span><span
			class="text-yellow-200">)</span
		>
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(9) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">9</p>
	<p
		class={'ml-0 group-hover:text-white ' + (linesHighlighted.includes(9) ? 'text-white' : '')}
	></p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(10) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">10</p>
	<p class={'ml-4 group-hover:text-white ' + (linesHighlighted.includes(10) ? 'text-white' : '')}>
		<span class="text-blue-200">def</span> <span class="text-green-200">forward</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>,
		<span class="text-orange-200">x<span class="text-yellow-200">)</span></span>:
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(11) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">11</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(11) ? 'text-white' : '')}>
		x <span class="text-red-200">=</span> x <span class="text-red-200">+</span>
		<span class="text-orange-200">self</span>.sa<span class="text-yellow-200">(</span><span
			class="text-orange-200">self</span
		>.ln<span class="text-purple-200">1</span><span class="text-yellow-200">(</span><span
			class="text-orange-200">x<span class="text-yellow-200">)</span></span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(12) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">12</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(12) ? 'text-white' : '')}>
		x <span class="text-red-200">=</span> x <span class="text-red-200">+</span>
		<span class="text-orange-200">self</span>.ffwd<span class="text-yellow-200">(</span><span
			class="text-orange-200">self</span
		>.ln<span class="text-purple-200">2</span><span class="text-yellow-200">(</span><span
			class="text-orange-200">x<span class="text-yellow-200">)</span></span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div
	class={'group flex items-center hover:bg-neutral-700 -mx-4 px-4 ' +
		(linesHighlighted.includes(13) ? 'bg-neutral-700' : '')}
>
	<p class="text-sm text-neutral-400 w-8 select-none">13</p>
	<p class={'ml-8 group-hover:text-white ' + (linesHighlighted.includes(13) ? 'text-white' : '')}>
		<span class="text-red-200">return </span>x
	</p>
</div>
