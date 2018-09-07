<template>
	<div>
		<div class="search">
			<input v-model="keyword" type="text" name="cityname" placeholder="输入城市名或者拼音">
		</div>
		<div class="search-content">
			<ul>
				<li v-for="item of list">
					{{item.name}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
import Bscroll from 'better-scroll'
export default{
	props: ['cities'],
	data () {
		return {
			keyword: '',
			list: []
		}
	},
	watch: {
		keyword () {
			var result = [];
			for (let i in this.cities) {
				this.cities[i].forEach((val, index) => {
					if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
						result.push(val);
					}
				})
			}
			this.list = result;
		}
	},
	mounted(){
		
	}
}	
</script>

<style type="text/css" scoped>
.search{
	height: .78rem;
	background: #00bcd4;
	text-align: center;
}
.search input{
	width: 92%;
	height: .60rem;
	margin-top: 0.08rem;
	border-radius: 0.08rem;
	text-align: center;
	padding: 0 .1rem;
}
.search-content{
	position: relative;
	z-index: 2;
	background: #fff;
}
.search-content li{
	line-height: .62rem;
	padding-left: .2rem;
	border-bottom: 1px solid #eee;
}
</style>