<script xmlns="http://www.w3.org/1999/html">
    import Button, {Label} from "@smui/button";
    import {goto} from "$app/navigation";
</script>

<div class="main-wrap">
    <h4>WELCOME!</h4>
    <sub>
        회원가입을 완료했어요!
    </sub>
    <sub>
        <strong>임시 비밀번호</strong>는 가입한 <strong>EMAIL</strong>로 전송했어요!
    </sub>

    <Button color="primary" on:click={() => goto("/login")} style="margin-top: 10px;" variant="raised">
        <Label>Login 페이지로</Label>
    </Button>
</div>

<style>
    .main-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        flex-direction: column;
    }
</style>