<template>
  <div class="simple-display">
    <a href="javascript:;" class="top">
      <img :src="content.image" />
    </a>
    <div class="bottom">
      <p class="desc">{{ content.title }}</p>
      <p class="money">￥{{ content.money }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    content: {
      required: true,
      type: Object,
      default() {
        return {
          image: require('@/assets/images/uploads/new_goods_1.jpg'),
          title: '睿米无线吸尘器F8',
          money: 899
        }
      }
    },
    link: {}
  }
}
</script>

<style lang="less" scoped>
.simple-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  // 使用maxwidth或者minwidth代替width，防止被拉伸
  max-width: 304px;
  .top {
    height: 304px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100px;
    width: 100%;
    background-color: #f0f9f4;

    .desc {
      font-size: 20px;
      color: #333;
      font-weight: 500;
      margin-top: 20px;
    }

    .money {
      font-size: 23px;
      margin-bottom: 10px;
      color: #9a2e1f;

      &::first-letter {
        font-size: 17px;
      }
    }
  }
}
</style>
