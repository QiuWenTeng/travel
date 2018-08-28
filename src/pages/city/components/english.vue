<template>
	<ul class="list">
		<li>A</li>
		<li>B</li>
	</ul>
</template>

<script>
export default{
	
}
</script>

<style scoped>
.list{
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 2rem;
	width: .4rem
}
.list li{
	padding: .1rem;
}
</style>