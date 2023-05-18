<template>
  <div class="bottom">
    <div class="top">
      <div class="tag" v-for="(item, i) in tag" :key="i">
        <!-- :style使用驼峰命名法对于css进行重写，相当于需要操作DOM -->
        <div class="logo" :style="{ backgroundPosition: +(-65 * i) + 'px' + ' 0' }"></div>
        <div>{{ item }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="content">
        <ul class="links">
          <li v-for="(item, i) in links" :key="i">
            <a :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
        <div>CopyRight @ 小兔鲜儿"</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: ['价格亲民', '物流快捷', '品质新鲜'],
      links: [
        { title: '关于我们', link: 'https://baike.baidu.com/item/%E5%85%B1%E6%A8%A1%E5%99%AA%E5%A3%B0/10081067' },
        { title: '帮助中心', link: 'javascript;' },
        { title: '售后服务', link: 'javascript;' },
        { title: '配送与接收', link: 'javascript;' },
        { title: '商务合作', link: 'javascript;' },
        { title: '搜索推荐', link: 'javascript;' },
        { title: '友情链接', link: 'javascript;' }
      ]
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.bottom {
  height: 340px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #333;

  .top {
    flex: 1;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    color: white;
    width: calc(1390 / 1920 * 100%);
    border-bottom: #434343 2px solid;

    .tag {
      font-size: 28px;
      display: flex;
      align-items: center;
      gap: 19px;

      .logo {
        height: 58px;
        width: 58px;
        background-image: url('@/assets/images/sprites.png');
      }
    }
  }

  .bottom {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #999999;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      width: 538px;

      .links {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    a {
      color: #999999;
    }
  }
}
</style>
