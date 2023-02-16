<template>
  <div class="main-header">
    <div class="top-bar">
      <ul>
        <li v-for="(item, i) in topBarRes" :key="i">
          <a href="javascript;">{{ item }}</a>
        </li>
      </ul>
    </div>
    <div class="main-bar">
      <a href="javascript;" class="logo"></a>
      <ul>
        <li v-for="(item, i) in mainBarRes" :key="i">
          <a href="javascript;">{{ item }}</a>
        </li>
      </ul>
      <div class="search">
        <i></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <a href="javascript;" class="my-cart"></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topBarRes: ['请先登录', '免费注册', '我的订单', '会员中心', '帮助中心', '在线客服', '手机版'],
      mainBarRes: ['首页', '生鲜', '美食', '餐厨', '电器', '居家', '洗护', '孕婴', '服装 ']
    }
  }
}
</script>

<style lang="less" scoped>
.main-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 182px;

  .top-bar {
    display: flex;
    justify-content: center;
    background-color: #333;
    height: 52px;
    width: 100%;

    ul {
      display: flex;
      justify-content: flex-end;
      width: 1240px;
      height: 100%;
      font-size: 14px;
      line-height: 52px;
    }

    ul li {
      a {
        border-right: #666666 solid 1px;
        color: #dcdcdc;
        padding: 0 15px;
      }

      &:last-child a {
        display: flex;
        align-items: center;
        padding-right: 0;
        border: none;

        &:before {
          content: '';
          display: block;
          width: 11px;
          height: 18px;
          background-image: url('@/assets/images/sprites.png');
          // 原点在左上, 按照标点走正为左上, 负为右下
          background-position: -160px -70px;
          margin-right: 8px;
        }
      }
    }
  }

  .main-bar {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1240px;
    height: 100%;
    // background-color: pink;

    .logo {
      width: 207px;
      height: 70px;
      margin-left: 25px;
      margin-right: 40px;
      background-image: url('@/assets/images/logo.png');
      background-size: cover;
    }

    ul {
      display: flex;
      flex: 1;
      color: #333;
      justify-content: space-between;

      li a {
        padding-bottom: 7px;
      }

      li a:hover {
        color: #27ba9b;
        border-bottom: #27ba9b solid 2px;
      }
    }

    .my-cart {
      position: relative;
      width: 23px;
      height: 23px;
      background-image: url('@/assets/images/sprites.png');
      background-position: -120px -70px;

      &:after {
        content: '2';
        position: absolute;
        top: -6px;
        left: 14px;
        width: 16px;
        height: 14px;
        background-color: #e26237;
        border-radius: 10px;
        font-size: 12px;
        color: #efefef;
        font-weight: 600;
        text-align: center;
        line-height: 14px;
      }
    }

    .search {
      position: relative;
      align-items: center;
      display: flex;
      padding: 2px;
      padding-right: 6px;
      width: 172px;
      height: 30px;
      margin-left: 80px;
      margin-right: 15px;
      border-bottom: #e7e7e7 solid 2px;
      box-shadow: #efefef 2px 2px 3px;
      border-radius: 2px;

      input {
        font-size: 14px;
        width: 100%;
      }

      i {
        display: block;
        margin-right: 4px;
        height: 20px;
        width: 20px;
        background-image: url('@/assets/images/sprites.png');
        background-position: -80px -70px;
      }
    }
  }
}
</style>
