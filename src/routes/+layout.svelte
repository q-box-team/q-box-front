<script>
    import Header from "./Header.svelte";
    import axios from "axios";

    //    axios.defaults.baseURL = "https://q-box.site/api";
    axios.defaults.baseURL = "http://localhost:8080/api";
    axios.defaults.withCredentials = true;
</script>

<Header/>

<slot></slot>