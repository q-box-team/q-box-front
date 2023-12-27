<script>
  import { goto } from "$app/navigation";
  import Card from "./Card.svelte";
  const process = ["emailAuth", "authComplete", "servAgree", "signIn"];
  let slider;
  let userEmail;
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
  };

  const emailAuth = async (email) => {
    console.log(email);
    const requestData = {
      "email": email,
    };
    const fetchData = {
      method: "post",
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      },
    };
    if (validateEmail(email)) {
      userEmail = email;
      slide("next");
      console.log("이메일 형식이 올바릅니다.");
      await fetch("/api/emails" , fetchData).then(async (response) => {
        console.log("email data sending....");
        if (response.status >= 200 && response.status < 300) {
          slide("next");
          return response.json();
        } else {
          const errData = await response.json();
          console.log(errData);
          throw new Error("Something went wrong!");
        }
      });
    } else {
      alert("이메일 형식이 올바르지 않습니다. 다시 입력해주세요.");
    }
  };

  const authCodeVerification = async (code) => {
    const requestData = {
      "key": code,
    };
    const fetchData = {
      method: 'post',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      },
    }
    if (validateSixDigitNumber(code)) {
      slide("next");
      console.log("코드 형식이 올바릅니다.");
      await fetch(`/api/emails`, fetchData).then(async (response) => {
        console.log("code data sending...");
        if (response.status >= 200 && response.status < 300) {
          console.log(`인증완료`);
          slide("next");
          return response.json();
        } else {
          const errData = response.json();
          console.log(errData);
          throw new Error("Something went wrong!");
        }
      });
    } else {
      alert("코드 형식이 올바르지 않습니다. 다시 입력해주세요.");
    }
  };

  const signInForm = async (data) => {
    const requestData = {
      email: data[0],
      nickname: data[1],
      password: data[2],
      departId: data[3],
    };
    const fetchData = {
      method: 'post',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      },
    }
    await fetch(`/api/members`, fetchData).then(async (response) => {
      console.log(`signIn data sending...`);
      if (response.status >= 200 && response.status < 300) {
        console.log(`회원가입 완료`);
        goto("/login", { replaceState: true });
        return response.json();
      } else {
        const errData = response.json();
        console.log(errData);
        throw new Error("Something went wrong!");
      }
    })
  };

  const serviceAgree = () => {
    console.log(`인증하기`);
    slide("next");
  };

  const backStep = () => {
    slide("prev");
  };

  // 이메일 체크
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  function validateSixDigitNumber(num) {
    const re = /^[a-z0-9]{8}$/i;
    return re.test(String(num));
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
          <Card {step} {emailAuth} />
        {:else if step === "authComplete"}
          <Card
            {step}
            {authCodeVerification}
            bind:email={userEmail}
            {backStep}
          />
        {:else if step === "servAgree"}
          <Card {step} {serviceAgree} />
        {:else}
          <Card {step} {signInForm} bind:email={userEmail} />
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
