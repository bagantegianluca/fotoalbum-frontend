<script>
import { store } from "./store.js";
import AppPagination from "./components/AppPagination.vue";
import AppJumbotron from "./components/AppJumbotron.vue";
import AppCard from "./components/AppCard.vue";

export default {
  app: "Fotoalbum",
  data() {
    return {
      store,
    };
  },
  components: {
    AppPagination,
    AppJumbotron,
    AppCard,
  },
  mounted() {
    const url = store.baseApiUrl + store.photosEndPoint;
    store.callApi(url);
  },
};
</script>

<template>
  <AppJumbotron></AppJumbotron>

  <section style="padding-top: 400px" class="photos" v-if="store.photos">
    <div class="container">
      <AppPagination></AppPagination>

      <div class="row g-2">
        <div class="col" v-for="photo in store.photos.data">
          <AppCard :photo="photo" :baseApiUrl="store.baseApiUrl"></AppCard>
        </div>
      </div>

      <AppPagination></AppPagination>
    </div>
  </section>
</template>

<style></style>
