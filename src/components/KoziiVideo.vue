<template>
  <div class="mt-3">
    <div class="card-size shadow">
      <div>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="row-embed-video">
                <img
                  class="text-embed-video"
                  src="../assets/images/svg/icon _ ilustrasi dashboard-02.svg"
                  alt=""
                  width="200"
                />
                <h2>
                  <h2 class="text-embed-video">
                    <strong>Lorem ipsum doipsum</strong>
                  </h2>
                </h2>
                <p class="text-desc-embed">
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
                  class="button-embed"
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
              <video-embed
                src="https://www.youtube.com/watch?v=sNwE_zotJ8s&ab_channel=KOZIIID"
              ></video-embed>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KoziiVideo",
};
</script>

<style>
.row-embed-video {
  margin: 0 0 0px 0px;
  text-align: left;
}

.text-embed-video {
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

.text-desc-embed {
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
.button-embed {
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