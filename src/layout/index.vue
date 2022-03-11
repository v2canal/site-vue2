<template>
  <div class="layout">
    <a-layout class="components-layout-demo-responsive">
      <Sider/>
      <a-layout>
        <Header></Header>
        <Main></Main>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Main from './Main'
import Header from './Header'
import Sider from './Sider'
export default {
  name: "layout",
  components: {
    Main,
    Header,
    Sider
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.layout {
  height: max-content;

  .components-layout-demo-responsive {
    height: inherit;
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }

  }

}
</style>