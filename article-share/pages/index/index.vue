<template>
	<view>
		<view class="container">
			<text>left</text>
			<text>content</text>
			<text>right</text>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
	.container {
		@include flex()
		color:$base-color;
	}
</style>