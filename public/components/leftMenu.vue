<template>
  <div class="left_menu">
    <gg-input ph="请输入您的部门" id="department"></gg-input>
    <gg-input ph="请输入您的姓名" id="username"></gg-input>

    <div>
      <a href="javascript:;" class="btn" v-on="click:test">新增</a>
      <a href="javascript:;" class="btn">订餐</a>
      <!-- <a href="javascript:;" class="btn">取消订餐</a> -->
    </div>

  </div>
</template>

<script>
  module.exports = {
    components: {
      'gg-input': require('./input.vue')
    },

    methods: {
      test: function() {
        socket.emit('add user', 'gogo');
      }
    }
  }
</script>

<style lang="stylus">
.left_menu
  width: 300px
  padding-left: 50px
  float: left
  height: 500px

    button
      display: table-cell
      cursor: pointer
      padding: 9px 12px 10px 12px
      margin-bottom: 0
      font-size: 14px
      font-weight: 400
      line-height: 1.42857143
      text-align: center
      white-space: nowrap
      vertical-align: middle
      /*background: #ddd*/
      background: #fff
      border: 1px solid #CDCDCD
      border-left: none
      color: #a9a9a9
      /*color: #fff*/
      border-radius: 0 4px 4px 0
    
    button:hover
      background: #ffe43d
      color: #fff

.btn
  display: inline-block
  padding: 9px 16px
  color: #a9a9a9
  background: #fff
  border-radius: 4px
  border: 1px solid #dcdcdc
  margin-right:20px

.btn:hover
  background: #ffe43d
  color: #fff

</style>
