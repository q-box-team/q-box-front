<script>
    import Textfield from "@smui/textfield";
    import Button, { Label } from "@smui/button";
    const authFunction = () => {
      console.log(`완료`);
    };
    export let step;
    $:console.log(step);
  </script>


<div class="side-image flex-child_center">
    <h4 class="c_wt fnt-wg_600">Sign Up</h4>
  </div>
  <div class="contents-wrap flex-child_center">



    <div class="flex-child_center" style="flex:0.13">
      <Textfield
        value=""
        label="6-digit code"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <div class="flex-child_center" style="flex:0.13">
      <Textfield
        value=""
        label="6-digit code"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <div class="flex-child_center" style="flex:0.13">
      <Textfield
        value=""
        label="6-digit code"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <div class="flex-child_center" style="flex:0.13">
      <Textfield
        value=""
        label="6-digit code"
        class="shaped-outlined wd_360 hg_60"
        variant="outlined"
        style="margin-bottom: 30px;"
      />
    </div>
    <div style="flex:0.18">
      <Button
        color="primary"
        on:click={authFunction}
        class="wd_200 bd-rd_28 hg_60"
        style="margin-top: 1vh;"
        variant="raised"
      >
        <Label class="fnt-sz_20 fnt-wg_600">인증완료</Label>
      </Button>
    </div>

    <!-- <div style="flex:0.06"></div> -->
  </div>

  <style>
    .side-image {
      background-color: #6c76c5;
      width: 100%;
    }
    .contents-wrap {
      width: 100%;
      height: 100%;
      background-color: white;
      flex-direction: column;
    }
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
  