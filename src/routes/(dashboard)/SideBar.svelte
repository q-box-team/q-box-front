<script>
  import "../../global.css";
  let createdDeparts = [
    "웹서비스프로그래밍",
    "자바",
    "프로그래밍",
    "인간과현대사회",
    "알고리즘",
  ];
  let ifNotCreated = [];
</script>

<div class="flex-child_j-start_a-start f_column bg-c_pri blink_disable" style="height: 100vh; flex: 0.15;">
  <div class="hg_70 wd_100p flex-child_center" ><img src="/favicon.png" alt="이미지" style="width: 50px; height: 50px;"/></div>
  <div class="wd_100p">
    {#each createdDeparts as depart}
      <div class="subject hg_65 flex-child_j-start_a-center c_wt fnt-sz_20" style="padding-left: 30px;"><span><b>{depart}</b></span></div>
    {/each}
    <div class="subject-add_button hg_65 flex-child_center" role="button">
      <div class="wd_40 hg_40 bd-rd_50 bg-c_sf flex-child_center">
        <div class="material-icons wd_30 hg_30" style="position: relative; top: 3px; left: 3px; color: #6A76Cb;">add</div>
      </div>
    </div>
  </div>
</div>

<style>
  .subject:hover {
    background-color: #f0f2f7;
    color: #6A76CB;
    cursor: pointer;
  }
  .subject-add_button:hover {
    background-color: #f0f2f7;
  }
</style>