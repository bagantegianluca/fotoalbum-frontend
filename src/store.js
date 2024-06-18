import { reactive } from 'vue';
import axios from "axios";

export const store = reactive({
    photos: [],
    baseApiUrl: "http://127.0.0.1:8000",
    photosEndPoint: "/api/photos",
    searchInput: "",

    search() {
        const url =
            this.baseApiUrl +
            this.photosEndPoint +
            `?search=${this.searchInput}`;
        this.callApi(url);
    },

    callApi(url) {
        axios
            .get(url)
            .then((response) => {
                this.photos = response.data.results;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    goToUrl(url) {
        this.callApi(url);
    },
});