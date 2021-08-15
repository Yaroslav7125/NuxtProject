<template>
  <div class="content-container">
    <div class="map-box">
      <div class="map-line">
        <div class="map-caption d-flex justify-content-between">
          <span>Basic map</span>
          <img src="/img/UpStroke.svg" alt="">
        </div>
      </div>
      <div class="map"></div>
    </div>
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';
export default {
  mounted () {
    const loader = new Loader({
      apiKey: 'AIzaSyC0dy2XqP-GPUFSTeGTKpkmT55k9GdHzxU',
      version: 'weekly',
    });
    let map;
    loader.load().then((google) => {
        map = new google.maps.Map(document.querySelector('.map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 17,
      });
      navigator.geolocation.getCurrentPosition((pos) => {
        const crd = pos.coords;
          map.setCenter({
          lat: crd.latitude,
          lng: crd.longitude,
        });
        new google.maps.Marker({
          position: {
            lat: crd.latitude,
            lng: crd.longitude,
          },
          map,
        });
      });
    });
  },
};

</script>

<style scoped lang="scss">
.map{
  width: 100%;
  height: 404px;
}
.content-container{
  padding: 16px;
  .map-box{
    margin-top: 24px;
    background-color: #fff;
    padding: 16px;
    border: 1px solid #DDE0E6;
    .map-caption {
      margin-bottom: 16px;
        span{
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.005em;
          color: #2D2F33;
      }
    }
  }
}
</style>
