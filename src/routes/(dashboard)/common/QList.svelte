<script>
    const questions = [
        {
            img: "https://avatars.githubusercontent.com/u/15474343?v=4",
            nickname: "물결의 무인",
            detail: "대용 교수님이 무슨 말을 하는지 이해를 못하겠어요",
            thumbUp: 3,
        },
        {
            img: "https://i.stack.imgur.com/frlIf.png",
            nickname: "감성의 나그네",
            detail: "CORS 216번 어떻게 푸나요ㅠㅠㅠ 알려주세요",
            thumbUp: 2,
        },
        {
            img: "https://avatars.githubusercontent.com/u/15474343?v=4",
            nickname: "별빛의 여인",
            detail: "13942번 문제에서 자꾸 StackSizeExceed가 나와요",
            thumbUp: 1,
        },
        {
            img: "https://i.stack.imgur.com/frlIf.png",
            nickname: "감성의 나그네",
            detail: "CORS 216번 어떻게 푸나요ㅠㅠㅠ 알려주세요",
            thumbUp: 2,
        },
        {
            img: "https://avatars.githubusercontent.com/u/15474343?v=4",
            nickname: "별빛의 여인",
            detail: "13942번 문제에서 자꾸 StackSizeExceed가 나와요",
            thumbUp: 1,
        },
        {
            img: "https://i.stack.imgur.com/frlIf.png",
            nickname: "감성의 나그네",
            detail: "CORS 216번 어떻게 푸나요ㅠㅠㅠ 알려주세요",
            thumbUp: 2,
        },
        {
            img: "https://avatars.githubusercontent.com/u/15474343?v=4",
            nickname: "별빛의 여인",
            detail: "13942번 문제에서 자꾸 StackSizeExceed가 나와요",
            thumbUp: 1,
        },
    ];
</script>

<div class="flex-child_center f_column" style="width: calc(100% - 120px); margin: 0px 60px;">
    <div class="flex-child_j-between_a-center" style="flex: 0.2; width: 100%; margin-bottom: 20px;">
        <div class="fnt-sz_25 blink_disable" >Question</div>
        <a class="blink_disable" style="color: black; text-decoration: underline; cursor: pointer;">더보기</a>
    </div>
    <div class="flex-child_j-start_a-start f_column wd_100p" style="flex: 0.8; gap: 5px;">
        {#each questions as question}
            <div class="flex-child_j-start_a-center f_row wd_100p question" style="gap: 40px; height: 65px; padding: 0px 10px;">
                <img src={question.img} class="wd_50 hg_50 bd-rd_50" style="flex: 0.05;"/>
                <div style="flex: 0.15">{question.nickname}</div>
                <div style="flex: 0.75">{question.detail}</div>
                <div class="flex-child_center" style="flex: 0.05; gap: 10px; margin-right: 10px;">
                    <div class="material-icons" style="color: #fdc83a;">thumb_up</div>
                    {question.thumbUp}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .question:hover {
        background-color: #6A76CB;
        box-shadow: 0px 8px 13px #9d9d9d, 0px 25px #f0f2f7;
        border-radius: 50px;
        color: white;
        cursor: pointer;
    }
    .question {
        caret-color: transparent;
    }
</style>