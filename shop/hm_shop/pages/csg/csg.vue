<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view 
			@click="dj(index)"
			:class="active===index?'active':''" 
			:key="index" v-for="(item,index) in msg">
			{{item.cat_name}}
			</view>
			</scroll-view>
		<scroll-view class="right" scroll-y="true" :style="{height:wh+'px'}":scroll-top="scrollTop">
			<view class="cate-lv2" v-for="(item2,index2) in msg2":key="index2">
				<view class="cate-lv2-title">{{item2.cat_name}}</view>
				<view class="cate-lv3-list">
					<view class="cate-lv3-item" v-for="(item3,index3) in item2.children" :key="index3">
						<img :src="item3.cat_icon" alt="">
						<text>{{item3.cat_name}}</text>
					</view>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				// flag:false,
				// active:flag,
				msg:[],
				msg2:[],
				active:0,
				wh:0,
				scrollTop:0
			}
		},methods:{
			async getd(){
				const res=await this.$myRequest({
				url:'/api/public/v1/categories'
			})
			this.msg=res.data.message
			this.msg2=this.msg[0].children
			console.log(this.msg2);
			},dj(id){
				this.active=id
				// console.log(this.msg[id].children);
				this.msg2=this.msg[id].children
				this.scrollTop=this.scrollTop===0?1:0
			}
		},
		onLoad(){
			const sysInfo=uni.getSystemInfoSync()
			this.wh=sysInfo.windowHeight
			this.getd()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			.cate-lv2{
				.cate-lv2-title{
			font-size: 12px;
			font-weight: bold;
			text-align: center;
			padding: 15px 0;
			}	
			.cate-lv3-list {
			  display: flex;
			  flex-wrap: wrap;
			
			  .cate-lv3-item {
			    width: 33.33%;
			    margin-bottom: 10px;
			    display: flex;
			    flex-direction: column;
			    align-items: center;
			
			    image {
			      width: 60px;
			      height: 60px;
			    }
			
			    text {
			      font-size: 12px;
			    }
			  }
			}
		}
		}
		
	}
</style>