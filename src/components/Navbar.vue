<template>
  <div>
    <b-navbar
      class="navbar navbar-expand-lg navbar-light shadow-sm navbar-background"
      toggleable="lg"
    >
      <div class="container">
        <b-icon-list class="icon-list"></b-icon-list>
        <a class="navbar-brand" href="#">
          <img
            src="../assets/images/svg/icon _ ilustrasi dashboard-02.svg"
            alt=""
            width="75"
          />
        </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <img
              class="icon-navbar"
              src="../assets/images/home.png"
              alt=""
              height="13"
              width="13"
            />
            <b-nav-item-dropdown class="text-navbar" text="Properti" right>
              <b-dropdown-item href="#">Properti</b-dropdown-item>
              <b-dropdown-item href="#">Fashion</b-dropdown-item>
              <b-dropdown-item href="#">Makanan & Minuman</b-dropdown-item>
              <b-dropdown-item href="#">Kecantikan</b-dropdown-item>
              <b-dropdown-item href="#">Kesehatan</b-dropdown-item>
              <b-dropdown-item href="#">Rumah Tangga</b-dropdown-item>
            </b-nav-item-dropdown>
            <img
              class="icon-navbar"
              src="../assets/images/shopping-bag.png"
              alt=""
              height="13"
              width="13"
            />
            <b-nav-item-dropdown class="text-navbar" text="Produk Retail" right>
              <b-dropdown-item href="#">Properti</b-dropdown-item>
              <b-dropdown-item href="#">Fashion</b-dropdown-item>
              <b-dropdown-item href="#">Makanan & Minuman</b-dropdown-item>
              <b-dropdown-item href="#">Kecantikan</b-dropdown-item>
              <b-dropdown-item href="#">Kesehatan</b-dropdown-item>
              <b-dropdown-item href="#">Rumah Tangga</b-dropdown-item>
            </b-nav-item-dropdown>
            <img
              class="icon-navbar"
              src="../assets/images/graduate-cap.png"
              alt=""
              height="15"
              width="15"
            />
            <b-nav-item-dropdown class="text-navbar" text="Kelas Online" right>
              <b-dropdown-item href="#">Properti</b-dropdown-item>
              <b-dropdown-item href="#">Fashion</b-dropdown-item>
              <b-dropdown-item href="#">Makanan & Minuman</b-dropdown-item>
              <b-dropdown-item href="#">Kecantikan</b-dropdown-item>
              <b-dropdown-item href="#">Kesehatan</b-dropdown-item>
              <b-dropdown-item href="#">Rumah Tangga</b-dropdown-item>
            </b-nav-item-dropdown>
            <img
              class="icon-navbar"
              src="../assets/images/medal.png"
              alt=""
              height="13"
              width="13"
            />
            <b-nav-item-dropdown class="text-navbar" text="Sertifikasi" right>
              <b-dropdown-item href="#">Properti</b-dropdown-item>
              <b-dropdown-item href="#">Fashion</b-dropdown-item>
              <b-dropdown-item href="#">Makanan & Minuman</b-dropdown-item>
              <b-dropdown-item href="#">Kecantikan</b-dropdown-item>
              <b-dropdown-item href="#">Kesehatan</b-dropdown-item>
              <b-dropdown-item href="#">Rumah Tangga</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <img
                class="circle-icon"
                src="../assets/images/svg/icon _ ilustrasi dashboard-03.svg"
                alt=""
                width="25"
              />
              <img
                class="circle-icon"
                src="../assets/images/svg/icon _ ilustrasi dashboard-04.svg"
                alt=""
                width="25"
              />
              <img
                class="circle-icon"
                src="../assets/images/svg/icon _ ilustrasi dashboard-05.svg"
                alt=""
                width="25"
              />
            </b-nav-form>
            <b-nav-form>
              <b-button
                size="sm"
                variant="outline-success"
                class="button-navbar"
                type="submit"
                >Login</b-button
              >&nbsp;
              <b-button
                size="sm"
                class="button-navbar"
                type="submit"
                variant="success"
                >Register</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar-background {
  background-color: #ffffff;
}
.circle-icon {
  width: 25.5px;
  height: 25.5px;
  margin: 4px 4.9px 4px 2px;
  background-color: #f3f4f5;
  border-radius: 50%;
}
.icon-list {
  margin: 5.7px 12px 2.6px 0;
  font-size: 23px;
  color: #fc5e31;
}
.text-navbar {
  margin: 0 0.2px 0 0;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6c727c;
}
.icon-navbar {
  margin: 10.7px -4px 2.6px 20px;
  color: #6c727c;
}
.button-navbar {
  width: 68.7px;
  margin: 0 0 0 5.2px;
  padding: 6px 8.4px 6.6px 8.4px;
  border-radius: 5.5px;
  background-color: #fc5e31;
  font-family: Montserrat;
}
</style>