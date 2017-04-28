<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  // beforeRouteUpdate (to, from, next) {
  //   let isBack = this.$router.isBack
  //   if (isBack) {
  //     this.transitionName = 'slide-right'
  //   } else {
  //     this.transitionName = 'slide-left'
  //   }
  //   this.$router.isBack = false
  //   next()
  // },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  },
  mounted: function() {
    this.getCustomers();
    this.getList();
  },
  methods:{
    getCustomers: function() {
      var vm = this
      vm.$http.jsonp('https://www.52shangou.com/api/shop.do?ak=aMdi6T4a2kA%3D&dt=1&lid=1211549&md=1&pc=zx_1&pos=&sn=4100d21a1bb67d8815a34efb03ebd349&tsid=8ED8028E-D05C-4129-9780-6B5C2C971076')
        .then((response) => {
          console.log(response.data);
          console.log(response.data.extra.cityname)
          this.msg=response.data.extra.cityname;
        })
    },
    getList: function(){
      var vm = this
      vm.$http.jsonp('https://www.52shangou.com/api/locate.do?ak=aMdi6T4a2kA%3D&dt=1&lat=30.327653&lng=120.172275&md=1&nlid=0&pc=zx_2&sn=9bcb7e7935e0d723dc982faff2e61743&tsid=E020420E-55D7-4500-8E73-C0E32101507Cs')
        .then((response) => {
          console.log(response.data);
        })
    }
  }
}
</script>

<style scoped>
  .child-view {
  position: absolute;
  width:100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
  .header {
    position:absolute;
    height:44px;
    background:#0058f1;
    width:100%
  }
</style>