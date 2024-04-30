<script lang="ts">
	export let onHover: () => void = () => {};
</script>

<div
	class="relative bg-neutral-600/60 hover:border-white text-neutral-600 hover:text-white hover:shadow-inner rounded-md border-2 p-4 border-neutral-600 -mx-4 duration-150"
	role="button"
	tabindex="0"
	aria-label="Back"
	on:mouseenter={() => onHover()}
>
	<p class="absolute -right-3 top-1/2 -translate-y-1/2 text-xs font-semibold rotate-90">1 Block</p>
	<slot />
</div>
