<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">0</p>
	<p class="ml-0 group-hover:text-white">
		<span class="text-blue-200">class</span> <span class="text-green-200">FeedFoward</span><span
			class="text-yellow-200">(</span
		><span class="text-green-200">nn</span>.<span class="text-green-200">Module</span><span
			class="text-yellow-200">)</span
		>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">1</p>
	<p class="ml-4 group-hover:text-white">
		<span class="text-blue-200">def</span> <span class="text-blue-200">__init__</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>, <span class="text-orange-200">n_embd</span><span
			class="text-yellow-200">)</span
		>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">2</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-green-200">super</span><span class="text-yellow-200">(</span><span
			class="text-yellow-200">)</span
		>.<span class="text-blue-200">__init__</span><span class="text-yellow-200">(</span><span
			class="text-yellow-200">)</span
		>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">3</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.net <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Sequential</span><span
			class="text-yellow-200">(</span
		>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">4</p>
	<p class="ml-12 group-hover:text-white">
		<span class="text-green-200">nn</span>.<span class="text-green-200">Linear</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">n_embd</span>, <span class="text-purple-200">4</span>
		<span class="text-red-200">*</span> <span class="text-orange-200">n_embd</span><span
			class="text-yellow-200">)</span
		>,
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">5</p>
	<p class="ml-12 group-hover:text-white">
		<span class="text-green-200">nn</span>.<span class="text-green-200">ReLU</span><span
			class="text-yellow-200">(</span
		><span class="text-yellow-200">)</span>,
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">6</p>
	<p class="ml-12 group-hover:text-white">
		<span class="text-green-200">nn</span>.<span class="text-green-200">Linear</span><span
			class="text-yellow-200">(</span
		><span class="text-purple-200">4</span> <span class="text-red-200">*</span>
		<span class="text-orange-200">n_embd</span>, <span class="text-orange-200">n_embd</span><span
			class="text-yellow-200">)</span
		>,
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">7</p>
	<p class="ml-12 group-hover:text-white">
		<span class="text-green-200">nn</span>.<span class="text-green-200">Dropout</span><span
			class="text-yellow-200">(</span
		>dropout<span class="text-yellow-200">)</span>,
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">8</p>
	<p class="ml-8 group-hover:text-white"><span class="text-yellow-200">)</span></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">9</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">10</p>
	<p class="ml-4 group-hover:text-white">
		<span class="text-blue-200">def</span> <span class="text-green-200">forward</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>,
		<span class="text-orange-200">x<span class="text-yellow-200">)</span></span>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">11</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-red-200">return </span><span class="text-orange-200">self</span>.net<span
			class="text-yellow-200">(</span
		><span class="text-orange-200">x<span class="text-yellow-200">)</span></span>
	</p>
</div>
