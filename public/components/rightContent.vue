<template>
  <div class="right_content">
    <div class="talbe_list">
    <h1 class="title">货车帮订餐人员列表</h1>
    <div class="list end" id="JS_list">
      <div class="no_item" v-show="users.length == 0">
        <p>今天有要订餐的亲没~\(≧▽≦)/~</p>
      </div>
      <div v-repeat="department:departments" class="item" id="{{department.id}}">
        <div class="department"><span>{{department.name}}</span></div>
        <div class="members"><p v-repeat="user:department.users"><span>{{user.name}}</span></p></div>
      </div>
    </div>
  </div>
  <div class="bubble" style="width: 232px;">
    <div class="item" v-repeat="item:items" v-my-directive="item"><p><i class="circle"></i><strong>{{item.name}}</strong>确认订餐</p></div>
  </div>
</template>

<script>
var Vue = require('vue');

Vue.directive('my-directive', {
  bind: function() {
    // 做绑定的准备工作
    // 比如添加事件监听器，或是其他只需要执行一次的复杂操作
    var $this = $(this.el);
    
    //添加抛物线功能
    setTimeout(function() {
      var i = $this.find('i'),
        _offset = i.offset();

      i.fly({
        start: {
            left: _offset.left,
            top: _offset.top,
        },
        end: {
          left: $('.end').offset().left + 100,
          top: $('.end').offset().top,
          width: 0,
          height: 0
        },
        onEnd: function() {
          $this.fadeOut(500);
          i.remove();
        }
      });
    }, 1000);

  },
  update: function(value) {
    // 根据获得的新值执行对应的更新
    // 对于初始值也会被调用一次
  }
});

module.exports = {
  created: function() {
    var self = this;

    socket.on('add item', function(data) {
      self.items.push(data);
    });
  },

  data: function() {
    return {
      items: [{name: 'gogo'}],
      departments: [{id: 1, name: 'web前端', users: [{name: 'gogo'}, {name: '恒'}]}, {id: 2, name: '平台部', users: [{name: 'chu'}, {name: 'ding'}]}]
    }
  }
}
</script>

<style>
.right_content {
  overflow: hidden;
  padding: 0 50px 50px 50px; }

.talbe_list {
  margin: 0 auto;
  /*margin-top: 100px;*/
  /*width: 400px;*/
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  border-bottom: 1px solid #dcdcdc; }
  .talbe_list .title {
    background: #222;
    padding: 10px;
    border-bottom: 1px solid #a2a2a2;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    text-align: center; }
  .talbe_list .list {
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
    border-radius: 0 0 4px 4px;
    padding: 0 10px; }
  .talbe_list .item {
    overflow: hidden;
    background: #fff;
    padding: 15px 0 10px 0;
    border-bottom: 1px solid #dcdcdc; }
  .talbe_list .no_item {
    height: 400px;
    line-height: 400px;
    font-size: 24px;
    color: #999;
    text-align: center; }
  .talbe_list .item:last-child {
    border-radius: 0 0 4px 4px;
    border-bottom: none; }
  .talbe_list .department {
    float: left;
    width: 30%;
    text-align: center; }
  .talbe_list .members {
    width: 70%;
    float: left; }
    .talbe_list .members p {
      position: relative;
      margin-bottom: 5px;
      padding-left: 10px;
      padding-top: 3px;
      padding-bottom: 3px;
      height: 20px;
      -webkit-animation: members 2s; }
      .talbe_list .members p span {
        position: absolute;
        left: 80%;
        -webkit-animation: members_span 1s forwards; }
@-webkit-keyframes members {
  50% {
    background: #ffe43d; } }
@-webkit-keyframes members_span {
  100% {
    left: 0; } }
  .talbe_list .show {
    background-color: #ffe43d; }

.bubble {
  position: absolute;
  overflow: hidden;
  top: 130px;
  right: 0;
  width: 200px;
  /*border:1px solid #dcdcdc;*/
  padding: 10px 0;
  z-index: 200; }
  .bubble .item {
    box-sizing: border-box;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background: #fff;
    color: #bbb;
    text-align: center;
    border-radius: 4px;
    border: #dcdcdc 1px solid;
    margin-left: 232px;
    -webkit-animation: bubble_item 0.2s forwards; }
@-webkit-keyframes bubble_item {
  100% {
    margin-left: 0px; } }
  .bubble strong {
    color: #333;
    font-weight: normal;
    margin-right: 2px; }

.circle {
  width: 10px;
  height: 10px;
  background: #ffe43d;
  border: #ccc 1px solid;
  display: inline-block;
  border-radius: 50%;
  /*position: absolute;*/
  z-index: 999;
  margin-right: 2px; }

.end {
  position: relative; }
  .end .add_one {
    position: absolute;
    font-size: 24px;
    color: red;
    opacity: 0;
    display: inline-block;
    top: 0px;
    -webkit-animation: myfirst 0.5s; }
@-webkit-keyframes myfirst {
  0% {
    opacity: 0; }
  50% {
    opacity: 1; }
  100% {
    opacity: 0;
    top: -40px; } }
  

</style>

