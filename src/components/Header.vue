<template>
  <div class="nav-header">
    <div class="container">
      <nav class="nav font-small">
        <img
          src="../assets/images/svg/icon _ ilustrasi dashboard-01.svg"
          alt="Kesehatan"
          width="5"
          class="icon-nav"
        />
        <a class="font-small" aria-current="page" href="#"
          >Download Kozii App</a
        >
        <ul class="ml-auto mb-2 mb-lg-0">
          <a class="font-right" aria-current="page" href="#">Tentang Kozii</a>
          <a class="font-right" aria-current="page" href="#">Mitra Kozii</a>
          <a class="font-right" aria-current="page" href="#">Komunitas Kozii</a>
          <a class="font-right" aria-current="page" href="#">Promo</a>
          <a class="font-right" aria-current="page" href="#">Pusat Bantuan</a>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.font-small {
  margin: 0.2px 0 1.1px 0;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #6c727c;
}
.font-right {
  margin: 0.2px 0 1.1px 30px;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #6c727c;
}
.nav-header {
  height: 23.2px;
  padding: 7.1px 0px 0px 0px;
  background-color: #f7f7f7;
}
.icon-nav {
  font-size: 10px;
  margin: 0px 3px 2.6px 0px;
  color: #6c727c;
}
</style>