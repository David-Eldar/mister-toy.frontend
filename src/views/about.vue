<!-- <template>
    <h1>
     this is about page   
    </h1>
</template> -->

<template>
  <section class="about">
    <div class="about-lyrics">
      <h1>About Us</h1>
      <p>
      blah blah blah... blahblah, blah blah... <br>
      blah blah blah blah blah blah blah... blah blah blah blah! <br>
      blaaaahh 😃😃😃
      </p>
    </div>
  
    <!-- <section class="map"> -->
      <h1>Our Branches!</h1>
      <section class="map-container">
    <GMapMap :center="center"
             :zoom="zoom" 
             map-type-id="terrain" class="map" >

              
        <GMapMarker v-for="(m, index) in markers"
                    :key="index" 
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                     @click="center = m.position" />
    </GMapMap>
    </section>
    <!-- </section> -->
    
  </section>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 32.066278, lng: 34.830301 },
      title: 'Israel',
      zoom: 13,
      markers: [
        { position: { lat: 32.109323, lng: 34.855429 }, title: 'Tel Aviv-Yafo' },
        { position: { lat: 31.771959, lng: 35.217018 }, title: 'Jerusalem' },
        { position: { lat: 32.794044, lng: 34.989571 }, title: 'Haifa' },
        { position: { lat: 29.55805, lng: 34.94821 }, title: 'Eilat' },
      ]
    }
  }
}
</script>

<style>

</style>