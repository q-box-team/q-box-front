<script>
  import Textfield from "@smui/textfield";
  import Button, { Label } from "@smui/button";
  export let value;
  export let data;
  $: console.log(data);
  export let sendData;
</script>

<div
  style="margin: 20px 20px;"
  class="question-container bd-rd_25 ov-fl_hidden bg-c_wt hg_950"
>
  <div
    class="flex-child_j-between_a-start f_row"
    style="width: calc(100% + 420px)"
  >
    <div class="hg_100 flex-child_j-start_a-end" style="flex: 1;">
      <Textfield
        inputProps={{ style: { fontSize: "100px" } }}
        style="width: 100%; padding-left: 10px; padding-right: 250px;"
        bind:value />
    </div>
    <div
      style="position: relative; right: 450px; top: 12.5px; display: flex; gap: 20px;"
    >
      <Button
        color="primary"
        on:click={() => {
          console.log("되돌아가기 event");
        }}
        class="wd_200 bd-rd_28 hg_50"
        style="margin-top: 1vh;"
        variant="outlined">
        <Label class="fnt-sz_20 fnt-wg_600">돌아가기</Label>
      </Button>
      <Button
        color="primary"
        on:click={sendData}
        class="wd_200 bd-rd_28 hg_50"
        style="margin-top: 1vh;"
        variant="raised"
      >
        <Label class="fnt-sz_20 fnt-wg_600">질문 올리기</Label>
      </Button>
    </div>
  </div>
  <div id="vditor-container" />
</div>

<style>
  .question-container {
    box-shadow:
      0px 8px 13px #9d9d9d,
      0px 25px #f0f2f7;
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
