<template>
	<div>
		<detail-banner :bannerImg='bannerImg' :imgs="imgs"></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="categoryList"></detail-list>
	</div>
</template>


<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
import axios from 'axios'
export default{
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			categoryList: [],
			imgs: [],
			bannerImg: ''
		}
	},
	methods: {
		getSuccess (data) {
			this.bannerImg = data.data.data.bannerImg;
			this.categoryList = data.data.data.categoryList;
			this.imgs = data.data.data.gallaryImgs;
		}
	},
	mounted: function () {
		axios.get('../../../../static/detail.json').then(this.getSuccess);
	}
}
</script>



<style>
	
</style>