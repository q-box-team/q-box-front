<script>
  import "../../../global.css";
  import Card from "./Card.svelte";
  import { goto } from "$app/navigation";
  let email = "";
  let password = "";

  const signInForm = async (email, password) => {
    if (
      email.split("").indexOf(" ") === -1 &&
      password.split("").indexOf(" ") === -1
    ) {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      const fetchData = {
        method: "post",
        body: formData,
      };
      await fetch(`/api/login`, fetchData).then(async (response) => {
        console.log(`signIn data sending...`);
        if (response.status >= 200 && response.status < 300) {
          sessionStorage.setItem("q-box", JSON.stringify(response.body));
          goto("/main");
          return;
        } else {
          const errData = response.json();
          console.log(errData);
          throw new Error("Something went wrong!");
        }
      });
    } else {
      alert("로그인 형식이 올바르지 않습니다. 다시 작성해주세요.");
    }
  };

  const gotoSignUp = () => {
    goto("/signup");
  };
</script>

<Card {email} {password} {signInForm} {gotoSignUp} />
