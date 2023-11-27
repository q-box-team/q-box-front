<script>
    import QuestionList from "../common/QuestionList.svelte";
    import Subject from "../common/Subject.svelte";
    import Calendar from "../common/Calendar.svelte";
    import TopPerformer from "../common/TopPerformer.svelte";
</script>

<div class="flex-child_j-start_a-start f_row" style="width: 100%;">
    <div class="flex-child_j-start_a-start f_column" style="flex: 0.75; height: calc(100vh - 60px);">
        <div class="flex-child_center wd_100p" style="flex: 0.25"><Subject/></div>
        <div class="flex-child_center wd_100p" style="flex: 0.75"><QuestionList/></div>
    </div>
    <div class="flex-child_j-start_a-center f_column" style="flex: 0.24; height: calc(100vh - 60px);">
        <div class="wd_100p bd-1_black" style="flex: 0.5;"><Calendar/></div>
        <div class="wd_100p bd-1_black" style="flex: 0.5;"><TopPerformer/></div>
    </div>
</div>