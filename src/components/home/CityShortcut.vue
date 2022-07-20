<template>
    <section class="container">
        
      <h2 class="text-center">Search by city</h2>

      <Carousel :itemsToShow="3.95" :wrapAround="true">
        <Slide v-for="city in cities" :key="city">
          <div class="carousel__item">
            <!-- {{ slide }} -->

            <!-- <img src="../../assets/images/city/paris.jpg" width="300" /> -->
            <!-- <h3>Paris</h3> -->


            <img :src="city.img" width="300" />
            <h3>{{ city.name }}</h3>

          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>

      </Carousel>

      <!-- TODO :: Do padding -->
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


    </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const cities = [
  {name: "Paris", img: require("../../assets/images/city/paris.jpg")},
  {name: "Berlin", img: require("../../assets/images/city/berlin.jpg")},
  {name: "London", img: require("../../assets/images/city/london.jpg")},
  {name: "Rome", img: require("../../assets/images/city/rome.jpg")},
  {name: "Amsterdam", img: require("../../assets/images/city/amsterdam.jpg")},
  {name: "Madrid", img: require("../../assets/images/city/madrid.jpg")},
]

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
    // Pagination,
  },
  data() {
    return {
      cities: cities,
    }
  },
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}



.carousel__item {
  min-height: 200px;
  
  /* width: 100%; */
  width: 300px;
  
  /* background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);*/

  font-size: 20px; 
  border-radius: 8px;

  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;

}

.carousel__item > img {
  border-radius: 10px;
}

.carousel__item > h3 {
  /* margin-top: -20px; */
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  background-color: rgba(0,0,0, 0.8);
  width: 100%;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 0;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  padding-top: 10px;
  padding-bottom: 5px;

}


.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}



</style>