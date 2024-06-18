<script>
import { store } from "../store.js";

export default {
  name: "AppPagination",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="p-5 mb-4 bg-dark text-light fixed-top">
    <div class="container py-5">
      <h1 class="display-5 fw-bold">Photos</h1>
      <p class="col-md-8 fs-4">Take a look to my favourite pictures</p>

      <form @submit.prevent="store.search()">
        <div class="input-group mb-3">
          <input
            v-model="store.searchInput"
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
</template>
<style></style>
