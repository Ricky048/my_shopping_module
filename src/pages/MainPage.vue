<template>
  <div class="Main">
    <main_header></main_header>
    <div class="gray-box">
      <scroll_pane></scroll_pane>
    </div>
    <display_panel1></display_panel1>
    <display_panel1></display_panel1>
    <display_panel1></display_panel1>
  </div>
</template>

<script>
import main_header from '@/components/main_header.vue'
import scroll_pane from '@/components/scroll_pane.vue'
import display_panel1 from '@/components/display_panel1.vue'
export default {
  data() {
    return {}
  },
  components: {
    scroll_pane,
    main_header,
    display_panel1
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
}
</style>
