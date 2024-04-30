<script lang="ts">
	export let title: string;
    export let color:string = '#d8b4fe';
	export let onHover:()=>void = ()=>{};
</script>

<div
	class="group hover:border-white hover:shadow-inner rounded-md border-neutral-600 border-2 p-2 duration-100 cursor-pointer flex justify-center select-none"
    style={`background-color:${color}`}
	role="button" 
	tabindex="0"
	aria-label="Back"
	on:mouseenter={()=>onHover()}
>
	<p
		class="group-hover:text-white text-center font-semibold duration-100 text-neutral-600 max-w-24"
	>
		{title}
	</p>
</div>
