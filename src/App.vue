

<template>
  <div>
    <div class="box"></div>
  </div>
</template>

<script setup>
 const boxWidth = '100px'
</script>

<style lang="scss" scoped>
.box{
  height: 100px;
  width: v-bind(boxWidth);
  background: red;
}
</style>