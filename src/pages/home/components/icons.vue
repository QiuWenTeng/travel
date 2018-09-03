<template>
	<div class="icons">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon" v-for="(data, index) of page">
					<div>
						<img :src="data.imgUrl">
						<p class="textell">{{data.desc}}</p>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script type="text/javascript">
export default{
	data(){
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			}
		}
	},
	props: [
		'list'
	],
	computed: {
		pages(){
			var pages = [];
			this.list.forEach(function(item, index){
				var page = Math.floor(index / 8);
				if (!pages[page]) {
					pages[page] = [];
				}
				pages[page].push(item);
			})
			return pages;
		}
	}
}
</script>

<style type="text/css" scoped>
	.icon{
		width: 25%;
		height: 25%;
		float: left;
		text-align: center;
		padding-bottom: 4%;
	}
	.icon img{
		margin: 10% 0;
		width: 50%;
	}
	.textell{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>