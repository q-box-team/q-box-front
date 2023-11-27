<script>
  let valueC = "관심있는 질문을 검색해 보세요";
</script>

<div style="margin-bottom: 20px;">
  <div
    class="wd_500 bg-c_wt bd-rd_30 bd-0"
    style="
      box-shadow: 0px 8px 13px #9d9d9d, 0px 25px #f0f2f7;"
  >
    <input
      type="text"
      class="bg-c_wt wd_400 fnt-sz_20"
      bind:value={valueC}
      style="border: 0px; position: relative; top: 19px; right: -20px; color: #ccc;"
    />
    <button
      class="flex-child_center wd_40 hg_40 bg-c_pri bd-rd_50 bd-0"
      style="position: relative; right: -447px; top: -12px;"
      on:click={() => {
        alert("버튼이 클릭되었습니다.");
      }}
    >
      <div class="material-icons" style="color: white;">search</div>
    </button>
  </div>
</div>

<style>
  input {
    &:focus {
      outline: none;
    }
  }
</style>
