<script>
export default {
  name: "AppCard",
  props: {
    photo: Object,
    baseApiUrl: String,
  },
};
</script>
<template>
  <div class="card h-100" style="width: 18rem">
    <template v-if="!photo.image.startsWith('https://')">
      <img
        class="card-img-top"
        :src="baseApiUrl + '/storage/' + photo.image"
        alt="Card image cap"
      />
    </template>
    <template v-else>
      <img class="card-img-top" :src="photo.image" alt="Card image cap" />
    </template>
    <div class="card-body">
      <h5 class="card-title">{{ photo.title }}</h5>
      <p class="card-text">
        {{ photo.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<style scoped></style>
