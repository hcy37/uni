<template>
	<view class="">
		<input class="uni-input" v-model="xx">
		<button size="mini" type="primary" @click="send">提交</button>
		<button @click="clear">清空数据</button>
	<ul>
		<li :key="index" v-for="(item,index) in msg">
			<span>{{item}}</span>
		</li>
	</ul>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				xx:'',
				msg:[]
			}
			
		},
		methods:{
			send:function(){
				
				this.msg.push(this.xx)
				console.log(JSON.stringify(this.msg));
				uni.setStorageSync('title',JSON.stringify(this.msg))
				this.xx=''
				
		},clear(){
			uni.clearStorage()
		}
	},mounted(){
		uni.getStorage({key:'title',
							success:function(res){
								console.log(res.data);
								this.msg=res.data
								console.log(this.msg);
							}	
				})
	}
	}
</script>

<style>
	input{
		border: 2rpx solid pink;
		width: 400rpx;
	}
</style>