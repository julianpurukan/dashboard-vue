<template>
  <div class="mt-3">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Text slides with image -->

      <b-carousel-slide>
        <template #img>
          <img
            class="card-img-top d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/images/image-carousel.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="card-img-top d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/images/image-carousel2.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="card-img-top d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/images/image-carousel3.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="card-img-top d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/images/image-carousel4.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style>
.card-img-top {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-radius: 15px;
}
</style>