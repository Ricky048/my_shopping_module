<template>
  <div class="good-display">
    <a class="display-img" href="javascript:;">
      <img src="@/assets/images/uploads/fresh_goods_2.jpg" />
    </a>
    <div class="show-text">
      <span class="desc">
        <span class="title">美威 智利原味三文鱼排</span>
        <span class="specs">240g/袋 4片装</span>
        <span class="category">海鲜年货</span>
      </span>
      <span class="money">￥59</span>
    </div>
    <div class="cover">
      <div class="similar"><a href="javascript:;">找相似</a></div>
      <hr />
      <div class="more"><a href="javascript:;">查看更多商品</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.good-display {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 242px;
  height: 304px;
  padding: 13px 25px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 999;

  &:hover {
    border: 2px solid #27ba9b;
    transition: 0.2s all;
    box-shadow: 2px 2px 3px #efefef;

    .cover {
      transform: translateY(-100%);
      transition: 0.2s all;
    }
  }

  .cover {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    bottom: -84px;
    height: 84px;
    width: 242px;
    background-color: #27ba9b;

    hr {
      width: 50%;
      height: 1px;
      background-color: #a9dbcc;
      border: none;
    }
    .similar {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 7px;
      height: fit-content;
      font-size: 18px;

      a {
        color: #fff;
      }
    }

    .more {
      height: 22px;
      margin-top: 8px;
      font-size: 13px;

      a {
        color: #fff;
      }
    }
  }

  .display-img {
    display: block;
    width: 186px;
    height: 186px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .show-text {
    flex: 1;
    width: 184px;
    margin-top: 12px;

    .desc {
      font-size: 16px;
      color: #333;
      &:nth-child(1) {
        width: 166px;
        height: min-content;

        span {
          display: block;
        }
      }
    }

    .money {
      display: block;
      font-family: 'PingFangSC-Regular', sans-serif;
      color: #9a2e1f;
      font-size: 22px;
      font-weight: 500;
    }

    .money:first-letter {
      // first-letter只能够适用于块级元素,所以需要对于非块级元素添加display: block;
      font-size: 17px;
    }
  }
}
</style>
