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
    <div v-if="!photo.image.startsWith('https://')">
      <img
        class="card-img-top"
        :src="baseApiUrl + '/storage/' + photo.image"
        alt="Card image cap"
      />
    </div>
    <div v-else>
      <img class="card-img-top" :src="photo.image" alt="Card image cap" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ photo.title }}</h5>
      <p class="card-text">
        {{ photo.description }}
      </p>

      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->

      <!-- Modal trigger button -->
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        :data-bs-target="`#photo-${photo.id}`"
      >
        View
      </button>

      <!-- Modal Body -->
      <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
      <div
        class="modal fade"
        :id="`photo-${photo.id}`"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        :aria-labelledby="`modal-title-${photo.id}`"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" :id="`modal-title-${photo.id}`">
                {{ photo.title }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div v-if="!photo.image.startsWith('https://')">
                <img
                  class="card-img-top"
                  :src="baseApiUrl + '/storage/' + photo.image"
                  alt="Card image cap"
                />
              </div>
              <div v-else>
                <img
                  class="card-img-top"
                  :src="photo.image"
                  alt="Card image cap"
                />
              </div>
              <div class="description mt-3">
                <h6>Description</h6>
                {{ photo.description }}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <!-- <button type="button" class="btn btn-primary">Save</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
