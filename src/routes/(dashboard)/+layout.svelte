<script>
  import userInfo from "../../store/user-store";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import SubjectModal from "./common/SubjectModal.svelte";
  import axios from "axios";
  import SideBar from "./SideBar.svelte";
  import Header from "./Header.svelte";
  import "../../global.css";
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  axios.defaults.withCredentials = true;

  let user;
  userInfo.subscribe((info) => {
    // user = info;
    console.log(info);
  });

  onMount(() => {
    fetch("/api/members/me")
      .then((response) => {
        if (!response.ok) {
          throw new Error("잘못된 접근입니다. 다시 로그인 해주세요.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        userInfo.set({
          user: {
            email: data.email,
            nickname: data.nickname,
            depart: {
              id: data.depart.id,
              name: data.depart.name,
              univId: data.depart.univId,
            },
          },
        });
      })
      .catch((error) => {
        console.error("catch:", error.message);
        alert(error.message);
        goto("/login");
      });
  });
</script>

<div
  class="flex-child_j-start_a-start f_row"
  style="overflow:hidden; width: 100vw; height: 100vh;"
>
  <SideBar />
  <div
    class="flex-child_j-start_a-start f_column"
    style="width: 100%; flex: 0.85"
  >
    <Header />
    <slot />
  </div>
  <SubjectModal />
</div>
