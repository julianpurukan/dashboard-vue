<template>
  <div class="mt-3">
    <div class="card-size shadow">
      <div>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="row-partner">
                <h2 class="text-partner">
                  <strong>Partner</strong>
                </h2>
                <img
                  class="text-partner"
                  src="../assets/images/svg/icon _ ilustrasi dashboard-02.svg"
                  alt=""
                  width="200"
                />
                <p class="text-desc-partner">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo conse Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam er\
                </p>
                <b-button
                  to="/"
                  class="button-partner"
                  pill
                  variant="success"
                  size="sm"
                  >Selengkapnya di sini</b-button
                >
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="container">
              <img
                src="../assets/images/icon & ilustrasi dashboard-61-01-02.png"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerKozii",
};
</script>

<style>
.row-partner {
  margin: 0 0 0px 0px;
  text-align: left;
}

.text-partner {
  margin: 0 0 20px 30px;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #393d43;
}

.text-desc-partner {
  margin: 0 53px 5.3px 30px;
  font-family: Montserrat;
  font-size: 14.4px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: #808080;
}
.button-partner {
  width: 200.9px;
  margin: 20px 0 20px 30px;
  font-family: Montserrat;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
}
</style>