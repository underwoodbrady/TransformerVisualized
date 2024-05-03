<script lang="ts">
    export let setTimestep:(t:number)=>void;
    export let increaseTimestep:()=>void;
    export let decreaseTimestep:()=>void;
    export let playAnimation:()=>void;
    export let stopAnimation:()=>void;
    export let isPlaying:boolean;
    export let timestep:number = 0;
</script>

<button class="bg-neutral-100 border-black border flex items-center justify-center px-2" on:click={decreaseTimestep}>
    <img src="/arrow-left.svg" alt="Left Arrow" class="h-3"/>
</button>
<input class="w-8 border-black border text-center" value={timestep} type="number"/>
<button class="bg-neutral-100 border-black border flex items-center justify-center px-2" on:click={increaseTimestep}>
    <img src="/arrow-right.svg" alt="Right Arrow" class="h-3"/>
</button>
<button class={"bg-green-100 border-black border flex items-center justify-center px-2 hover:bg-green-200 hover:shadow-inner" + (isPlaying ? " bg-green-200 shadow-inner" : "")  } on:click={playAnimation}>
    <img src="/play.svg" alt="Play Animation" class="h-3"/>
</button>
<button class="bg-red-100 border-black border flex items-center justify-center px-2 hover:bg-red-200 hover:shadow-inner" on:click={stopAnimation}>
    <img src="/stop.svg" alt="Stop Animation" class="h-3"/>
</button>