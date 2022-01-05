<template>
  <div id="app">
    <GmapMap
      :center="{lat:41.92, lng:-87.65}"
      :zoom="9"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="openInfoWindowTemplate(index)"
      >
        <gmap-info-window
          :options="{
            maxWidth: 300,
            pixelOffset: { width: 0, height: 0 }
          }"
          :opened="m.open"
          @closeclick="m.open=false">
          <div v-html="getHtml(m)"></div>
        </gmap-info-window>
      </GmapMarker>
    </GmapMap>
    <v-select :options="['Canada', 'United States']"></v-select>
  </div>
</template>

<script>

import LocationData from './constants/geolocations/index.js';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      checkedCities: [],
      markers: LocationData.locationData
    }
  },
  methods: {
    openInfoWindowTemplate(i) {
      this.markers[i].open = true;
    },
    getHtml(marker) {

      let string = `<h6>${marker.name}</h6><ul>`;
      
      for (let elem of marker.artists) {
        string += `<li>${elem}</li>`
      }

      string += '</ul>';

      return string;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  text-align: left;
}

h6 {
  text-align: left;
}

li {
  text-align: left;
}

 .dropdown {
    position: relative;
    display: block;
    margin: auto;
  }
</style>
