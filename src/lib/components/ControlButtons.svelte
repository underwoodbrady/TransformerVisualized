<script lang="ts">
	import { beforeUpdate } from "svelte";

	export let increaseTimestep: () => void;
	export let decreaseTimestep: () => void;
	export let playAnimation: () => void;
	export let pauseAnimation: () => void;
	export let stopAnimation: () => void;
	export let isPlaying: boolean;
	export let timestep: number = 0;
    export let minTimestep:number;
    export let maxTimestep:number;


    beforeUpdate(()=>{
        console.log(timestep, minTimestep, maxTimestep)
    })
</script>

<button
	class="bg-neutral-100 border-black border flex items-center justify-center px-2"
	on:click={decreaseTimestep}
    disabled={timestep==minTimestep}
>
	<img src="/arrow-left.svg" alt="Left Arrow" class="h-3" />
</button>
<input class="w-8 border-black border text-center" value={timestep} type="number" min={minTimestep} max={maxTimestep} maxlength="2" disabled />
<button
	class="bg-neutral-100 border-black border flex items-center justify-center px-2"
	on:click={increaseTimestep}
    disabled={timestep==maxTimestep}
>
	<img src="/arrow-right.svg" alt="Right Arrow" class="h-3" />
</button>

<button
	class={'bg-green-100 border-black border flex items-center justify-center px-2 hover:bg-green-200 hover:shadow-inner' +
		(isPlaying ? ' bg-green-200 shadow-inner' : '')}
	on:click={isPlaying ? pauseAnimation : playAnimation}
>
	<img src={isPlaying ? '/pause.svg' : '/play.svg'} alt="Play Animation" class="h-3" />
</button>
<button
	class="bg-red-100 border-black border flex items-center justify-center px-2 hover:bg-red-200 hover:shadow-inner"
	on:click={stopAnimation}
>
	<img src="/stop.svg" alt="Stop Animation" class="h-3" />
</button>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
