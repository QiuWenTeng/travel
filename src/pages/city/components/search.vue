<template>
	<div>
		<div class="search">
			<input v-model="keyword" type="text" name="cityname" placeholder="输入城市名或者拼音">
		</div>
		<div class="search-content" v-show="isshow">
			<ul>
				<li v-for="item of list" @click="changeCity(item.name)">
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
			list: [],
			currentCity: this.$store.state.currentCity
		}
	},
	watch: {
		keyword () {
			var result = [];
			if (this.keyword != '') {
				for (let i in this.cities) {
					this.cities[i].forEach((val, index) => {
						if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
							result.push(val);
						}
					})
				}
				this.list = result;
			} else {
				this.list = [];	
			}
		}
	},
	computed: {
		isshow: function(){
			return this.list.length;
		}
	},
	methods: {
		changeCity: function(val){
			this.$store.commit('changeCity', val);
			this.$router.push('/');
		}
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
	position: absolute;
	z-index: 2;
	background: #f4f4f4;
	top: 1.65rem;
	right: 0;
	left: 0;
	bottom: 0;
}
.search-content li{
	line-height: .62rem;
	padding-left: .2rem;
	border-bottom: 1px solid #eee;
	background: #fff;
}
</style>