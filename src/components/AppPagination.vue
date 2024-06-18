<script>
import { store } from "../store.js";

export default {
  name: "AppPagination",
  data() {
    return {
      store,
    };
  },
  props: {
    links: Array,
  },
};
</script>

<template>
  <nav aria-label="Page navigation" class="mt-3">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: !link.url, active: link.active }"
        v-for="link in links"
      >
        <button
          class="page-link"
          :href="link.url"
          type="button"
          @click="store.goToUrl(link.url)"
        >
          <span aria-hidden="true" v-html="link.label"></span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
