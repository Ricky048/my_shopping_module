<!-- 存放展示面板 -->
<template>
  <div class="panel1">
    <div class="top">
      <p class="title">生鲜</p>
      <ul>
        <li v-for="item in top" :key="item">
          <a href="javascript;">{{ item }}</a>
        </li>
        <li>
          <a class="all" href="javascript;">查看全部</a>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <a href="javascript;" class="left">
        <img src="@/assets/images/uploads/fresh_goods_cover.png" />
      </a>
      <div class="right">
        <good_display v-for="item in 8" :key="item"></good_display>
      </div>
    </div>
  </div>
</template>

<script>
import good_display from './little-components/good_display.vue'
export default {
  components: {
    good_display
  },
  data() {
    return {
      top: ['水果', '蔬菜', '肉禽蛋', '裤装', '衬衫', 'T恤', '内衣']
    }
  }
}
</script>

<style lang="less" scoped>
.panel1 {
  position: relative;
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  width: 1240px;
  height: 673px;
  // overflow: hidden;

  .left {
    display: block;
    height: 610px;
    width: 242px;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 34px;
    padding-bottom: 20px;

    p {
      font-size: 29px;
      letter-spacing: 0px;
      color: #333333;
    }

    ul {
      margin-top: 10px;
      display: flex;
      align-items: center;

      li {
        display: flex;
        margin-left: 13px;

        a {
          display: flex;
          justify-content: center;
          width: fit-content;
          height: 30px;
          padding: 0 5px;
          color: #333333;
          font-size: 16px;
          &:hover {
            background-color: #27ba9b;
          }
        }

        &:last-child {
          position: relative;
          margin-left: 65px;
          margin-right: 24px;
          a {
            color: #999999;

            &:hover {
              background-color: transparent;
            }
          }

          &:after {
            content: '';
            position: absolute;
            display: block;
            left: 90px;
            transform: translateY(9px);
            width: 8px;
            height: 15px;
            background-image: url('@/assets/images/sprites.png');
            background-position: 0 -108px;
          }
        }
      }
    }
  }

  .bottom {
    display: flex;
  }
}
</style>
