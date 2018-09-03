<template>
	<div>
		<div class="title">
			周末去哪	
		</div>
		<ul>
			<li class="item" v-for="item of list">
				<div class="item-img">
					<img :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>


<script type="text/javascript">
export default{
	props: ['list']
}
</script>


<style type="text/css" scoped>
.title{
	margin-top: .2rem;
	line-height: .8rem;
	text-indent: .2rem;
	background: #eee;
}
.item{
	overflow: hidden;
	border-bottom: 1px solid #eee;
}
.item-img{
	height: 0;
	padding-bottom: 37.2%;
}
.item-img img{
	width: 100%
}
.item-info{
	padding: .1rem;
}
.item-title{
	line-height: .54rem;
	font-size: .32rem;
}
.item-desc{
	color: #999;
	line-height: .4rem;
}
.item-btn{
	background: #ff9300;
	border-radius: .06rem;
	color: #fff;
	padding: .02rem .1rem;
	margin-top: .15rem
}
</style>