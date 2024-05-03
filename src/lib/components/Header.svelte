<script>
	import ControlButtons from './ControlButtons.svelte';

	let isPlaying = false;
	let timestep = 0;
	let maxTimestep = 12;
	let minTimestep = 0;
</script>

<header class="border-b-2 border-black bg-neutral-300 px-4 py-1">
	<nav>
		<ul class="flex justify-between items-center">
			<li>
				<h3>Transformers Visualized</h3>
			</li>
			<li>
				<p>Model:</p>
				<select name="models" class="border-black border">
					<option value="bigram">Bigram LM</option>
					<option value="og">Original Transformer</option>
					<option value="transformer">Updated Transformer</option>
					<option value="mamba">Mamba</option>
				</select>
			</li>
			<li>
				<p>Timestep:</p>
				<div class="flex">
					<ControlButtons
						setTimestep={(t)=>{timestep=t}}
						increaseTimestep={() => {timestep<maxTimestep && timestep++}}
						decreaseTimestep={() => {timestep>minTimestep && timestep--}}
						playAnimation={() => {isPlaying = true}}
						stopAnimation={() => {isPlaying = false}}
						{timestep}
						{isPlaying}
					/>
				</div>
			</li>
			<li>
				<a href="https://github.com/underwoodbrady/TransformerVisualized" target="_blank">
					<img src="/git.png" alt="Github Logo" class="h-6" />
				</a>
			</li>
		</ul>
	</nav>
</header>
