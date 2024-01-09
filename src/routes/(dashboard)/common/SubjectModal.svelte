<script>
  import isModal from "./modal-store";
  import { onMount } from "svelte";
  let modalHandler;
  isModal.subscribe((bool) => {
    modalHandler = bool;
  });

  const showModal = () => {
    isModal.set(true);
  };

  const hideModal = () => {
    isModal.set(false);
  };

  const modalBackgroundHandler = (event) => {
    hideModal();
  };

  const subjects = [];

  const subjectsList = async () => {
    userEmail = email;
    await fetch(`/api/letctures`).then(async (response) => {
      console.log("subject data receiving....");
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        return response.json();
      } else {
        const errData = await response.json();
        console.log(errData);
        throw new Error("Something went wrong!");
      }
    });
  };

  onMount( async () => {
    await fetch(`/api/lectures`).then(async (response) => {
      console.log(`first subject data receiving...`);
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        return response.json();
      } else {
        const errData = await response.json();
        console.log(errData);
        throw new Error("Something went wrong!");
      }
    })
  });
</script>

{#if modalHandler}
  <div on:click={modalBackgroundHandler} class="modal-background">
    <div class="modal">
      {#each subjects as subject}
        {subject}
        <br />
      {/each}
      <button on:click={hideModal}>닫기</button>
    </div>
  </div>
{/if}

<style>
  .modal-background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
  }
  /* 모달 스타일은 필요에 따라 수정 가능 */
  .modal {
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 25px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 999;
    max-height: 700px;
  }
</style>
