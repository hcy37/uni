<template>
	<view class="">
		

	<view class="box" hover-class="a-box">
	<view class="box1"  :hover-stay-time="2000" hover-class="a-box1" hover-stop-propagation>
		啊啊啊
	</view>	
	
	</view>	
	<button hover-stop-propagation size="mini" type="primary" plain>按钮</button>
	<button loading></button>
	<img src="http://destiny001.gitee.io/image/cxk.gif" alt="" mode="aspectFit">
	<img src="http://destiny001.gitee.io/image/cxk.gif" alt="" >
	</view>
</template>

<script>
	
</script>

<style>
	.box{
		width: 100px;
		height: 100px;
		background-color: pink;
	}
	.a-box{
		width: 100px;
		height: 100px;
		background-color: red;
	}
	.box1{
		width: 60px;
		height: 60px;
		background-color: blue;
	}
	.a-box1{
		width: 60px;
		height: 60px;
		background-color: yellow;
	}
</style>