<template>
  <div>
    <b-card class="mt-3 card-product shadow">
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab active>
            <template #title>
              <img
                class="icon-search"
                src="../assets/images/hotel.png"
                alt=""
                width="20"
              />
              <strong>Hotel</strong>
            </template>
            <div>
              <div class="mt-4 text-search-component">
                Tuliskan kota atau nama hotel
              </div>

              <b-row>
                <b-col cols="10">
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <img
                        class="icon-search"
                        src="../assets/images/svg/icon _ ilustrasi dashboard-27.svg"
                        alt=""
                        width="15"
                      />
                    </b-input-group-prepend>
                    <b-form-input
                      type="search"
                      placeholder="Hotel disekitar Anda"
                    ></b-form-input> </b-input-group
                ></b-col>
                <b-col cols="2">
                  <div class="button-gps">
                    <img
                      class="icon-search"
                      src="../assets/images/svg/icon _ ilustrasi dashboard-26.svg"
                      alt=""
                      width="20"
                    />
                  </div>
                </b-col>
              </b-row>

              <b-row class="text-center">
                <b-col>
                  <div class="mt-4 text-search-component">Check-in</div>
                  <b-form-datepicker
                    id="example-datepicker"
                    class="mb-2"
                  ></b-form-datepicker>
                </b-col>
                <b-col>
                  <div class="mt-4 text-search-component">Durasi</div>
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <img
                        class="icon-search"
                        src="../assets/images/svg/icon_clock_page_04.svg"
                        alt=""
                        width="15"
                      />
                    </b-input-group-prepend>
                    <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select
                > </b-input-group
                >
                  </b-col>
                <b-col>
                  <div class="mt-4 text-search-component">Check-out</div>
                  <p class="text-checkout">Senin, 31 Juni 2021</p>
                </b-col>
              </b-row>
              <div class="mt-4 text-search-component">Spesifikasi</div>
              <b-row class="text-center">
                <b-col cols="8">
                  <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                      <img
                        class="icon-search"
                        src="../assets/images/svg/icon _ ilustrasi dashboard-29.svg"
                        alt=""
                        width="15"
                      />
                    </b-input-group-prepend>
                   <b-form-select
                    v-model="selected"
                    :options="options2"
                  ></b-form-select
                > </b-input-group
                >
                  </b-col>
                <b-col cols="4">
                  <b-button to="/" class="button-search" variant="success"
                    >Cari</b-button
                  ></b-col
                >
              </b-row>
            </div>
          </b-tab>

          <b-tab>
            <template #title>
              <img
                class="icon-search"
                src="../assets/images/home-icon.png"
                alt=""
                width="20"
              />
              <strong>Rumah</strong>
            </template>
            <p class="p-3">Tab contents 2</p>
          </b-tab>

          <b-tab>
            <template #title>
              <img
                class="icon-search"
                src="../assets/images/apartment.png"
                alt=""
                width="20"
              />
              <strong>Apartemen</strong>
            </template>
            <p class="p-3">Tab contents 2</p>
          </b-tab>

          <b-tab>
            <template #title>
              <img
                class="icon-search"
                src="../assets/images/hostel.png"
                alt=""
                width="20"
              />
              <strong>Kostel</strong>
            </template>
            <p class="p-3">Tab contents 2</p>
          </b-tab>

          <b-tab>
            <template #title>
              <img
                class="icon-search"
                src="../assets/images/flat.png"
                alt=""
                width="20"
              />
              <strong>Sewa Apartemen</strong>
            </template>
            <p class="p-3">Tab contents 2</p>
          </b-tab>
        </b-tabs>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "1 Malam" },
        { value: "b", text: "2 Malam" },
        { value: { C: "3PO" }, text: "3 Malam" },
        { value: "d", text: "1 Minngu", disabled: true },
      ],
      options2: [
        { value: null, text: "1 Kamar,1 Dewasa, 1 Anak" },
        { value: "a", text: "1 Kamar,2 Dewasa, 1 Anak" },
        { value: "b", text: "1 Kamar,2 Dewasa, 2 Anak" },
        { value: { C: "3PO" }, text: "2 Kamar,2 Dewasa, 2 Anak" },
        { value: "d", text: "2 Kamar,4 Dewasa, 2 Anak", disabled: true },
      ],
    };
  },
};
</script>

<style>
.icon-search {
  margin: 0 5px 2.6px 0px;
  color: #6c727c;
}
.text-search-component {
  margin: 0 93.8px 4.8px 0.3px;
  font-family: Montserrat;
  font-size: 17.2px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #6c727c;
}
.button-search {
  width: 100%;
  font-family: Montserrat;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
}
.text-checkout {
  margin: 15px 0px 0px 0px;
  font-size: 17.2px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #6c727c;
}
.button-gps {
  padding: 6px 2px 6px;
  border-radius: 6.8px;
  
  background-color: #f6f6f6;
}
</style>