<script>
    import axios from "axios";
    import SideBar from "./SideBar.svelte";
    import Header from "./Header.svelte";
    import "../../global.css";
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.withCredentials = true;
</script>
<div class="flex-child_j-fstart_a-fstart f_row" style="overflow:hidden; width: 100vw; height: 100vh;">
    <SideBar/>
    <div class="flex-child_j-fstart_a-fstart f_column wd_100p" style="width: 100%;">
        <Header/>
        <slot></slot>
    </div>
</div>
