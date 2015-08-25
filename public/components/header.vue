<style lang="stylus">
.header
  overflow hidden
  padding 20px 50px
  text-align right
  font-size 16px
  color #999
  strong
    font-size 32px
    color #000
  
  .user
    height 42px
    p
      padding-top 18px
</style>

<template>
  <div class="header">
    <div class="fl user">
      <p>亲~你的姓名未录入，请新增~O(∩_∩)O~</p>
      <!-- <p style="color:#333">前端组&emsp;啸天</p> -->
    </div>
    <div class="fr">
      <span>时间：<em>2015.8.25</em></span>&emsp;&emsp;&emsp;
      <span>订餐人员共计: <strong>{{num}}</strong>人</span>
    </div>
  </div>
</template>

<script>
module.exports = {
  created: function() {
    var self = this;

    this.num = 1;

    socket.on('add user', function(data) {
      console.log(data);
      self.num = data.num;
    });
  },

  data: function () {
    return {
      num: 0
    }
  }
}
</script>
