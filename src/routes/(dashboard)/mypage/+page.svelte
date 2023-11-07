<script>
    import axios from "axios";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    let email = "";
    let nickname = "";
    onMount(() => {
        axios.get("/members/me")
            .then(res => {
                email = res.data.email;
                nickname = res.data.nickname;
            })
            .catch(e => {
                alert("로그인 해주세요");
                goto("/login");
            });
    });
</script>

<h2>{email}</h2>
<h2>{nickname}</h2>