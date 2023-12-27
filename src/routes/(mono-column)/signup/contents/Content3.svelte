<script>
  export let serviceAgree;
  import Button, { Label } from "@smui/button";
  // scroll이 바닥에 닿으면, 동의할 수 있는 기능
</script>

<div class="side-image flex-child_center">
  <h4 class="c_wt fnt-wg_600">Q-box 서비스 이용 동의</h4>
</div>
<div class="contents-wrap flex-child_j-start_a-center">
  <div
    class="flex-child_j-start_a-center f_column scroll"
    style="display: relative; flex:0.835; overflow-y:auto;"
  >
    <div
      class="c_pri fnt-wg_600 fnt-sz_20 s-pd_20 content"
      style="text-align: left; position: relative; height: 420px; padding-top: 30px; margin-bottom: 100px;"
    >
      <span>Q-Box</span>
      <br />
      <span>서비스 개인 정보 보호 정책 유효 날짜:</span>
      <span>2023/11/11 - 2024/11/11</span>
      <br />
      <span># 개요</span>
      <br />
      <span
        >Q-Box 서비스(이하 "Q-Box")는 대학 강의 질의 응답 플렛폼으로, 사용자의
        개인 정보를 보호하고 존중하기 위해 노력합니다. 이 개인 정보 보호 정책은
        Q-Box가 어떤 정보를 수집하고, 그 정보를 어떻게 사용하며, 사용자의 개인
        정보 보호를 어떻게 보장하는지에 대한 정보를 포함하고 있습니다.</span
      >
      <br />
      <span># 개인 정보 보호 정책 </span>
      <br />
      <span>## 수집된 정보의 목적 </span>
      <br />
      <span>저희는 사용자의 개인 정보를 다음 목적을 위해 수집합니다: </span>
      <br />
      <span> - 서비스 제공 및 관리 </span>
      <span> - 계정 등록 및 로그인 </span>
      <span> - 사용자 지원 및 응답 </span>
      <span> - 제품 및 서비스의 개선 </span>
      <span> - 마케팅 및 광고 활동 </span>
      <br />
      <span>## 수집되는 정보의 범위 </span>
      <br />
      <span
        >수집되는 개인 정보의 주요 범주에는 다음이 포함될 수 있습니다:
      </span>
      <br />
      <span>- 사용자의 식별 정보 (예: 이름, 이메일 주소) </span>
      <span>- 계정 정보 (예: 사용자명, 비밀번호) </span>
      <span>- 서비스 이용 기록 및 행동 </span>
      <span>- 디바이스 및 브라우저 정보 </span>
      <span>- 위치 정보 (선택적으로 제공된 경우) </span>
      <br />
      <span
        >민감한 정보는 수집되지 않으며, 수집된 정보는 당사의 정책에 따라
        안전하게 보호됩니다.
      </span>
      <br />
      <span>## 정보의 보관 기간 </span>
      <br />
      <span
        >개인 정보는 수집된 날로부터 필요한 기간 동안 보관됩니다. 보존 기간이
        종료되면 해당 정보는 안전하게 파기됩니다.
      </span>
      <br />
      <span>## 정보의 보안 </span>
      <br />
      <span
        >우리는 적절한 기술적 및 조직적 보안 조치를 취하여 사용자의 개인 정보를
        보호합니다. 이에는 암호화, 접근 제어, 보안 소프트웨어 등이 포함됩니다.
      </span>
      <br />
      <span>## 정보의 공유 </span>
      <br />
      <span
        >개인 정보는 다음과 같은 상황에서만 제3자와 공유될 수 있습니다:
      </span>
      <br />
      <span>- 사용자의 동의를 받은 경우 </span>
      <span>- 법적 요청이 있는 경우 </span>
      <span>- 서비스 제공을 위해 필요한 경우 </span>
      <span>## 쿠키 및 추적 기술 </span>
      <br />
      <span
        >우리의 웹사이트에서는 쿠키 및 유사한 추적 기술을 사용할 수 있습니다.
        이를 통해 사용자 경험을 개선하고 트래픽을 분석합니다. 사용자는 브라우저
        설정을 통해 쿠키 사용을 거부할 수 있습니다.
      </span>
      <br/>
      <span>## 사용자의 권리 </span>
      <br />
      <span>사용자는 다음 권리를 갖습니다: </span>
      <br />
      <span>- 자신의 개인 정보에 접근하고 수정하기 </span>
      <span>- 개인 정보의 삭제를 요청하기 </span>
      <span>- 개인 정보 처리에 대한 동의 철회하기 </span>
      <br />
      <span>자세한 내용은 [개인 정보 보호 정책](#)을 참고하세요. </span>
      <br />
      <span
        >본 개인 정보 보호 정책은 2023/12/27(12:12:00)에 마지막으로 업데이트되었습니다.
      </span>
      <br />
    </div>
  </div>
</div>
<div style="flex:0.15; position: relative; top: -85px">
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

<style>
  .content > span {
    display: block;
  }

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
  .scroll::-webkit-scrollbar {
    width: 10px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: #6c76c5;
    border-radius: 10px;
  }
  .scroll::-webkit-scrollbar-track {
    background-color: #f0f2f7;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
</style>
