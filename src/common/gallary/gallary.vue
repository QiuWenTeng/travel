<template>
	<div class="containter" @click="close">
		<div class="wrapper">
			<swiper :options="swiperOption">
			    <swiper-slide v-for="item of imgs">
			    	<div class="img-content">
			    		<img class="swiper-img" :src="item">
			    	</div>
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>


<script>
export default{
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				observeParents: true,
        		observer: true
			}
		}
	},
	props: ['imgs', 'isshow'],
	methods: {
		close: function(){
			this.$emit('closeGallary', !this.isshow);
		}
	}
}
</script>



<style scoped>
.containter >>> .swiper-container{
    overflow: inherit;
}
.containter{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: #000;
	z-index: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
}	
.wrapper{
	width: 100%;
	padding-bottom: 100%;
	height: 0;
}
.wrapper img{
	width: 100%
}
.wrapper .swiper-pagination{
        color: #fff;
        bottom: -1rem;
}
</style>