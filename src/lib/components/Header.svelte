<header class="border-b-2 border-black bg-neutral-300 px-4  py-1">
	<nav>
		<ul class="flex justify-between  items-center">
			<li>
				<h3>Transformers Visualized</h3>
			</li>
			<li>
				<p>Model:</p>
				<select name = "models" class="border-black border">
					<option value="volvo">Bigram LM</option>
					<option value="saab">Original Transformer</option>
					<option value="mercedes">Modern Transformer</option>
					<option value="audi">Grok (coming soon)</option>
					<option value="audi">llama (coming soon)</option>
				</select>
			</li>
			<li>
				<p>Parameters:</p>
				<button class="bg-white w-full border-black border">Edit</button>
			</li>
			<li>
				<p>Timestep:</p>
				<div class="flex">

					<button class="font-bold">{'<'}</button>
					<input class="w-8" placeholder="1" value="1"/>
					<button class="font-bold">{'>'}</button>
				</div>
			</li>
			<li>
				<a href="https://github.com">
				<img src="/git.png" alt="Github Logo" class="h-5">
				</a>
			</li>
		</ul>
	</nav>
</header>
