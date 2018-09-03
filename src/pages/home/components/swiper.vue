<template>
	<div class="wrap">
		<swiper :options="swiperOption" ref="mySwiper" v-if="isShow">
		    <swiper-slide v-for="item of list">
		    	<img class="swiper-img" :data-id="item.id" :src="item.imgUrl">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script type="text/javascript">
export default{
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			},
			siperList: [
				{
					url: 'http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg',
					id: '00001'
				},
				{
					url: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg',
					id: '00002'
				}
			]
		}
	},
	props: ['list'],
	computed: {
		isShow(){
			return this.list.length
		}
	}
}
</script>

<style type="text/css" scoped>
	.wrap >>> .swiper-pagination-bullet-active{
		background: #fff;
	}
	.wrap{
		width: 100%;
		overflow: hidden;
		padding-bottom: 30.5%;
		height: 0 
	}
	.swiper-img{
		width: 100%;
	}
</style>