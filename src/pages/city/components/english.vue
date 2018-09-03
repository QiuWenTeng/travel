<template>
	<ul class="list">
		<li v-for="(item, key) of cities" @click="getLetter">{{key}}</li>
		<li>B</li>
	</ul>
</template>

<script>
export default{
	props:['cities'],
	methods:{
		getLetter: function(e){
			this.$emit('changeLetter', e.target.innerHTML);
		}
	}
}
</script>

<style scoped>
.list{
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top: 1.5rem;
	right: 0;
	bottom: 0;
	width: .4rem;
}
.list li{
	padding: .05rem;
}
</style>