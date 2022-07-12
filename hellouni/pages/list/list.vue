<template>
	<view class="box">
		这是列表页
		<ul>
			<li :key="index" v-for="(item,index) in list">{{item}}</li>
		</ul>
		<ul>
			<li :key="index" v-for="(item,index) in list">{{item}}</li>
		</ul>
		<!-- <button @click="put">刷新</button> -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				list:[]
			}
		},methods:{
			put:function(){
				uni.startPullDownRefresh()
			}
		},
		onPullDownRefresh(){
			this.list=['前端','后端','UI']
			console.log('刷新了');
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},3000)
		},
		onReachBottom(){
			console.log('到底了');	
			this.list=[...this.list,...['前端','后端','UI']]
		},onLoad(o){
			console.log(o);
		}
	}
</script>

<style>
	.box{
		height: 100px;
		line-height: 100px;
	}
</style>