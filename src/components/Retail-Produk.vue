<template>
  <div class="container card-size-retail">
    <img
      :src="'assets/images/' + product.gambar"
      class="d-block img-fluid w-100"
      width="1024"
      height="480"
      alt="image slot"
    />
    <h5 class="card-title nama-produk">{{ product.nama }}</h5>
    <p class="card-text text-toko">{{ product.toko }}</p>
    <hr>
    <p class="card-text harga-produk">Rp.{{ product.harga }}</p>
  </div>
</template>

<script>
export default {
  name: "Retail-Produk",
  props: ["product"],
};

</script>

<style>
.text-retail-produk {
  margin: 0 0 20px 10px;
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

.card-size-deals {
  padding: 19.9px 6.7px 22.9px;
  border-radius: 12.5px;
  background-color: #ffffff;
}

.test-produk-deals {
  margin: 0px 12px 0 0px;
  font-family: Montserrat;
  font-size: 14.2px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #fc5e31;
}
.card-size-retail {
  margin: 0 0 20px 0px;
  padding: 14.5px 14.5px 14.5px 14.5px;
  border-radius: 12.5px;
  background-color: #f2f2f2;
}
.harga-produk {

  margin: 2.9px 0 0 20px;
  font-family: Montserrat;
  font-size: 18.2px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #fc5e31;
}
.nama-produk{
  height: 24px;
  margin: 10px 0px 15.2px 0px;
  font-family: Montserrat;
  font-size: 14.7px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #262626;
}
.text-toko {
  font-family: Montserrat;
  font-size: 12.6px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #808080;
}
</style>