<template>
	<div>
		<div class="item" v-for="(item, index) of list">
			<span class="item-icon"></span>
			{{item.title}}
			<div v-if="item.children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>


<script>
export default{
	name: 'DetailList',
	props: {
		list: Array
	}
}
</script>



<style scoped>
.item{
	line-height: .8rem;
	font-size: .32rem;
	padding: 0 .2rem;
}	
.item-icon{
	display: inline-block;
    width: .36rem;
    height: .36rem;
    vertical-align: -4px;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    background-size: .4rem 3rem;
}
</style>