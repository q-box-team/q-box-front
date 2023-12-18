<script>
    import QuestionList from "../common/QuestionList.svelte";
    import Subject from "../common/Subject.svelte";
    import RadarGraph from "../common/RadarGraph.svelte";
    import TopPerformer from "../common/TopPerformer.svelte";
</script>

<div class="flex-child_j-start_a-start f_row" style="width: 100%;">
    <div class="flex-child_j-start_a-start f_column" style="flex: 0.75; height: calc(100vh - 60px);">
        <div class="flex-child_j-start_a-start wd_100p" style="flex: 0.25; margin-bottom: 20px"><Subject/></div>
        <div class="flex-child_center wd_100p" style="flex: 0.75"><QuestionList/></div>
    </div>
    <div class="flex-child_j-start_a-center f_column" style="flex: 0.24; height: calc(100vh - 60px); gap: 20px;">
        <div class="wd_100p" style="flex: 0.45;"><RadarGraph/></div>
        <div class="wd_100p" style="flex: 0.50;"><TopPerformer/></div>
    </div>
</div>