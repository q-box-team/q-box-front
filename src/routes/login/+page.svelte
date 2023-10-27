<script>
    import Textfield from "@smui/textfield";
    import Button, {Label} from "@smui/button";
    import axios from "axios";
    import {goto} from "$app/navigation";

    let email = "";
    let password = "";

    const sendData = () => {
        const requestData = {
            email,
            password
        };

        axios({
            method: "post",
            url: "login",
            data: requestData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(() => goto("/", {replaceState: true}));
    }
</script>


<div class="login-container">
    <h4 style="text-align: center"> LOGIN </h4>
    <Textfield
            bind:value={email}
            label="EMAIL"
            style="width: 240px;"/>
    <Textfield
            bind:value={password}
            label="PASSWORD"
            style="width: 240px;"/>
    <Button color="primary" on:click={sendData} style="width: 280px; margin-top: 1vh" variant="raised">
        <Label>LOGIN</Label>
    </Button>
</div>

<style>
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        flex-direction: column;
    }
</style>