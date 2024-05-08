<script lang="ts">
	export let showArrow: boolean = false;
</script>

<div class="flex flex-col h-full w-full">
	<div class="w-8 h-[2px] border-neutral-700 border-b-[2px] border-dashed flex items-center justify-end">
		{#if showArrow}
			<div class="triangle-right"></div>
		{/if}
	</div>
	<div class="w-[2px] border-r-[2px] border-neutral-700 -r border-dashed h-full flex items-start justify-center"></div>
	<div class="w-full h-[2px] border-neutral-700 border-b-[2px] border-dashed"></div>
</div>

<style lang="postcss">
	.triangle-right {
		width: 0;
		height: 0;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;

		border-left: 5px solid theme(colors.neutral.700);
	}
</style>
