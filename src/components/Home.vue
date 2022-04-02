<template>
<div id="app" class="home">
	<img src="../assets/crossplatForms.svg" width="500" height="200">
	<div class="slideshow">
		<swiper :navigation="true" :modules="modules" class="mySwiper">
		<swiper-slide v-for="image in images" :key="image.id">
			<img :src="image.imageUrl"></swiper-slide>
	</swiper>
	</div>
</div>
   
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default {
	name: "App",
	components: {
		Swiper,
		SwiperSlide,
  },
  data() {
      return {
        parallaxSwiperWidth: 0,
        images: [
			{
			id:1,imageUrl:require("../assets/images/image1.jpg"),
			},
			{
			id:2,imageUrl:require("../assets/images/image2.jpg"),
			},
			{
			id:3,imageUrl:require("../assets/images/image3.jpg"),
			}
        ],
	}
  },
  setup() {
    return {
		modules: [Navigation],
    };
  },
};
</script>

<style scoped>
	h1{
		font-weight: 300;
	}
</style>
