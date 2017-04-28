<template>
	<div>
		<div @click="goback">pageA</div>
	</div>
</template>

<script>
export default {
  name: 'pageA',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>