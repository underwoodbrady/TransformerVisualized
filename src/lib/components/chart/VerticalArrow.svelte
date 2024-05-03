<script lang="ts">
	export let showArrow: boolean = false;
</script>

<div class="w-[2px] h-full bg-neutral-700 mx-auto flex items-start justify-center">
	{#if showArrow}
		<div class="triangle-up"></div>
	{/if}
</div>

<style lang="postcss">
	.triangle-up {
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;

		border-bottom: 5px solid theme(colors.neutral.700);
	}
</style>
