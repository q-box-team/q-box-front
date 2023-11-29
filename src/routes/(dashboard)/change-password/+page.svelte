<script>
    import Textfield from "@smui/textfield";
    import Button, {Label} from "@smui/button";

    let beforePassword = "";
    let newPassword = "";
    let newPasswordConfirm = "";

    const sendData = () => {
        const requestData = {
            password: newPassword,
            passwordConfirm: newPasswordConfirm
        };
    }
</script>

<div class="form-container">
    <h4 style="text-align: center"> 비밀번호 변경 </h4>
    <Textfield
            bind:value={beforePassword}
            label="이전 비밀번호"
            style="width: 240px;"/>
    <Textfield
            bind:value={newPassword}
            label="새로운 비밀번호"
            style="width: 240px;"/>
    <Textfield
            bind:value={newPasswordConfirm}
            label="비밀번호 확인"
            style="width: 240px;"/>
    <Button color="primary" on:click={sendData} style="width: 280px; margin-top: 1vh" variant="raised">
        <Label>CHANGE PASSWORD</Label>
    </Button>
</div>

<style>
    .form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        flex-direction: column;
    }
</style>