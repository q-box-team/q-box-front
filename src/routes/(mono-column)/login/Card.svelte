<script>
  import Checkbox from "@smui/checkbox";
  import Textfield from "@smui/textfield";
  import Button, {Label} from "@smui/button";
  export let email;
  export let password;
  export let gotoLogin;
  export let gotoSignUp;
</script>

<div class="page-container-wrap flex-child_center">
  <div class="login-container">
      <div class="side-image flex-child_center">
          <h2 class="c_wt fnt-wg_600">Q-box</h2>
      </div>
      <div class="login-contents flex-child_center">
          <div class="title">
              <h4 class="tx-a_center c_pri fnt-wg_600"> LOGIN </h4>
          </div>
          <Textfield
                  bind:value={email}
                  label="이메일"
                  class="shaped-outlined wd_360 hg_60"
                  variant="outlined"
                  style="margin-bottom: 30px;"/>
          <Textfield
                  bind:value={password}
                  label="비밀번호"
                  class="shaped-outlined wd_360 hg_60"
                  variant="outlined"/>
          <div class="option flex-child_j-between_a-center wd_350">
              <div class="flex-child_center"
              style="flex-direction: row; ">
                  <Checkbox/>
                  <span>로그인 유지</span>
              </div>
              <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
          <Button color="primary" on:click={gotoLogin}
          class="wd_360 bd-rd_28 hg_60"
          style="margin-top: 1vh;" variant="raised">
              <Label class="fnt-sz_20 fnt-wg_600">로그인</Label>
          </Button>
          <div class="bd-rd_28 wd_360 ov-fl_hidden" style="margin-top: 2vh; height:60.5px ">
              <Button color="primary" on:click={gotoSignUp}
              class="wd_360 hg_60 bd-rd_28"
              variant="outlined">
                  <Label
                  class="fnt-sz_20 fnt-wg_600"
                  >회원가입</Label>
              </Button>
          </div>
      </div>
  </div>
</div>

<style>
  .login-container {
      background-color: #fff;
      border-radius: 35px;
      display: flex;
      flex-direction: row;
      width: 1100px;
      height: 700px;
      box-shadow:  0px 15px 30px #929292,
           0px -15px 30px #ffffff;
      overflow: hidden;
  }
  .side-image {
      width: 600px;
      height: 100%;
      background-color: #6a76cb;

  }
  .login-contents {
      width: 500px;
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
  margin-bottom: 30px;
}

</style>
