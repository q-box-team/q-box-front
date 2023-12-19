<script>
  import Card from "./Card.svelte";
  import { onMount } from "svelte";
  import Vditor from "vditor";
  let data;
  let vditor;
  let value = "제목을 입력해주세요";
  const csrfToken =
    "zPox5PNJuP-0KY_X8hUjUf2blcJMl6w222IM46_Uv2jVJN_kqs4CgMR-j8iZHbvmljgXZ8iquKN9pc0buAM908zlhlnjR-fV";
  $: console.log(data);
  onMount(() => {
    vditor = new Vditor("vditor-container", {
      theme: "dark2",
      height: 850,
      lang: "ko_KR",
      mode: "sv",
      width: 1600,
      placeholder: "질문 내용을 입력해주세요",
      isPreview: true,
      isOpen: true,
      outline: true,
      getValue: () => {
        console.log("hi");
      },
      comment: scroll,
      upload: {
        url: "", // 서버의 파일 업로드 API URL
        success: (editor, msg) => {
          console.log("업로드 성공:", msg);
        },
        error: (msg) => {
          console.error("업로드 실패:", msg);
        },
        format: (files, responseText) => {
          // 서버 응답을 필요에 따라 가공하는 부분
          // 예: responseText에서 파일 URL 추출하여 반환
          const responseData = JSON.parse(responseText);
          return responseData.data.url;
        },
      },
    });
  });

  const serverButtonHandler = () => {
    const markdownData = vditor.getValue();
    data = JSON.stringify(markdownData);
    console.log(data);
    fetch("https://q-box.site/questions", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: {
        title: "title",
        content: data,
        question: 5,
        "lecture.code": 1,
        "lecture.departId": 2,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버 응답 처리
        console.log("서버 응답:", data);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  };
</script>

<Card  value={value} data={data} sendData={serverButtonHandler}/>
