<script>
  import Content1 from "./contents/Content1.svelte";
  import Content2 from "./contents/Content2.svelte";
  import Content3 from "./contents/Content3.svelte";
  import Content4 from "./contents/Content4.svelte";
  export let step;
  export let slide;
  export let emailAuth;
</script>

  <div class="flex-child_center">
    <div class="signup-container flex-child_j-start_a-center">
      {#if step === "emailAuth"}
        <Content1 emailAuth={emailAuth}/>
      {:else if step === "authComplete"}
        <Content2 step={step} slide={slide}/>
      {:else if step === "serAgree"}
        <Content3 step={step} slide={slide}/>
      {:else if step === "signIn"}
        <Content4 step={step} slide={slide}/>
      {/if}
    </div>
  </div>

<style>
  .signup-container {
    width: 600px;
    height: 680px;
    flex-direction: column;
    /* border-radius: 35px; */
    overflow: hidden;
  }
</style>
