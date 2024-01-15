import { writable } from "svelte/store";

export const user = writable({
    user: {
        email: "",
        nickname: "",
        depart: {
            id: -1,
            name: "",
            univId: "",
        }
    }
});

export default user;