<template>
	<div>
		<header-show></header-show>
		<search-show></search-show>
		<list-show :hotCities="hotCities" :cityList="cities"></list-show>
		<english-show :cities="cities"></english-show>
	</div>
</template>

<script>
import Header from './components/Header'
import List from './components/list'
import search from './components/search'
import english from './components/english'
import axios from 'axios'
export default{
	components: {
		ListShow: List,
		HeaderShow: Header,
		SearchShow: search,
		EnglishShow: english
	},
	data(){
		return{
			cities: [],
			hotCities: []
		}
	},
	methods: {
		getCityData(data){
			var data = data.data.data;
			this.cities = data.cities;
			this.hotCities = data.hotCities;
		}
	},
	mounted: function(){
		axios.get('../../../../static/city.json').then(this.getCityData);
	}
}
</script>

<style>
	
</style>