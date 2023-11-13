<script>
    import Button, { Label } from "@smui/button";
    export let step;
    export let slide;
    const serviceAgree = () => {
      console.log(`인증하기`);
        slide("next");
    };
    $:console.log(step);
  </script>


<div class="side-image flex-child_center">
    <h4 class="c_wt fnt-wg_600">Q-box 서비스 이용 동의</h4>
  </div>
  <div class="contents-wrap flex-child_center">
    <div class="flex-child_center" style="flex:0.13">
      <span class="c_pri fnt-wg_600 fnt-sz_20 s-pd_20"
      style="text-align: center;"
        >Q-Box 서비스 개인 정보 보호 정책

        유효 날짜: 2023.11.11~
        
        1. 개요
        
        Q-Box 서비스(이하  "Q-Box")는 대학 강의 질의 응답 플렛폼으로, 사용자의 개인 정보를 보호하고 존중하기 위해 노력합니다. 이 개인 정보 보호 정책은 Q-Box가 어떤 정보를 수집하고, 그 정보를 어떻게 사용하며, 사용자의 개인 정보 보호를 어떻게 보장하는지에 대한 정보를 포함하고 있습니다.
        
        </span
      >
    </div>
    <div style="flex:0.10"></div>
    <div style="flex:0.18">
      <Button
        color="primary"
        on:click={serviceAgree}
        class="wd_200 bd-rd_28 hg_60"
        style="margin-top: 1vh;"
        variant="raised"
      >
        <Label class="fnt-sz_20 fnt-wg_600">동의합니다.</Label>
      </Button>
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
  