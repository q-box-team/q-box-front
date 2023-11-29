<script>
  import Button, { Label } from "@smui/button";
  import "../global.css";
</script>

<div
  class="flex-child_center f_column blink_disable"
  style="margin-top: 200px;"
>
  <h1>Q-box</h1>
  <span>현재 Q-box는 준비중입니다. 잠시만 기다려주세요</span>
  <div class="flex-child_center hg_200" style="gap: 100px;">
    <Button href="/main" variant="raised" class="wd_200 hg_60">
      <Label>main</Label>
    </Button>
    <Button href="/login" variant="outlined" class="wd_200 hg_60">
      <Label>login</Label>
    </Button>
  </div>
</div>
