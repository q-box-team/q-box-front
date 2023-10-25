<script lang="ts">
    import Button, {Label} from "@smui/button";
    import {goto} from "$app/navigation";
</script>

<h3 style="text-align: center">Departs</h3>

<div class="card-display">
    <Button color="primary"
            on:click={() => goto("/login")}
            style="width: 200px; height: 150px;"
            variant="raised">
        <Label>경영학부</Label>
    </Button>
    <Button color="primary"
            on:click={() => goto("/login")}
            style="width: 200px; height: 150px;"
            variant="raised">
        <Label>경영학부</Label>
    </Button>
    <Button color="primary"
            on:click={() => goto("/login")}
            style="width: 200px; height: 150px;"
            variant="raised">
        <Label>경영학부</Label>
    </Button>

</div>


<style>
    .card-display {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 70vh;
        padding-left: 100px;
        padding-right: 100px;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-around;
    }

</style>