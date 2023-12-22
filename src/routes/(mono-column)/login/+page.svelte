<script>
    import '../../../global.css';
    // import Checkbox from "@smui/checkbox";
    // import Textfield from "@smui/textfield";
    // import Button, {Label} from "@smui/button";
    import Card from './Card.svelte';
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

    const gotoSignUp = () => {
        goto("/signup");
    }
    const gotoLogin = () => {
        goto("/main");
    };
</script>

<Card email={email} password={password} gotoLogin={gotoLogin} gotoSignUp={gotoSignUp}/>
