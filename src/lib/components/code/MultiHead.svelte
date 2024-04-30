<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">0</p>
	<p class="ml-0 group-hover:text-white">
		<span class="text-blue-200">class</span> <span class="text-green-200">Head</span><span
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
		><span class="text-orange-200">self</span>, <span class="text-orange-200">head_size</span><span
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
		<span class="text-orange-200">self</span>.key <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Linear</span><span
			class="text-yellow-200">(</span
		>n_embd, <span class="text-orange-200">head_size</span>,
		<span class="text-orange-200">bias</span><span class="text-red-200">=</span><span
			class="text-purple-200">False</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">4</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.query <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Linear</span><span
			class="text-yellow-200">(</span
		>n_embd, <span class="text-orange-200">head_size</span>,
		<span class="text-orange-200">bias</span><span class="text-red-200">=</span><span
			class="text-purple-200">False</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">5</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.value <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Linear</span><span
			class="text-yellow-200">(</span
		>n_embd, <span class="text-orange-200">head_size</span>,
		<span class="text-orange-200">bias</span><span class="text-red-200">=</span><span
			class="text-purple-200">False</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">6</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.<span class="text-green-200">register_buffer</span
		><span class="text-yellow-200">(</span><span class="text-yellow-200"
			>'<span class="text-green-200">tril</span>'</span
		>, <span class="text-green-200">torch</span>.<span class="text-green-200">tril</span><span
			class="text-yellow-200">(</span
		><span class="text-green-200">torch</span>.<span class="text-green-200">ones</span><span
			class="text-yellow-200">(</span
		>block_size, block_size<span class="text-yellow-200">)</span><span class="text-yellow-200"
			>)</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">7</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.dropout <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Dropout</span><span
			class="text-yellow-200">(</span
		>dropout<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">8</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">9</p>
	<p class="ml-4 group-hover:text-white">
		<span class="text-blue-200">def</span> <span class="text-green-200">forward</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>,
		<span class="text-orange-200">x<span class="text-yellow-200">)</span></span>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">10</p>
	<p class="ml-8 group-hover:text-white">B,T,C <span class="text-red-200">=</span> x.shape</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">11</p>
	<p class="ml-8 group-hover:text-white">
		k <span class="text-red-200">=</span> <span class="text-orange-200">self</span>.key<span
			class="text-yellow-200">(</span
		><span class="text-orange-200">x<span class="text-yellow-200">)</span></span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">12</p>
	<p class="ml-8 group-hover:text-white">
		q <span class="text-red-200">=</span> <span class="text-orange-200">self</span>.query<span
			class="text-yellow-200">(</span
		><span class="text-orange-200">x<span class="text-yellow-200">)</span></span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">13</p>
	<p class="ml-8 group-hover:text-white">
		wei <span class="text-red-200">=</span> q <span class="text-red-200">@</span> k.transpose<span
			class="text-yellow-200">(</span
		><span class="text-red-200">-</span><span class="text-purple-200">2</span>,<span
			class="text-red-200">-</span
		><span class="text-purple-200">1</span><span class="text-yellow-200">)</span>
		<span class="text-red-200">*</span>
		k.shape[<span class="text-red-200">-</span><span class="text-purple-200">1</span>]<span
			class="text-red-200">*</span
		><span class="text-red-200">*</span><span class="text-red-200">-</span><span
			class="text-purple-200">0</span
		>.<span class="text-purple-200">5</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">14</p>
	<p class="ml-8 group-hover:text-white">
		wei <span class="text-red-200">=</span> wei.masked_fill<span class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>.<span class="text-green-200">tril</span>[:T, :T]
		<span class="text-red-200">=</span><span class="text-red-200">=</span>
		<span class="text-purple-200">0</span>, <span class="text-green-200">float</span><span
			class="text-yellow-200">(</span
		><span class="text-yellow-200">'<span class="text-red-200">-</span>inf'</span><span
			class="text-yellow-200">)</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">15</p>
	<p class="ml-8 group-hover:text-white">
		wei <span class="text-red-200">=</span> F.<span class="text-green-200">softmax</span><span
			class="text-yellow-200">(</span
		>wei, <span class="text-orange-200">dim</span><span class="text-red-200">=</span><span
			class="text-red-200">-</span
		><span class="text-purple-200">1</span><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">16</p>
	<p class="ml-8 group-hover:text-white">
		wei <span class="text-red-200">=</span> <span class="text-orange-200">self</span>.dropout<span
			class="text-yellow-200">(</span
		>wei<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">17</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-red-200">return </span>wei <span class="text-red-200">@</span>
		<span class="text-orange-200">self</span>.value<span class="text-yellow-200">(</span><span
			class="text-orange-200">x<span class="text-yellow-200">)</span></span
		>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">18</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">19</p>
	<p class="ml-0 group-hover:text-white">
		<span class="text-blue-200">class</span>
		<span class="text-green-200">Multi<span class="text-green-200">Head</span>Attention</span><span
			class="text-yellow-200">(</span
		><span class="text-green-200">nn</span>.<span class="text-green-200">Module</span><span
			class="text-yellow-200">)</span
		>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">20</p>
	<p class="ml-4 group-hover:text-white">
		<span class="text-blue-200">def</span> <span class="text-blue-200">__init__</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>, <span class="text-orange-200">num_heads</span>,
		<span class="text-orange-200">head_size</span><span class="text-yellow-200">)</span>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">21</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-green-200">super</span><span class="text-yellow-200">(</span><span
			class="text-yellow-200">)</span
		>.<span class="text-blue-200">__init__</span><span class="text-yellow-200">(</span><span
			class="text-yellow-200">)</span
		>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">22</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.heads <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200"
			><span class="text-green-200">Module</span>List</span
		><span class="text-yellow-200">(</span>[<span class="text-green-200">Head</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">head_size</span><span class="text-yellow-200">)</span>
		<span class="text-red-200">for </span>_ <span class="text-red-200">in </span><span
			class="text-green-200">range</span
		><span class="text-yellow-200">(</span><span class="text-orange-200">num_heads</span><span
			class="text-yellow-200">)</span
		>]<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">23</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.proj <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Linear</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">head_size</span> <span class="text-red-200">*</span>
		<span class="text-orange-200">num_heads</span>, n_embd<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">24</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-orange-200">self</span>.dropout <span class="text-red-200">=</span>
		<span class="text-green-200">nn</span>.<span class="text-green-200">Dropout</span><span
			class="text-yellow-200">(</span
		>dropout<span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">25</p>
	<p class="ml-0 group-hover:text-white"></p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">26</p>
	<p class="ml-4 group-hover:text-white">
		<span class="text-blue-200">def</span> <span class="text-green-200">forward</span><span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>,
		<span class="text-orange-200">x<span class="text-yellow-200">)</span></span>:
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">27</p>
	<p class="ml-8 group-hover:text-white">
		out <span class="text-red-200">=</span> <span class="text-green-200">torch</span>.<span
			class="text-green-200">cat</span
		><span class="text-yellow-200">(</span>[h<span class="text-yellow-200">(</span><span
			class="text-orange-200">x<span class="text-yellow-200">)</span></span
		> <span class="text-red-200">for </span>h <span class="text-red-200">in </span><span
			class="text-orange-200">self</span
		>.heads], <span class="text-orange-200">dim</span><span class="text-red-200">=</span><span
			class="text-red-200">-</span
		><span class="text-purple-200">1</span><span class="text-yellow-200">)</span>
	</p>
</div>
<div class="group flex items-center hover:bg-neutral-700 -mx-4 px-4">
	<p class="text-sm text-neutral-400 w-8 select-none">28</p>
	<p class="ml-8 group-hover:text-white">
		<span class="text-red-200">return </span><span class="text-orange-200">self</span>.dropout<span
			class="text-yellow-200">(</span
		><span class="text-orange-200">self</span>.proj<span class="text-yellow-200">(</span>out<span
			class="text-yellow-200">)</span
		><span class="text-yellow-200">)</span>
	</p>
</div>
