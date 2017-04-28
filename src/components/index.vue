<template>
  <div id="animateBox">
    <div class="pageBox">
      <router-view></router-view>
    </div>
    <ul class="tab">
      <li><router-link to="home">主页</router-link></li>
      <li><router-link to="classify">分类</router-link></li>
      <li><router-link to="order">订单</router-link></li>
      <li><router-link to="my">我的</router-link></li>
    </ul>
  </div>
</template>
<script>
  
</script>
<style>
.pageBox{ position:absolute; bottom: 80px; width: 100%; top: 0; overflow-y: scroll; -webkit-overflow-scrolling: touch; }
.tab{ text-align: center; width: 100%; height: 80px; line-height: 80px; font-size: 28px; position: absolute; bottom: 0; left: 0; }
.tab li{ width: 25%; float: left;}
.tab li a{ display: block; width: 100%; height: 100%; }
</style>