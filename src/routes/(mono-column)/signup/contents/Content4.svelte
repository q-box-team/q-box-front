<script>
  import Textfield from "@smui/textfield";
  import Button, { Label } from "@smui/button";
  import Select, { Option } from "@smui/select";
  import Icon from "@smui/select/icon";
  const authFunction = (data) => {
    // sendSignUpData(data);
    console.log(`완료`);
  };
  export let step;
  $: console.log(step);
  let email;
  let password;
  let nickname;
  let school;
  let departId;
  let schools = ["한국공학대학교", "인하대학교", "중앙대학교", "아주대학교"];
  let departures = [
    "경영학과",
    "컴퓨터공학과",
    "소프트웨어공학과",
    "에너지전기공학과",
    "인공지능벤처과",
    "게임공학과",
    "경영학과",
    "컴퓨터공학과",
    "소프트웨어공학과",
    "에너지전기공학과",
    "인공지능벤처과",
    "게임공학과",
  ];

  // 전체 input이 제대로 작성되어있는지 예외처리 기능
  // 인증완료 버튼 클릭시 sendRequest
  const sendSignUpData = (data) => {
    const csrfToken =
      "vGWy1mnjnc-w-Qn8fQeBe5qY_A4Mi1yXYW-mVA_ipp2XzZs-jgbR5F2B_66dwTjMHyq1Tfmg0Tc7vji6VQvDMmnTn6-nrvkM";

    const requestData = {
      email,
      password,
      nickname,
      departId,
    };

    axios({
      method: "post",
      url: "signup",
      data: requestData,
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
    }).then(() => goto("/login", { replaceState: true }));
  };
</script>

<div class="side-image flex-child_center">
  <h4 class="c_wt fnt-wg_600">회원가입</h4>
</div>
<div class="contents-wrap flex-child_center">
  <div style="width: 100%; flex: 0.85; padding-top: 30px;">
    <div class="flex-child_center">
      <Textfield
        id="nickname"
        value=""
        label="닉네임"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <div class="flex-child_center">
      <Textfield
        id="password"
        value=""
        label="비밀번호"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <!-- <div class="flex-child_center">
      <Textfield
        id="school"
        value=""
        label="소속학교"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div> -->
    <!-- <div class="flex-child_center">
      <Textfield
        id="departId"
        value=""
        label="학과"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div> -->
    <div class="flex-child_center f_column">
      <Select
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        bind:value={departId}
        label="학과"
      >
        <Option value="학과를 선택해주세요">학과를 선택해주세요</Option>
        {#each departures as departure}
          <Option value={departure}>{departure}</Option>
        {/each}
        <svelte:fragment slot="helperText"
          >현재 다니는 학과를 입력해주세요</svelte:fragment
        >
      </Select>
    </div>
  </div>
  <div style="flex:0.15">
    <Button
      color="primary"
      on:click={authFunction}
      class="wd_200 bd-rd_28 hg_60"
      style="margin-top: 1vh;"
      variant="raised"
    >
      <Label class="fnt-sz_20 fnt-wg_600">인증완료</Label>
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
