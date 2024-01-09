<script>
  export let questions;
  import SearchBar from "../common/SearchBar.svelte";
</script>

<div
  class="flex-child_center f_column"
  style="width: calc(100% - 120px); margin: 0px 60px;"
>
  <div
    class="flex-child_j-between_a-center f_row"
    style="flex: 0.2; width: 100%; margin-bottom: 20px; margin-top: 20px;"
  >
    <div class="fnt-sz_25 blink_disable"><b>QuestionList</b></div>
    <div
      class="wd_500 bg-c_wt bd-rd_30 bd-0"
      style="
        box-shadow: 0px 8px 13px #9d9d9d, 0px 25px #f0f2f7;"
    >
      <SearchBar />
    </div>
  </div>
  <div
    class="flex-child_j-start_a-start f_column wd_100p"
    style="flex: 0.8; gap: 5px;"
  >
    {#each questions as question}
      <div
        class="flex-child_j-start_a-center f_row wd_100p question hg_65"
        style="gap: 40px; padding: 0px 10px;"
      >
        <img
          src={question.img}
          alt=""
          class="wd_50 hg_50 bd-rd_50"
          style="flex: 0.03;"
        />
        <div style="flex: 0.15"><b>{question.nickname}</b></div>
        <div style="flex: 0.75">{question.detail}</div>
        <div
          class="flex-child_center"
          style="flex: 0.07; gap: 10px; margin-right: 10px;"
        >
          <div class="material-icons" style="color: #fdc83a;">thumb_up</div>
          {question.thumbUp}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .question:hover {
    background-color: #6a76cb;
    box-shadow:
      0px 8px 13px #9d9d9d,
      0px 25px #f0f2f7;
    border-radius: 50px;
    color: white;
    cursor: pointer;
  }
  .question {
    caret-color: transparent;
  }
</style>
