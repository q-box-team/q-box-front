<script>
  import Card from "./Card.svelte";
  const process = ["emailAuth", "authComplete", "serAgree", "signIn"];

  let slider;
  let currentSlidePosition = 0;
  $: nextDisabled = slider
    ? currentSlidePosition >= slider.scrollWidth - slider.clientWidth
    : false;
  $: prevDisabled = currentSlidePosition <= 0;

  const slide = (direction) => {
    const moveAmount = slider.clientWidth * 1;
    if (
      direction === "next" &&
      currentSlidePosition < slider.scrollWidth - slider.clientWidth
    ) {
      currentSlidePosition += moveAmount;
    } else if (direction === "prev" && currentSlidePosition > 0) {
      currentSlidePosition -= moveAmount;
    }
    const centerPosition = (slider.clientWidth * currentSlidePosition) / 600;
    slider.scrollTo({ left: centerPosition, behavior: "smooth" });
  }

  const emailAuth = async (email) => {
    const requestData = {
      email: email,
    };
    if (validateEmail(email)) {
      alert("이메일 형식이 올바릅니다.");
      await fetch("https://dev.q-box.site/api/emails", {
        method: "post",
        body: JSON.stringify(requestData),
        header: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then(async (response) => {
        if (Response.status >= 200 && Response.status < 300) {
          slide("next")
          return response.json();
        } else {
          const errData = await response.json();
          console.log(errData);
          throw new Error("Something went wrong (server side)");
        }
      });
    } else {
      alert("이메일 형식이 올바르지 않습니다.");
    }
  };

  const backToEmailAuth = async () => {
    slide("prev");
  };

  const authCodeVerification = async (code) => {
    const requestData = {
      key: code,
    };
    await fetch("https://dev.q-box.site/api/emails", {
        method: "post",
        body: JSON.stringify(requestData),
        header: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then(async (response) => {
        if (Response.status >= 200 && Response.status < 300) {
          console.log(`인증완료`);
          slide("next")
          return response.json();
        } else {
          const errData = await response.json();
          console.log(errData);
          throw new Error("Something went wrong (server side)");
        }
      });
    };

  // 이메일 체크
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
</script>

<div class="page-container-wrap flex-child_center">
  <div class="flex-child_center shadow">
    <div
      class="signup-container flex-child_j-start_a-center"
      bind:this={slider}
    >
      {#each process as step}
        {#if step === "emailAuth"}
          <Card {step} {slide} {emailAuth} />
        {:else if step === "authComplete"}
          <Card {step} {slide} {authCodeVerification} {backToEmailAuth}/>
        {/if}
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
    overflow: hidden;
  }
  .shadow {
    width: 600px;
    height: 684px;
    border-radius: 35px;
    overflow: hidden;
    box-shadow:
      0px 15px 30px #929292,
      0px -15px 30px #ffffff;
  }
</style>
