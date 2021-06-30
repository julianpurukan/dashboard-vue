<template>
  <div class="mt-3 card-size shadow">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <h2 class="Explore-Kozii">Explore Kozii</h2>
      <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
        <div class="col text-center linkedpro">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-07.svg"
              alt="Properti"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Properti</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-08.svg"
              alt="Fashion"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Kelas Online</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-010.svg"
              alt="Makanan &amp; Minuman"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Fashion</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-10.svg"
              alt="Kecantikan"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Mobile & Tablets</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-11.svg"
              alt="Kesehatan"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Baby</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-12.svg"
              alt="UMKM"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Hobbi & Koleksi</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-13.svg"
              alt="Rumah Tangga"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Fotografi</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-14.svg"
              alt="Keuangan"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Product & Retail</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-15.svg"
              alt="Jasa"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Elektronik</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-16.svg"
              alt="Properti"
              width="64"
              class="icon-explore-kozii"
            /><br /><span class="text-explore">Health & Beauty</span></a
          >
        </div>
      </VueSlickCarousel>
    </div>

     <div class="d-sm-block d-md-none">
       <h2 class="Explore-Kozii">Explore Kozii</h2>
      <VueSlickCarousel v-bind="settings2" :arrows="true" :dots="true">
        <div class="col text-center linkedpro">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-07.svg"
              alt="Properti"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Properti</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-08.svg"
              alt="Fashion"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Kelas Online</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-010.svg"
              alt="Makanan &amp; Minuman"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Fashion</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-10.svg"
              alt="Kecantikan"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Mobile & Tablets</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-11.svg"
              alt="Kesehatan"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Baby</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-12.svg"
              alt="UMKM"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Hobbi & Koleksi</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-13.svg"
              alt="Rumah Tangga"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Fotografi</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-14.svg"
              alt="Keuangan"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Product & Retail</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-15.svg"
              alt="Jasa"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Elektronik</span></a
          >
        </div>
        <div class="col text-center linkedpro mb-3">
          <a href="#"
            ><img
              src="../assets/images/svg/icon _ ilustrasi dashboard-16.svg"
              alt="Properti"
              width="64"
              class="icon-explore-kozii2"
            /><br /><span class="text-explore">Health & Beauty</span></a
          >
        </div>
      </VueSlickCarousel>
     </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "ExploreKozii",
  data: () => ({
    settings: {
      dots: true,
      slidesToShow: 9,
      slidesToScroll: 1,
    },
    settings2: {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  }),
  components: {
    VueSlickCarousel,
  },
};
</script>

<style>
.Explore-Kozii {
  width: 114px;
  height: 20px;
  margin: 0 281.6px 20px 10px;
  font-family: Montserrat;
  font-size: 19px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #393d43;
}
.icon-kozii {
  width: 70%;
  height: 70%;

  padding: 0px 419.4px 6.7px 0px;
  border-radius: 12.5px;
}
.card-size {
  padding: 19.9px 6.7px 22.9px;
  border-radius: 12.5px;
  background-color: #ffffff;
}
.text-explore {
  margin: 6.7px 0 17.2px 0px;
  font-family: Montserrat;
  font-size: 12.8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #1a1a1a;
}

.icon-explore-kozii {
  margin: 0 0px 0px 12px;
}
.icon-explore-kozii2 {
  margin: 0 0px 0px -5px;
}
</style>