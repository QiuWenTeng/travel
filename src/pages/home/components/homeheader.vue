<template>
  <div>
  	<div class="header">
  		<div class="header-left">
        <span class="iconfont icon-back">&#xe624;</span>  
      </div>
  		<div class="header-input">内容</div>
  		<div class="header-right">
        城市
        <span class="iconfont icon-back">&#xe6aa;</span>  
      </div>
  	</div>
  </div>
</template>

<script>
export default{
	
}
</script>

<style lang="stylus" scoped>
	.header{
    display: flex;
    height: .86rem;
    background-color: #00bcd4;
    line-height: .86rem;
    color: #fff;
  }
  .header-left{
    width: .64rem
    float: left;
    text-align: center;
  }
  .icon-back{
    font-size: .28rem
  }
  .header-input{
    flex: 1
  }
  .header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
  }
		 
</style>


