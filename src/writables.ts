import { writable } from "svelte/store";
export let step = writable(0);

type focusType = {
    name: string,
    linesHighlighted: number[]
}

export let focus = writable<focusType>({
    name: 'transformer',
    linesHighlighted: []
});