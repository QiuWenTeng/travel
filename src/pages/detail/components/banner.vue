<template>
	<div>
		<div class="banner" @click="showGallary">
			<img :src="bannerImg">
			<div class="banner-info">
				<div class="img">
					<span class="iconfont icon-back">&#xe748;</span>
					<span>123</span>
				</div>
				<div class="title">长隆野生动物世界</div>
			</div>
		</div>
		<common-gallary @closeGallary="close" :imgs="imgs" :isshow="isShow" v-show="isShow"></common-gallary>
	</div>
</template>


<script>
import CommonGallary from 'common/gallary/gallary'
export default{
	components: {
		CommonGallary
	},
	props: ['bannerImg', 'imgs'],
	data () {
		return {
			isShow: false,
			imgs: [
				'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_r_800x800_ea3a0585.jpg',
				'http://img1.qunarzz.com/sight/p0/1605/bc/bc7f6fb8d955d36390.img.jpg_r_800x800_61baef38.jpg'
			]
		}
	},
	methods: {
		showGallary: function () {
			this.isShow = !this.isShow;
		},
		close: function () {
			this.isShow = !this.isShow;
		}
	}
}
</script>



<style>
.banner{
	overflow: hidden;
	height: 0;
	padding-bottom: 55%;
	position: relative;
	color: #fff;
}
.banner::after{
	content: " ";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: .6rem;
	background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
}
.banner img{width: 100%}
.banner .banner-info{
	position: absolute;
	left: .2rem;
	right: 0;
	bottom: .25rem;
	z-index: 2;
}
.banner .banner-info .title{
	font-size: .36rem;
}	
.banner .banner-info .img{
	width: 1.1rem;
	height: .4rem;
	background: rgba(0,0,0,.5);
    border-radius: .2rem;
    margin-bottom: .15rem;
    padding-left: .2rem;
}
</style>