<template>
  <div class="input_style mb_30">
    <input type="text" placeholder="{{ph}}" v-on="click:getdata($event)" value="{{department}}"  />
        <!-- <button>选择<span class="caret"></span></button> -->
    <div class="sub_menu" v-show="items.length > 0">
      <a v-repeat="item:items" v-on="click:getid(item, $event)" href="javascript:;" data-id="{{item.id}}">{{item.department}}</a>
    </div>
  </div>
</template>

<script>
var DATA = [
  {
    department : 'web前端',
    id : 'web_1'
  },
  {
    department : 'java',
    id : 'java_1'
  },
  {
    department : '行政',
    id : 'administration_1'
  }
];


module.exports = {
  replace: true,

  props: ['ph', 'id'],

  created: function() {
  },

  data: function() {
    return {
      items: [],
      id: null,
      department: null
    }
  },

  methods: {
    getdata: function(e) {
      e.stopPropagation();
      this.items = DATA;
    },

    getid: function(item, e) {
      e.stopPropagation();
      this.items = [];

      this.id = item.id;
      this.department = item.department;
    }
  }
}
</script>

<style lang="stylus">
  .input_style
    display: table
    position: relative
    input
      display: table-cell
      width: 250px
        padding: 10px
        border: 1px solid #CDCDCD
        vertical-align: middle
        border-radius: 4px

    .sub_menu
      width: 100%
      margin-top: 5px 
      box-sizing : border-box
      position: absolute
      padding: 5px 0
      font-size: 14px
      background: #fff
      border-radius: 4px
      border:1px solid #dcdcdc
      z-index: 1000
      -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175)
      a
        color: #a9a9a9
        display: block
        padding: 4px 20px
        font-weight: 400
        line-height: 1.42857143
        white-space: nowrap    
      
      a:hover
        background: #f5f5f5
        color: #333
</style>
