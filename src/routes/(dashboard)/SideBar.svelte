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

<div class="flex-child_j-start_a-start f_column bd-1_black bg-c_pri blink_disable" style="height: 100vh; flex: 0.15;">
  <div class="hg_70 wd_100p flex-child_center" ><img src="/favicon.png" alt="이미지" style="width: 50px; height: 50px;"/></div>
  <div class="wd_100p">
    {#each createdDeparts as depart}
      <div class="hg_60 flex-child_j-start_a-center bd-1_black c_wt fnt-sz_18" style="padding-left: 30px;"><span>{depart}</span></div>
    {/each}
    <div class="hg_60 flex-child_center bd-1_black" on:click={() => {alert("과목을 추가하시겠습니까?")}} role="button">
      <img src="/plusicon.png" class="wd_30 hg_30" alt="이미지"/>
    </div>
  </div>
</div>
