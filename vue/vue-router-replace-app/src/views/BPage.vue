<template>
  <div>
    <h2>B Page</h2>
    <button @click="$router.push('/c')">push 跳转C页面</button>
    <!-- <button @click="$router.replace('/c')" style="margin: 0 10px">replace 跳转C页面</button> -->
    <button @click="$router.back()" style="margin: 0 10px">back</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      history: window.history.length,
    };
  },
  computed: {},
  methods: {},
  created() {},
};
</script>
<style scoped lang="less"></style>
