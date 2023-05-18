<template>
  <div class="Main">
    <main_header></main_header>
    <div class="gray-box">
      <scroll_pane></scroll_pane>
    </div>
    <sub_header :mainTitle="mainTitle" :subTitle="subTitle" :more="true" />
    <div class="simple-display">
      <simple_display v-for="(item, i) in simpleDisplayImage" :key="i" :content="item"></simple_display>
    </div>
    <display_panel1 />
    <display_panel1 />
    <display_panel1 />
    <bottom_panel />
  </div>
</template>

<script>
import main_header from '@/components/main_header.vue'
import scroll_pane from '@/components/scroll_pane.vue'
import display_panel1 from '@/components/display_panel1.vue'
import sub_header from '@/components/little-components/sub_header.vue'
import simple_display from '@/components/little-components/simple_display.vue'
import bottom_panel from '@/components/bottom_panel.vue'
export default {
  data() {
    return {
      mainTitle: '新鲜好物',
      subTitle: '新鲜出炉 品质靠谱',
      images: [],
      simpleDisplayImage: [
        { image: require('@/assets/images/uploads/new_goods_1.jpg'), title: '睿米无线吸尘器F8', money: 899 },
        { image: require('@/assets/images/uploads/new_goods_2.jpg'), title: '智能环绕3D空调', money: 1299 },
        { image: require('@/assets/images/uploads/new_goods_3.jpg'), title: '广东软软糯米煲仔饭', money: 129 },
        { image: require('@/assets/images/uploads/new_goods_4.jpg'), title: '罗西机械智能手表', money: 3399 }
      ]
    }
  },
  components: {
    scroll_pane,
    main_header,
    display_panel1,
    sub_header,
    simple_display,
    bottom_panel
  },
  methods: {
    getImages() {}
  }
}
</script>

<style lang="less" scoped>
.Main {
  display: flex;
  flex-direction: column;
  align-items: center;

  .gray-box {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-color: #f5f5f5;
  }

  .simple-display {
    display: flex;
    justify-content: space-between;
    width: 1240px;
  }
}
</style>
