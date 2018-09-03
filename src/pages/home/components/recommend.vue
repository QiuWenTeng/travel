<template>
	<div>
		<div class="title">
			热销推荐	
		</div>
		<ul>
			<li class="item" v-for="item of recommendlist">
				<img class="item-img" :src="item.imgUrl">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-btn">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>


<script type="text/javascript">
export default{
	props:['recommendlist']
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
	display: flex;
	height: 2rem;
	border-bottom: 1px solid #eee;
}
.item-img{
	width: 1.8rem;
	height: 1.8rem;
	padding: .1rem;
}
.item-info{
	padding: .1rem;
	min-width: 0;
}
.item-title{
	line-height: .54rem;
	font-size: .32rem;
}
.item-desc{
	color: #999;
	line-height: .4rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.item-btn{
	background: #ff9300;
	border-radius: .06rem;
	color: #fff;
	padding: .02rem .1rem;
	margin-top: .15rem
}
</style>