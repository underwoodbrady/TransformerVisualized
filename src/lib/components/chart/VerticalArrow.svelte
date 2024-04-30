<script lang="ts">
	export let showArrow: boolean = false;
</script>

<div class="w-[2px] h-full bg-neutral-600 mx-auto flex items-start justify-center">
	{#if showArrow}
		<div class="triangle-up"></div>
	{/if}
</div>

<style>
	.triangle-up {
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;

		border-bottom: 5px solid rgb(82 82 82);
	}
</style>
