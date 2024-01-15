<script>
    import userInfo from '../../store/user-store';
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
  userInfo.subscribe(info => {
    // user = info;
    console.log(info);
  });

  let cookieString;
  let jSessionIDIndex = -1;

  onMount(() => {
    cookieString = document.cookie;
    jSessionIDIndex = cookieString.indexOf("JSESSIONID=");
    if (jSessionIDIndex !== -1) {
      axios
        .get("/members/me")
        .then((res) => {
            userInfo.set({
                user: {
                    email: res.data.email,
                    nickname: res.data.nickname,
                    depart: {
                        id: res.data.depart.id,
                        name: res.data.depart.name,
                        univId: res.data.depart.univId,
                    }
                }
            });
        })
        .catch((e) => {
          alert("잘못된 접근입니다. 다시 로그인 해주세요.");
          goto("/login");
        });
    } else {
      alert("잘못된 접근입니다. 다시 로그인 해주세요.");
      goto("/login");
    }
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
