<script>
  import { goto } from "$app/navigation";
  import Button, { Label } from "@smui/button";
  import IconButton, { Icon } from '@smui/icon-button';
  import { mdiAccountCircle } from '@mdi/js';
</script>

<div
  class="hg_70 flex-child_j-between_a-start bg-c_sf"
  style="width: 100%; padding-left: 20px;"
>
  <div style="flex: 0.735">
    <Button
      color="surface"
      class="wd_200 bd-rd_28 hg_50"
      style="margin-top: 1vh;"
      variant="raised"
    >
      <Label class="fnt-sz_20 fnt-wg_600">컴퓨터전공</Label>
    </Button>
  </div>
  <div class="flex-child_j-between_a-center" style="flex: 0.265">
    <div>
        <Button
          color="surface"
          class="wd_200 bd-rd_28 hg_50"
          style="margin-top: 1vh;"
          variant="raised"
          on:click={() => { goto("/question"); }}
        >
          <Label class="fnt-sz_20 fnt-wg_600">질문하기</Label>
        </Button>
    </div>
    <div>
      <div class="wd_55 bg-c_pri" style="margin-right: 40px; margin-top: 6px; border-radius: 20px;">
        <IconButton style="width: 55px; height: 55px;">
            <Icon tag="svg" viewBox="0 0 23 24">
                <path fill="#f0f2f7" d={mdiAccountCircle}/>
            </Icon>
        </IconButton>
      </div>
    </div>
  </div>
</div>

<style>
  *
    :global(
      .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading
    ) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(
      .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing
    ) {
    border-radius: 0 28px 28px 0;
  }
</style>
