<template>
	<div class="content" ref="content">
		<div>
			<div class="area">
				<div class="title">选中城市</div>
				<div class="selContent">
					<div class="button-wrap">
						<div class="button">{{currentcity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title">热门城市</div>
				<div class="selContent">
					<div class="button-wrap" v-for="item of hotCities" @click="selectCity(item.name)">
						<div class="button" :data-id="item.id">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="list" v-for="(itemlist, key) of cityList" :data-key="key" :ref="key">
					<div class="title">{{key}}</div>
					<div class="list-item" v-for="item of itemlist" :data-id="item.id" @click="selectCity(item.name)">
						{{item.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
export default{
	data(){
		return {
			currentcity: this.$store.state.currentcity,
		}
	},
	props: ['cityList', 'hotCities', 'letter'],
	methods: {
		selectCity: function(val){
			this.currentcity = val;
			this.$store.commit('changeCity', val);
			this.$router.push('/');
		}
	},
	watch: {
		letter () {
			if (this.letter) {
				const element = this.$refs[this.letter][0];
				this.scroll.scrollToElement(element);
			}
		}
	},
	mounted: function(){
		this.scroll = new Bscroll(this.$refs.content);
	}
}
</script>


<style scoped>
	.content{
		position: absolute;
		top: 1.64rem;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		overflow: hidden;
	}
	.list-item{
		padding:3% 0 3% .15rem;
		border-bottom: .02rem solid #ddd
	}
	.title{
		background: #eee;
		padding-left: .15rem;
		line-height: .6rem;
		font-size: .18rem;
	}
	.selContent{
		padding: .15rem .5rem .15rem .15rem;
		overflow: hidden;
	}
	.button-wrap{
		width: 33.33%;
		float: left;
	}
	.button{
		margin: 3%;
		text-align: center;
		padding: .15rem 0;
		border: .02rem solid #ddd;
	}
</style>