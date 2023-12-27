<script>
  import Textfield from "@smui/textfield";
  import Button, { Label } from "@smui/button";
  import Select, { Option } from "@smui/select";
  export let signInForm;
  export let email;

  let departures = [
    1,
    2,
  ];
  email = "";
  let userData = ["","","1"];
  $: console.log(userData);
  $: console.log(email);

</script>

<div class="side-image flex-child_center">
  <h4 class="c_wt fnt-wg_600">회원가입</h4>
</div>
<div class="contents-wrap flex-child_center">
  <div style="width: 100%; flex:0.835; padding-top: 30px;">
    <div class="flex-child_center">
      <Textfield
        id="email"
        disabled
        bind:value={email}
        label="이메일"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <div class="flex-child_center">
      <Textfield
        id="nickname"
        bind:value={userData[0]}
        label="닉네임"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <div class="flex-child_center">
      <Textfield
        id="password"
        bind:value={userData[1]}
        label="비밀번호"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <div class="flex-child_center f_column">
      <Select
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        bind:value={userData[2]}
        label="학과"
      >
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
      on:click={() => {signInForm([email, ...userData])}}
      class="wd_200 bd-rd_28 hg_60"
      style="margin-top: 1vh;"
      variant="raised"
    >
      <Label class="fnt-sz_20 fnt-wg_600">인증 완료</Label>
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
