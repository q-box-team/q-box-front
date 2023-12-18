<script>
  import { onMount } from "svelte";
  import Vditor from "vditor";

  onMount(() => {
    const vditor = new Vditor("vditor-container", {
      theme: "dark2",
      minHeight: 630,
      lang: "ko_KR",
      mode: "sv",
      width: 1265,
      placeholder: "질문 내용을 입력해주세요",
      isPreview: true,
      isOpen: true,
      getValue: () => {
        console.log('hi');
      },
      upload: {
        // 파일 업로드 성공 시 실행되는 콜백 함수
        success: (editorElement, responseText) => {
          // 여기에 성공 시 수행할 동작을 작성
          return alert("성공");
        },

        // 파일 업로드 실패 시 실행되는 콜백 함수
        error: (responseText) => {
          // 여기에 실패 시 수행할 동작을 작성
          return alert("실패");
        },

        // 파일 업로드 응답 데이터 포맷 변환 시 실행되는 콜백 함수
        format: (files, responseText) => {
          // 여기에 포맷 변환 시 수행할 동작을 작성
          // files는 업로드한 파일들의 배열, responseText는 서버 응답 텍스트
          // 변환된 결과를 반환
          return transformedResponseText;
        },
      },
    });
  });
</script>

<div style="padding: 0px 20px">
  <div id="vditor-container" />
</div>

<style>
</style>
