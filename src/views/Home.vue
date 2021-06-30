<template>
  <div class="home">
    <Header />
    <Navbar />
    <div class="container">
      <Carousel />
      <ExploreKozii />
      <SearchComponent />
      <hr style="border: none; border-bottom: 1.5px solid gray" />
      <Popular-Deals />
      <hr style="border: none; border-bottom: 1.5px solid gray" />

      <div class="mt-3">
        <div class="card-size shadow">
          <div class="row">
            <div class="col">
              <h2 class="text-retail-produk">Retail Produk</h2>
            </div>
            <div class="col">
              <router-link to="/" class="test-produk-deals float-right"
                >Lihat Semua</router-link
              >
            </div>
          </div>
          <div class="row justify-content-sm-center">
            <div class="col text-center linkedpro mb-3">
              <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="5" class=" mb-3">
                <b-col
                  class="col-md-3 mt-d "
                  v-for="product in products"
                  :key="product.id"
                >
                  <Retail-Produk :product="product" />
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>

      <hr style="border: none; border-bottom: 1.5px solid gray" />
      <Join-Kozii />
      <hr style="border: none; border-bottom: 1.5px solid gray" />
      <Kozii-Video />
      <hr style="border: none; border-bottom: 1.5px solid gray" />
      <Partner-Kozii />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import ExploreKozii from "@/components/ExploreKozii.vue";
import Carousel from "@/components/Carousel.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import PopularDeals from "@/components/PopularDeals.vue";
import RetailProduk from "@/components/Retail-Produk.vue";
import JoinKozii from "@/components/JoinKozii.vue";
import KoziiVideo from "@/components/KoziiVideo.vue";
import PartnerKozii from "@/components/PartnerKozii.vue";

export default {
  name: "Home",
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    Header,
    Navbar,
    Carousel,
    ExploreKozii,
    SearchComponent,
    PopularDeals,
    RetailProduk,
    JoinKozii,
    KoziiVideo,
    PartnerKozii,
  },
  created () {
    this.$store.dispatch('FetchProducts')
      .then(result => {
        this.$store.commit('SET_PRODUCT', result.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
</script>
  

<style>
.w-20 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20% !important;
  flex: 0 0 20% !important;
  max-width: 20%;
}
</style>