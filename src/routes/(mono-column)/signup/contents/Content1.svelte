<script>
  import Textfield from "@smui/textfield";
  import Button, { Label } from "@smui/button";
  export let emailAuth;
  let email = "";
  // export let slide;
  // 이메일 형식이 맞는지 확인하는 기능
  // 인증하기 버튼 클릭시 데이터를 요청하고 다음으로 넘어가는 기능
  // 이메일 체크
</script>

<div class="side-image flex-child_center">
  <h4 class="c_wt fnt-wg_600">이메일 인증</h4>
</div>
<div class="contents-wrap flex-child_center">
  <div class="flex-child_center" style="flex:0.22">
    <svg
      height="70px"
      width="70px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
    >
      <path
        id="Mail"
        d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
      h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
      L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
      L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
      C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
       M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
      c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
      l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"
        stroke="#6c76c5"
        stroke-width="2"
      />
    </svg>
  </div>
  <div style="flex:0.13">
    <span class="c_pri fnt-wg_600 fnt-sz_20 s-pd_20"
      >본인 학교 소속의 이메일을 넣어주세요</span
    >
  </div>
  <div style="flex:0.10"></div>
  <div class="flex-child_center" style="flex:0.13">
    <Textfield
      bind:value={email}
      label="이메일"
      class="shaped-outlined wd_360 hg_60"
      variant="outlined"
      style="margin-bottom: 30px;"
    />
  </div>
  <div style="flex:0.18">
    <Button
      color="primary"
      on:click={() => emailAuth(email)}
      class="wd_200 bd-rd_28 hg_60"
      style="margin-top: 1vh;"
      variant="raised"
    >
      <Label class="fnt-sz_20 fnt-wg_600">인증하기</Label>
    </Button>
  </div>
  <div class="flex-child_j-center_a-start f_row" style="flex:0.18; gap: 10px;">
    <span>이미 계정이 있으신가요? </span>
    <a href="/login">로그인</a>
  </div>
  <!-- <div style="flex:0.06"></div> -->
</div>

<style>
  .side-image {
    background-color: #6c76c5;
    width: 100%;
  }
  .contents-wrap {
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: column;
  }
  *
    :global(
      .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading
    ) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(
      .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing
    ) {
    border-radius: 0 28px 28px 0;
  }
</style>
