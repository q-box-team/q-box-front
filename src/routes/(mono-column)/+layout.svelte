<script>
    import axios from "axios";
    import Header from "./Header.svelte";
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.withCredentials = true;
</script>
<Header/>

<slot></slot>