<template>
  <div id="cont">
    {{name}}
  </div>
</template>

<script>
export default {
  props:['name']
}
</script>

<style lang="less">
  #cont{
    width:50%;
    float:left;
  }
</style>
