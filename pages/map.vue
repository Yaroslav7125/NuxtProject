<template>
  <div id="container" />
</template>

<script>
import { load } from '@2gis/mapgl';
export default {

  data() {
    return {
      currentLocation: {},
      circleOptions: {

      },
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058
        },
      ],
      pins: {
        selected: "data:image/png;base64,iVBORw0KGgo...",
        notSelected: "data:image/png;base64,iVBORw0KGgo..."
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ]
    }
  },
  mounted:function(){
    console.log('mount')
    navigator.geolocation.getCurrentPosition((pos)=>{
      debugger
      this.locations[0].lat = pos.coords.latitude;
      this.locations[0].lng = pos.coords.longitude;
    }, (err) => {
      debugger
    });
  }
}
</script>

<style>

</style>
