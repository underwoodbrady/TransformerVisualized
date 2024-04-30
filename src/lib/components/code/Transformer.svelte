<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">0</p>
	<p class="ml-0 group-hover:text-white">
		<span class="text-blue-200">class</span> <span class="text-green-200">Transformer</span><span
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
		><span class="text-orange-200">self</span><span class="text-yellow-200">)</span>:
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
		<span class="text-orange-200">self</span>.token_embedding_table
		<span class="text-red-200">=</span> <span class="text-green-200">nn</span>.<span
			class="text-green-200">Embedding</span
		><span class="text-yellow-200">(</span>vocab_size, n_embd<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">4</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.position_embedding_table
		<span class="text-red-200">=</span> <span class="text-green-200">nn</span>.<span
			class="text-green-200">Embedding</span
		><span class="text-yellow-200">(</span>block_size, n_embd<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">5</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.blocks <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Sequential</span><span
			class="text-yellow-200">(</span
		><span class="text-red-200">*</span>[Block<span class="text-yellow-200">(</span>n_embd, n_head<span
			class="text-yellow-200">)</span
		> <span class="text-red-200">for </span>_ <span class="text-red-200">in </span><span
			class="text-green-200">range</span
		><span class="text-yellow-200">(</span>n_layer<span class="text-yellow-200">)</span>]<span
			class="text-yellow-200">)</span
		>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">6</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.ln_f <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">LayerNorm</span><span
			class="text-yellow-200">(</span
		>n_embd<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">7</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.lm_head <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Linear</span><span
			class="text-yellow-200">(</span
		>n_embd, vocab_size<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">8</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">9</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.<span class="text-green-200">apply</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>.<span class="text-green-200">_init_weights</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">10</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">11</p>
	<p class="ml-4 group-hover:text-white">
		<span class="text-blue-200">def</span> <span class="text-green-200">_init_weights</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>, <span class="text-orange-200">module</span><span
			class="text-yellow-200">)</span
		>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">12</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-red-200">if </span><span class="text-green-200">isinstance</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">module</span>, <span class="text-green-200">nn</span>.<span
			class="text-green-200">Linear</span
		><span class="text-yellow-200">)</span>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">13</p>
	<p class="ml-12 group-hover:text-white">
		<span class="text-green-200">torch</span>.<span class="text-green-200">nn</span>.init.<span
			class="text-green-200">normal_</span
		><span class="text-yellow-200">(</span><span class="text-orange-200">module</span>.weight, mean<span
			class="text-red-200">=</span
		><span class="text-purple-200">0</span>.<span class="text-purple-200">0</span>, std<span
			class="text-red-200">=</span
		><span class="text-purple-200">0</span>.<span class="text-purple-200">0</span><span
			class="text-purple-200">2</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">14</p>
	<p class="ml-12 group-hover:text-white">
		<span class="text-red-200">if </span><span class="text-orange-200">module</span>.bias
		<span class="text-red-200">is </span><span class="text-red-200">not </span><span
			class="text-purple-200">None</span
		>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">15</p>
	<p class="ml-16 group-hover:text-white">
		<span class="text-green-200">torch</span>.<span class="text-green-200">nn</span>.init.<span
			class="text-green-200">zeros_</span
		><span class="text-yellow-200">(</span><span class="text-orange-200">module</span>.bias<span
			class="text-yellow-200">)</span
		>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">16</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-red-200">elif</span> <span class="text-green-200">isinstance</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">module</span>, <span class="text-green-200">nn</span>.<span
			class="text-green-200">Embedding</span
		><span class="text-yellow-200">)</span>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">17</p>
	<p class="ml-12 group-hover:text-white">
		<span class="text-green-200">torch</span>.<span class="text-green-200">nn</span>.init.<span
			class="text-green-200">normal_</span
		><span class="text-yellow-200">(</span><span class="text-orange-200">module</span>.weight, mean<span
			class="text-red-200">=</span
		><span class="text-purple-200">0</span>.<span class="text-purple-200">0</span>, std<span
			class="text-red-200">=</span
		><span class="text-purple-200">0</span>.<span class="text-purple-200">0</span><span
			class="text-purple-200">2</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">18</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">19</p>
	<p class="ml-4 group-hover:text-white">
		<span class="text-blue-200">def</span> <span class="text-green-200">forward</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>, <span class="text-orange-200">idx</span>,
		<span class="text-orange-200">targets</span><span class="text-red-200">=</span><span
			class="text-purple-200">None</span
		><span class="text-yellow-200">)</span>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">20</p>
	<p class="ml-8 group-hover:text-white">
		B, T <span class="text-red-200">=</span> <span class="text-orange-200">idx</span>.shape
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">21</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">22</p>
	<p class="ml-8 group-hover:text-white">
		tok_emb <span class="text-red-200">=</span>
		<span class="text-orange-200">self</span>.token_embedding_table<span class="text-yellow-200"
			>(</span
		><span class="text-orange-200">idx</span><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">23</p>
	<p class="ml-8 group-hover:text-white">
		pos_emb <span class="text-red-200">=</span>
		<span class="text-orange-200">self</span>.position_embedding_table<span class="text-yellow-200"
			>( </span
		><span class="text-green-200">torch</span>.<span class="text-green-200"
			>a<span class="text-green-200">range</span></span
		><span class="text-yellow-200">(</span>T, device<span class="text-red-200">=</span>device<span
			class="text-yellow-200">)</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">24</p>
	<p class="ml-8 group-hover:text-white">
		x <span class="text-red-200">=</span> tok_emb <span class="text-red-200">+</span> pos_emb
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">25</p>
	<p class="ml-8 group-hover:text-white">
		x <span class="text-red-200">=</span> <span class="text-orange-200">self</span>.blocks<span
			class="text-yellow-200">(</span
		><span class="text-orange-200">x<span class="text-yellow-200">)</span></span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">26</p>
	<p class="ml-8 group-hover:text-white">
		x <span class="text-red-200">=</span> <span class="text-orange-200">self</span>.ln_f<span
			class="text-yellow-200">(</span
		><span class="text-orange-200">x<span class="text-yellow-200">)</span></span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">27</p>
	<p class="ml-8 group-hover:text-white">
		logits <span class="text-red-200">=</span>
		<span class="text-orange-200">self</span>.lm_head<span class="text-yellow-200">(</span><span
			class="text-orange-200">x<span class="text-yellow-200">)</span></span
		>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">28</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">29</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-red-200">if </span><span class="text-orange-200">targets</span>
		<span class="text-red-200">is </span><span class="text-purple-200">None</span>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">30</p>
	<p class="ml-12 group-hover:text-white">
		loss <span class="text-red-200">=</span> <span class="text-purple-200">None</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">31</p>
	<p class="ml-8 group-hover:text-white"><span class="text-red-200">else</span>:</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">32</p>
	<p class="ml-12 group-hover:text-white">
		B, T, C <span class="text-red-200">=</span> logits.shape
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">33</p>
	<p class="ml-12 group-hover:text-white">
		logits <span class="text-red-200">=</span> logits.view<span class="text-yellow-200">(</span
		>B<span class="text-red-200">*</span>T, C<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">34</p>
	<p class="ml-12 group-hover:text-white">
		<span class="text-orange-200">targets</span> <span class="text-red-200">=</span>
		<span class="text-orange-200">targets</span>.view<span class="text-yellow-200">(</span>B<span
			class="text-red-200">*</span
		>T<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">35</p>
	<p class="ml-12 group-hover:text-white">
		loss <span class="text-red-200">=</span> F.cross_entropy<span class="text-yellow-200">(</span
		>logits, <span class="text-orange-200">targets</span><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">36</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">37</p>
	<p class="ml-8 group-hover:text-white"><span class="text-red-200">return </span>logits, loss</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">38</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">39</p>
	<p class="ml-0 group-hover:text-white">
		model <span class="text-red-200">=</span> <span class="text-green-200">Transformer</span><span
			class="text-yellow-200">(</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
