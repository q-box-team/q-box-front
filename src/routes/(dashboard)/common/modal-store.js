import { writable } from 'svelte/store';

const isModal = writable(false);

export default isModal;