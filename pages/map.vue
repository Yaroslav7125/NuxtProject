<template>
  <div>
    <div id="map"></div>
  </div>

</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
export default {
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyC0dy2XqP-GPUFSTeGTKpkmT55k9GdHzxU",
      version: "weekly",
    });
    loader.load().then(() => {
       map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }
}


</script>

<style>
#map{
  width: 1000px;
  height: 1000px;
}
</style>
