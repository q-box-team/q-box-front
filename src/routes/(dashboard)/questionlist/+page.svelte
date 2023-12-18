<script>
    import { onMount } from "svelte"
    import Vditor from "vditor"
    onMount(() => {
        const vditor = new Vditor("vditor-container", {
            theme: "classic",
            minHeight: 630,
        })
    })
</script>
    
<div id="vditor-container" />

<style>
</style>