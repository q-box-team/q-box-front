<script>
  let valueC = "관심있는 질문을 검색해 보세요";
</script>

<div>
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

<style>
  input {
    &:focus {
      outline: none;
    }
  }
</style>
