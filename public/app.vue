<template>
  <div v-on="click:closeAll()">
    <gg-header></gg-header>
    <gg-left-menu></gg-left-menu>
    <gg-right-content></gg-right-content>
    <!-- logo -->
    <div class="logo"></div>
  </div>
</template>

<script>
  module.exports = {
    el: '#app',

    components: {
      'gg-header': require('./components/header.vue'),
      'gg-left-menu': require('./components/leftMenu.vue'),
      'gg-right-content': require('./components/rightContent.vue')
    },

    methods: {
      closeAll: function(e) {
        for (var i = 0, arr = this.$children[1].$children, ii = arr.length; i < ii; ++i) {
          arr[i].items = [];
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>