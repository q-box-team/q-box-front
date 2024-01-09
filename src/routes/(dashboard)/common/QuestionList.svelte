<script>
  import SearchBar from "./SearchBar.svelte";
  import QList from "./QList.svelte";
</script>

<div class="flex-child_j-start_a-center f_column wd_100p hg_100p">
  <div style="margin-bottom: 20px;">
    <div
      class="wd_500 bg-c_wt bd-rd_30 bd-0"
      style="
        box-shadow: 0px 8px 13px #9d9d9d, 0px 25px #f0f2f7;"
    >
      <SearchBar />
    </div>
  </div>
  <QList />
</div>
