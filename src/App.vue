<script>
import axios from "axios";

export default {
  app: "Fotoalbum",
  data() {
    return {
      photos: [],
      baseApiUrl: "http://127.0.0.1:8000",
      photosEndPoint: "/api/photos",
      searchInput: "",
    };
  },
  methods: {
    search() {
      const url =
        this.baseApiUrl + this.photosEndPoint + `?search=${this.searchInput}`;
      console.log(url);
      this.callApi(url);
    },
    callApi(url) {
      axios
        .get(url)
        .then((response) => {
          this.photos = response.data.results.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const url = this.baseApiUrl + this.photosEndPoint;
    this.callApi(url);
  },
};
</script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container py-5">
      <h1 class="display-5 fw-bold">Photos</h1>
      <p class="col-md-8 fs-4">Take a look to my favourite pictures</p>

      <form @submit.prevent="search()">
        <div class="input-group mb-3">
          <input
            v-model="searchInput"
            type="search"
            class="form-control"
            placeholder="Search photo title"
          />
          <button class="btn btn-outline-secondary" type="submit">
            <i class="fas fa-search fa-lg fa-fw"></i>
          </button>
        </div>
      </form>
    </div>
  </div>

  <section class="photos" v-if="photos">
    <div class="container">
      <div class="row g-2">
        <div class="col" v-for="photo in photos">
          <div class="card h-100" style="width: 18rem">
            <template v-if="!photo.image.startsWith('https://')">
              <img
                class="card-img-top"
                :src="baseApiUrl + '/storage/' + photo.image"
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
    </div>
  </section>
</template>

<style></style>
