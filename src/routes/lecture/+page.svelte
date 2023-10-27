<script>
    import Button, {Label} from "@smui/button";
    import {goto} from "$app/navigation";
</script>

<h3 style="text-align: center">Lectures</h3>

<div class="card-display">
    <Button color="primary"
            on:click={() => goto("/login")}
            style="width: 70%; height: 40px;
                        margin: 10px;"
            variant="raised">
        <Label>웹프로그래밍기초</Label>
    </Button>
    <Button color="primary"
            on:click={() => goto("/login")}
            style="width: 70%; height: 40px;
                     margin: 10px;"
            variant="raised">
        <Label>웹프로그래밍응용</Label>
    </Button>
    <Button color="primary"
            on:click={() => goto("/login")}
            style="width: 70%; height: 40px;
                   margin: 10px;"
            variant="raised">
        <Label>프로그래밍과데이터분석</Label>
    </Button>
</div>


<style>
    .card-display {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
    }
</style>