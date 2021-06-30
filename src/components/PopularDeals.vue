<template>
  <div class="mt-3">
    <b-carousel
      class="card-size-deals shadow"
      id="carousel-1"
      controls
      indicators
      img-width="480"
      img-height="480"
      data-interval="false"
    >
      <!-- Text slides with image -->
      <div class="row">
        <div class="col">
          <h2 class="produk-deals">Popular Deals</h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="test-produk-deals float-right"
            >Lihat Semua</router-link
          >
        </div>
      </div>
      <b-carousel-slide>
        <template #img>
          <b-row>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
          </b-row>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <b-row>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
            <b-col>
              <div class="container card-size-retail">
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../assets/images/product.png"
                  alt="image slot"
                />
                <div class="nama-produk">Apple Macbook</div>
                <p class="card-text text-toko">Renan Store</p>
                <hr />
                <p class="card-text harga-produk">Rp.999.000</p>
              </div>
            </b-col>
          </b-row>
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "PopularDeals",
};
</script>

<style>
.produk-deals {
  height: 20px;
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
</style>