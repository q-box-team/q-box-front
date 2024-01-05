<script>
    import SubjectModal from "./common/SubjectModal.svelte";
    import axios from "axios";
    import SideBar from "./SideBar.svelte";
    import Header from "./Header.svelte";
    import "../../global.css";
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.withCredentials = true;
</script>
<div class="flex-child_j-start_a-start f_row" style="overflow:hidden; width: 100vw; height: 100vh;">
    <SideBar/>
    <div class="flex-child_j-start_a-start f_column" style="width: 100%; flex: 0.85">
        <Header/>
        <slot></slot>
    </div>
    <SubjectModal />

</div>
