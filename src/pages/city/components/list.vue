<template>
	<div>
		<div class="list" v-for="(itemlist, key) of cityList" :data-key="key">
			<div class="list-item" v-for="item of itemlist" :data-id="item.id">
				{{item.name}}
			</div>
		</div>
	</div>
</template>


<script>
import axios from 'axios'
export default{
	data(){
		return {
			cityList: {}
		}
	},
	methods:{
		setCityData: function(res){
			this.cityList = res.data.data.cities;
		}
	},
	mounted: function(){
		axios.get('../../../../static/city.json').then(this.setCityData)
	}
}
</script>


<style scoped>
	.list-item{
		padding:3% 0 3% 1%;
		border-bottom: 1px solid #ddd
	}
</style>