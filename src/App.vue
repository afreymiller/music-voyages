<template>
  <div id="app">
    <GmapMap
      :center="{lat:35.92, lng:-87.65}"
      :zoom="3"
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

    <div class="tile-container">
      <p>Holds the tiles</p>
      <div class="container">
        <div class="row">
          <div class="col-md-2" v-for="fest in festivals" v-bind:key="fest.name">
            <img src="./assets/lolla.png" width="50px" height="50px">

            <p>{{fest.name}}</p>         
          </div>
        </div>
      </div>
    </div>
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
      markers: LocationData.locationData.ALL,
      festivals: [
        {
          "name": "Lollapalooza"
        },
        {
          "name": "Riot Fest"
        },
        {
          "name": "Pitchfork"
        },
        {
          "name": "III Points"
        },
        {
          "name": "Ultra Miami"
        },
        {
          "name": "Movement Detroit"
        },
        {
          "name": "ARC Music Festival"
        },
        {
          "name": "Shaky Knees"
        },
        {
          "name": "Decadence Colorado"
        },
        {
          "name": "Global Dance Festival"
        }
      ],
      selected: 'ALL'
    }
  },
  methods: {
    setSelected() {
      if (this.selected === 'ALL') {
        this.markers = LocationData.locationData.ALL;
      } if (this.selected === 'FESTIVALS') {
        this.markers = LocationData.locationData.FESTIVALS;
      }
    },
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

.col-md-2 {
  border: 1px solid black;
}

 .dropdown {
    position: relative;
    display: block;
    margin: auto;
  }
</style>
