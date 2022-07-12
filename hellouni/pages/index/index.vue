<template>
	<view class="content">
		<test :title="title" @ex="get"></test>
		<Ba></Ba>
		<Ca></Ca>
		<view>
		    <uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
		     />
		     <button @click="open">打开日历</button>
		</view>
	</view>
</template>

<script>
	
	import test from '../../components/test.vue'
	import Ba from '../../components/b.vue'
	import Ca from '../../components/c.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
		console.log('加载了...');
		},
		onShow(){
			console.log('页面显示了');	
		},
		onReady(){
			console.log('页面初始渲染完成');
		},
		onHide(){
			console.log('页面隐藏了')
		},
		methods: {
			get:(val)=>{
				console.log(val);
			}
		},components:{
			test,
			Ba,
			Ca
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
