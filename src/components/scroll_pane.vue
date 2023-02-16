<template>
  <div class="scroll-pane" @mouseenter="stop()" @mouseleave="start()">
    <!-- 最左边的工具栏 -->
    <div class="left-panel" ref="box">
      <ul>
        <li v-for="(item, index) in goods_list" :key="index">
          <a href="#">{{ item.title }}</a>
          <a href="#" v-for="(sub_item, index) in item.sub_title" :key="index">{{ sub_item }}</a>
        </li>
      </ul>
    </div>
    <!-- 轮播图的图片 -->
    <ul id="banner-images" ref="banner">
      <li v-for="(item, i) in bannerRes" :key="i"><img :src="item" /></li>
    </ul>
    <!-- 底下的点 -->
    <ul class="dots" ref="dot">
      <li v-for="(item, index) in bannerRes" :key="index" @click="checkImg(index)"></li>
    </ul>
    <!-- 前进后退两个按键 -->
    <span class="forward" @click="forward()"></span>
    <span class="back" @click="back()"></span>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
export default {
  data() {
    return {
      // 商品列表单
      goods_list: [
        { title: '生鲜', sub_title: ['水果', '蔬菜'] },
        { title: '美食', sub_title: ['面点', '干果'] },
        { title: '餐厨', sub_title: ['数码产品'] },
        { title: '电器', sub_title: ['床品', '四件套', '被枕'] },
        { title: '居家', sub_title: ['奶粉', '玩具', '辅食'] },
        { title: '洗护', sub_title: ['洗发', '洗护', '美妆'] },
        { title: '孕婴', sub_title: ['奶粉', '婴儿服装'] },
        { title: '服饰', sub_title: ['女装', '男装'] },
        { title: '杂货', sub_title: ['户外', '图书'] },
        { title: '品牌', sub_title: ['品牌制造'] }
      ]
    }
  },
  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      required: true,
      default: 2500
    }
  },
  methods: {},
  setup(props) {
    const banner = ref(null)
    const dot = ref(0)
    let dots = []
    let timer
    let x = 0

    const bannerRes = [require('@/assets/images/uploads/banner_1.jpg'), require('@/assets/images/uploads/banner_2.jpg'), require('@/assets/images/uploads/banner_3.jpg'), require('@/assets/images/uploads/banner_4.jpg'), require('@/assets/images/uploads/banner_5.jpg')]

    // 缓步动画公式
    function animate(obj, target, callback) {
      //调用时callback()
      clearInterval(obj.timer)
      obj.timer = setInterval(function () {
        // 缓动动画公式:(目标值-现在的位置) / 10
        //  把步长值改为整数,避免出现没有到达target,需要往上取整
        var step = (target - obj.offsetLeft) / 10
        step = step >= 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
          //停止
          clearInterval(obj.timer)
          //回调函数写到定时器结束
          if (callback) {
            callback()
          }
        }
        //把每次加一这个步长值改为一个慢慢变小的值
        obj.style.left = obj.offsetLeft + step + 'px'
      }, 20)
    }

    // 循环运动方法
    function loop() {
      x < bannerRes.length - 1 ? x++ : (x = 0)
      animate(banner.value, -1240 * x)
      for (let i = 0; i < dots.length; i++) {
        dots[i].style.opacity = 0.43
      }
      dots[x].style.opacity = 1
    }

    // 两个按钮的方法
    function forward() {
      loop()
    }

    function back() {
      if (x > 0) {
        x--
      } else {
        x = bannerRes.length - 1
        console.log(banner.value)
        console.log('ok')
      }
      animate(banner.value, -1240 * x)
      for (let i = 0; i < dots.length; i++) {
        dots[i].style.opacity = 0.43
      }
      dots[x].style.opacity = 1
      // x != 0 ? (dots[x].style.opacity = 1) : (dots[0].style.opacity = 1)
    }

    function stop() {
      clearInterval(timer)
    }

    function start() {
      timer = setInterval(loop, props.delay)
    }

    // 点击小圆点切换按钮的方法
    function checkImg(index) {
      x = index
      console.log(index + 1)
      animate(banner.value, -1240 * index)
      for (let i = 0; i < dots.length; i++) {
        dots[i].style.opacity = 0.43
      }
      dots[index].style.opacity = 1
    }

    onMounted(() => {
      // 必须要使用cloneNode，默认不会为true
      // const firstChild = banner.value.children[0].cloneNode(true)
      // banner.value.appendChild(firstChild)
      dots = dot.value.children
      timer = setInterval(loop, props.delay)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })

    // 使用ref获取到的元素必须在这里return出去
    return {
      banner,
      bannerRes,
      forward,
      back,
      stop,
      start,
      dot,
      checkImg
    }
  }
}
</script>

<style lang="less" scoped>
.scroll-pane {
  position: relative;
  display: flex;
  height: 500px;
  width: 1240px;
  overflow: hidden;

  .left-panel {
    position: relative;
    height: 100%;
    width: 250px;
    background-color: #000000;
    opacity: 0.8;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;

      li {
        flex: 1;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 20px 0 36px;

        &::after {
          content: '';
          position: absolute;
          right: 18px;
          width: 6px;
          height: 12px;
          background-color: #fff;
          background: url('@/assets/images/sprites.png');
          background-position: -80px -110px;
        }
      }

      li:hover {
        background-color: #27ba9b;
      }

      a {
        color: #fff;
        font-size: 16px;
        font-family: 'PingFangSC-Regular', sans-serif;

        &:not(:first-child) {
          font-size: 14px;
          margin-left: 10px;
        }

        &:first-child {
          margin-right: 5px;
        }
      }
    }
  }

  .box {
    height: 100px;
    width: 100px;
    background-color: #000;
  }

  span {
    position: absolute;
    align-self: center;
    width: 45px;
    height: 45px;
    background-color: #000000;
    opacity: 0.2;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }

  .back {
    left: 260px;
    background-image: url('@/assets/images/sprites.png');
    background-position: 12px -60px;
  }

  .forward {
    right: 10px;
    background-image: url('@/assets/images/sprites.png');
    background-position: -21px -60px;
  }

  .dots {
    display: flex;
    position: absolute;
    left: 680px;
    bottom: 33px;

    li {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.43;
      margin-left: 15px;
      cursor: pointer;

      &:nth-child(1) {
        opacity: 1;
      }
    }
  }

  #banner-images {
    display: flex;
    position: absolute;
    z-index: -1;

    img {
      height: 500px;
      width: 1240px;
    }
  }
}
</style>
