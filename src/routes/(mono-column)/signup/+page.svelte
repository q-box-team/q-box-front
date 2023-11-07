<script>
    import Textfield from "@smui/textfield";
    import Button, {Label} from "@smui/button";
    import {goto} from '$app/navigation';
    import axios from "axios";

    var email = ""
    var nickname = ""

    const sendData = () => {
        const requestData = {
            email,
            nickname
        };

        axios({
            method: "post",
            url: "members",
            data: requestData
        }).then(() => goto("/signup/fin"));

    }
</script>
<div class="signup-container">
    <h4 style="text-align: center"> SIGN UP </h4>
    <Textfield
            bind:value={email}
            label="EMAIL"
            style="width: 240px;"/>
    <Textfield
            bind:value={nickname}
            label="NICKNAME"
            style="width: 240px;"/>
    <Button color="primary" on:click={sendData} style="width: 280px; margin-top: 1vh" variant="raised">
        <Label>NEXT</Label>
    </Button>
</div>

<style>
    .signup-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        flex-direction: column;
    }
</style>