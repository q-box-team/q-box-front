<script>
  import axios from "axios";
  import "../../../global.css";
  import Card from "./Card.svelte";
  import { goto } from "$app/navigation";
  let email = "";
  let password = "";

  const signInForm = async (email, password) => {
    console.log(email, password);
    if (
      email.split("").indexOf(" ") === -1 &&
      password.split("").indexOf(" ") === -1
    ) {
      const requestData = {
            email,
            password
        };
        axios({
            method: "post",
            url: "login",
            data: requestData
        }).then(() => goto("/signup/main"));
    } else {
      alert("로그인 형식이 올바르지 않습니다. 다시 작성해주세요.");
    }
  };

  const gotoSignUp = () => {
    goto("/signup");
  };
</script>

<Card {email} {password} {signInForm} {gotoSignUp} />
