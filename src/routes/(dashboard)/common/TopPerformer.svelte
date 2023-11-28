<script>
    import IconButton from '@smui/icon-button';
  const questions = [
    {
      img: "https://avatars.githubusercontent.com/u/15474343?v=4",
      nickname: "물결의 무인",
      userDetail: "aaa@kpu.ac.kr",
    },
    {
      img: "https://i.stack.imgur.com/frlIf.png",
      nickname: "감성의 나그네",
      userDetail: "bbb@kpu.ac.kr",
    },
    {
      img: "https://avatars.githubusercontent.com/u/15474343?v=4",
      nickname: "별빛의 여인",
      userDetail: "ccc@kpu.ac.kr",
    },
    {
      img: "https://i.stack.imgur.com/frlIf.png",
      nickname: "감성의 나그네",
      userDetail: "ddd@kpu.ac.kr",
    },
  ];
</script>

<div
  class="bg-c_wt wd_100p hg_100p blink_disable bd-rd_35"
  style="box-shadow: 0px 8px 13px #9d9d9d, 0px 25px #f0f2f7;"
>
  <div class="fnt-sz_30" style="padding-top: 30px; padding-left: 30px; padding-bottom: 40px;"><b>TopPerformer</b></div>
  <div class="flex-child_j-start_a-start f_column" style="gap: 30px; padding-left: 30px; padding-right: 30px;">
    {#each questions as question}
      <div class="flex-child_j-between_a-center f_row wd_100p">
        <img src={question.img} class="wd_50 hg_50 bd-rd_50" alt="" />
        <div><b>{question.nickname}</b></div>
        <div class="wd_55 bg-c_pri" style="border-radius: 50px;">
            <IconButton style="width: 55px; height: 55px;">
                <div class="material-icons" style="color: white;">send</div>
            </IconButton>
          </div>
      </div>
    {/each}
  </div>
</div>
