<template>
  <div class="sub-header">
    <p class="main-title">{{ mainTitle }}</p>
    <p class="sub-title">{{ subTitle }}</p>
    <a href="javascript:;" class="more" :style="{ display: display_more }">查看更多</a>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    mainTitle: {
      type: String,
      required: true
    },
    test: {
      type: Number,
      required: true,
      default: 100
    },
    subTitle: {
      type: String
    },
    more: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    display_more() {
      if (this.more) {
        return ''
      } else {
        return 'none'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sub-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 114px;
  width: 1240px;

  .main-title {
    color: #333;
    font-size: 29px;
  }

  .sub-title {
    font-size: 16px;
    color: #999;
    margin-top: 10px;
    margin-left: 34px;
  }

  .more {
    position: absolute;
    display: block;
    right: 21px;
    font-size: 16px;
    color: #999;
    margin-top: 10px;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    margin-top: 9px;
    height: 15px;
    width: 10px;
    background-image: url('@/assets/images/sprites.png');
    background-position: 2px -108px;
  }
}
</style>
