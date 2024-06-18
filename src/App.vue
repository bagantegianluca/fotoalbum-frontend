<script>
import { store } from "./store.js";
import AppPagination from "./components/AppPagination.vue";
import AppJumbotron from "./components/AppJumbotron.vue";

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
      <AppPagination :links="store.photos.links"></AppPagination>

      <div class="row g-2">
        <div class="col" v-for="photo in store.photos.data">
          <div class="card h-100" style="width: 18rem">
            <template v-if="!photo.image.startsWith('https://')">
              <img
                class="card-img-top"
                :src="store.baseApiUrl + '/storage/' + photo.image"
                alt="Card image cap"
              />
            </template>
            <template v-else>
              <img
                class="card-img-top"
                :src="photo.image"
                alt="Card image cap"
              />
            </template>
            <div class="card-body">
              <h5 class="card-title">{{ photo.title }}</h5>
              <p class="card-text">
                {{ photo.description }}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <AppPagination :links="store.photos.links"></AppPagination>
    </div>
  </section>
</template>

<style></style>
