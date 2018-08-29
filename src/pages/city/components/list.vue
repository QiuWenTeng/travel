<template>
	<div>
		<div class="title">选中城市</div>
		<div class="selContent">
			<div class="button-wrap">
				<div class="button">{{currentcity}}</div>
			</div>
		</div>
		<div class="title">热门城市</div>
		<div class="selContent">
			<div class="button-wrap" v-for="item of hotCities" @click="selectCity(item.name)">
				<div class="button" :data-id="item.id">{{item.name}}</div>
			</div>
		</div>
		<div class="list" v-for="(itemlist, key) of cityList" :data-key="key">
			<div class="title">{{key}}</div>
			<div class="list-item" v-for="item of itemlist" :data-id="item.id" @click="selectCity(item.name)">
				{{item.name}}
			</div>
		</div>
		<div class="title"></div>
	</div>
</template>


<script>
import axios from 'axios'
export default{
	data(){
		return {
			currentcity: this.$store.state.currentcity,
			cityList: {},
			hotCities: []
		}
	},
	methods: {
		setCityData: function(res){
			this.cityList = res.data.data.cities;
			this.hotCities = res.data.data.hotCities;
		},
		selectCity: function(val){
			this.currentcity = val;
			this.$store.commit('changeCity', val);
			this.$router.push('/');
		}
	},
	mounted: function(){
		axios.get('../../../../static/city.json').then(this.setCityData)
	}
}
</script>


<style scoped>
	.list-item{
		padding:3% 0 3% .2rem;
		border-bottom: .02rem solid #ddd
	}
	.title{
		background: #eee;
		padding-left: .2rem;
		line-height: .6rem;
		font-size: .18rem;
	}
	.selContent{
		padding: .2rem;
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