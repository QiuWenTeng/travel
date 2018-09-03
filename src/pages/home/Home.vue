<template>
  <div>
  	<home-header :city="city"></home-header>
  	<home-swiper :list="swiperList"></home-swiper>
  	<home-icons :list="iconList"></home-icons>
  	<home-recommend :recommendlist="recommendList"></home-recommend>
  	<home-week :list="weekendList"></home-week>
  </div>
</template>

<script>
import HomeHeader from './components/homeheader'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeek from './components/week'
import axios from 'axios'

export default {
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeek
	},
	data(){
		return {
			iconList: [],
			recommendList: [],
			swiperList: [],
			weekendList: [],
			city: ''
		}
	},
	methods: {
		getHomeData(){
			axios.get('../../../static/index.json').then(this.homeSuccess)
		},
		homeSuccess(data){
			var data = data.data.data;
			this.iconList = data.iconList;
			this.recommendList = data.recommendList;
			this.swiperList = data.swiperList;
			this.weekendList = data.weekendList;
		}
	},
	mounted(){
		this.getHomeData();
	}
}
</script>

<style>

</style>


