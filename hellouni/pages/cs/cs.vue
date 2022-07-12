<template>
	<view>
		
		    <uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
		     />
		     <button @click="open">打开日历</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e);
			}
		}
	};
</script>

<style>
</style>