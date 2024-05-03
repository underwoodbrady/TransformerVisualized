<script>
	import VerticalArrow from "./VerticalArrow.svelte";
    export let showArrow;

</script>

<div class="flex justify-between h-full">
    <VerticalArrow {showArrow}/>
    <VerticalArrow {showArrow}/>
    <VerticalArrow {showArrow}/>
</div>
<div class=" w-[67.25%] h-[2px] bg-neutral-700 mx-auto"></div>

