<template>
	<div>
		<router-link to="/">
			<div class="header-abs" v-show="!isshow">
				<div class="bg"></div>
				<span class="iconfont icon-back">&#xe624;</span>
			</div>
		</router-link>
		<div class="header-fixed" v-show="isshow" :style="opacityStyle">
			<router-link to="/">
				<div class="header-left">
					<span class="iconfont icon-back">&#xe624;</span>
				</div>
			</router-link>
			<span>景点详情</span>
		</div>
	</div>
</template>


<script>
export default{
	data () {
		return {
			isshow: false,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			console.log('11');
			var top = document.documentElement.scrollTop;
			if (top > 50) {
				if (top < 140) {
					this.opacityStyle.opacity = top / 140;
				}
				this.isshow = true;
			} else {
				this.isshow = false;
			}
		}
	},
	mounted () {//activated
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy () {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>



<style scoped>
	.header-abs{
		position: absolute;
		left: .2rem;
		top: .2rem;
		width: .72rem;
		height: .72rem;
		border-radius: .4rem;
		color: #fff;
    	text-align: center;
    	line-height: .72rem;
    	overflow: hidden;
	}
	.bg{
		background-color: #000;
    	opacity: .5;
    	height: .72rem;
    	width: .72rem;
    	position: absolute;
	}
	.icon-back{
		position: relative;
		z-index: 2;
	}
	.header-left{
		width: .64rem;
		position: absolute;
		color: #fff;
	}
	.header-fixed{
    	height: 0.86rem;
    	background-color: #00bcd4;
    	line-height: 0.86rem;
    	color: #fff;
    	text-align: center;
    	position: fixed;
    	top: 0;
    	width: 100%;
	}

</style>