<template>
	<div class="icons">
		<swiper ref="mySwiper">
			<swiper-slide>
				<div class="icon">
					<div>
						<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
						<p>热门景点</p>
					</div>
				</div>
				<div class="icon">
					<div>
						<img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png">
						<p>北京必游</p>
					</div>
				</div>
				<div class="icon">
					<div>
						<img src="http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png">
						<p>夏日游水</p>
					</div>
				</div>
				<div class="icon">
					<div>
						<img src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png">
						<p>文化古迹</p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="icon">
					<div>
						<img src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png">
						<p>动植物园</p>
					</div>
				</div>
				<div class="icon">
					<div>
						<img src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png">
						<p>故宫</p>
					</div>
				</div>
				<div class="icon">
					<div>
						<img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png">
						<p>一日游</p>
					</div>
				</div>
				<div class="icon">
					<div>
						<img src="http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png">
						<p>汽车票</p>
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
			
		}
	}
}
</script>

<style type="text/css" scoped>
	.icons{
		background: green
	}
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
</style>