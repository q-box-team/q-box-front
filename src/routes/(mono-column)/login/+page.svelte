<script>
    import Checkbox from "@smui/checkbox";
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

<div class="login-container-wrap">
    <div class="login-container">
        <div class="side-image">
            <h2 style="color: white; font-weight:600">Q-box</h2>
        </div>
        <div class="login-contents">
            <div class="title">
                <h4 style="text-align: center; color: #6a76cb; font-weight: 600"> LOGIN </h4>
            </div>
            <Textfield
                    bind:value={email}
                    label="이메일"
                    class="shaped-outlined"
                    variant="outlined"
                    style="width: 360px; margin-bottom: 30px; height: 60px;"/>
            <Textfield
                    bind:value={password}
                    label="비밀번호"
                    class="shaped-outlined"
                    variant="outlined"
                    style="width: 360px; height: 60px;"/>
            <div class="option">
                <div style="display: flex; flex-direction: row; justify-contents: center; align-items: center">
                    <Checkbox/>
                    <span style="padding-top: 5px;">로그인 유지</span>
                </div>
                <a href="#" style="color: #ff9e88; font-weight: 600; padding-top: 5px;">비밀번호를 잊으셨나요?</a>
            </div>
            <Button color="primary" on:click={sendData} style="width: 360px; margin-top: 1vh; border-radius: 28px; height: 60px;" variant="raised">
                <Label style="font-size: 20px; font-weight: 600;">로그인</Label>
            </Button>
            <div style="border-radius: 28px; overflow: hidden; width: 360px;  margin-top: 2vh; height:60.5px ">
                <Button class="button-shaped-round" color="primary" on:click={sendData} style="width: 360px; height: 60px; border-radius: 28px" variant="outlined">
                    <Label style="font-size: 20px; font-weight: 600;">회원가입</Label>
                </Button>
            </div>
        </div>
    </div>
</div>

<style>
    .login-container-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
    .login-container {
        background-color: #fff;
        border-radius: 35px;
        display: flex;
        flex-direction: row;
        width: 1100px;
        height: 700px;
        box-shadow:  0px 15px 30px #929292,
             0px -15px 30px #ffffff;
    }
    .side-image {
        width: 600px;
        height: 100%;
        background-color: #6a76cb;
        border-top-left-radius: 35px;
        border-bottom-left-radius: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-contents {
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .title {
        width: 100%;
        margin-left:170px;
        margin-bottom: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    /* node_module/svelte-material-ui/bare.css 에서 .mdc-floating-label{color:#6a76cb} 수정 필요 */
    *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
    *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
    }

  .option {
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

</style>
