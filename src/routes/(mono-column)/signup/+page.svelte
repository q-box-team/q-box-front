<script>
  import { onMount } from "svelte";

  import "../../../global.css";
  import Card from "./Card.svelte";
  const process = ["emailAuth", "authComplete", "serAgree", "signIn"];

  let slider;
  let currentSlidePosition = 0;
  $: nextDisabled = slider
    ? currentSlidePosition >= slider.scrollWidth - slider.clientWidth
    : false;
  $: prevDisabled = currentSlidePosition <= 0;

  function slide(direction) {
    // console.log(`slider.clientWidth: `, slider.clientWidth);
    // console.log(`slider.scrollWidth: `, slider.scrollWidth);
    const moveAmount = slider.clientWidth * 1;
    if (
      direction === "next" &&
      currentSlidePosition < slider.scrollWidth - slider.clientWidth
    ) {
      currentSlidePosition += moveAmount;
    } else if (direction === "prev" && currentSlidePosition > 0) {
      currentSlidePosition -= moveAmount;
    }
    // const centerPosition = currentSlidePosition - slider.clientWidth;
    const centerPosition = slider.clientWidth * currentSlidePosition / 600;
    slider.scrollTo({ left: centerPosition, behavior: "smooth" });
  }

  $: console.log(`currentSlidePosition: `, currentSlidePosition);
</script>

<div class="page-container-wrap flex-child_center">
  <div class="flex-child_center shadow">
    <div class="signup-container flex-child_j-start" bind:this={slider}>
      {#each process as step}
        <Card {step} slide={slide} />
      {/each}
    </div>
  </div>
</div>
<button on:click={() => slide("prev")} disabled={prevDisabled}>이전</button>
<button on:click={() => slide("next")} disabled={nextDisabled}>다음</button>

<style>
  .signup-container {
    width: 600px;
    height: 800px;
    flex-direction: row;
    overflow-x: hidden;
  }
  .shadow {
    width: 600px;
    height: 684px;
    border-radius: 35px;
    overflow: hidden;
    box-shadow: 0px 15px 30px #929292, 0px -15px 30px #ffffff;
  }
</style>
