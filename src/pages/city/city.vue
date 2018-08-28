<template>
	<div>
		<header-show></header-show>
		<search-show></search-show>
		<list-show></list-show>
		<english-show></english-show>
	</div>
</template>

<script>
import Header from './components/Header'
import List from './components/list'
import search from './components/search'
import english from './components/english'
export default{
	components: {
		ListShow: List,
		HeaderShow: Header,
		SearchShow: search,
		EnglishShow: english
	}
}
</script>

<style>
	
</style>