<template>
  <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
  >
    <div class="logo"/>
    <a-menu  theme="dark" mode="inline" :default-selected-keys="['4']">
      <a-menu-item  key="1">
        <router-link to="/publish">发布文章</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/edit">修改文章</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/message">编辑留言板</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="user"/>
        <span class="nav-text">nav 4</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "Sider",
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    handleClick(a,b,c){
      console.log(a,b,c)
    }
  },
  mounted() {
    this.$bus.$on('fetchText',({text,text_html})=>{
      this.form.text=text
      this.form.text_html=text_html
    })
  }
}
</script>

<style  lang="scss">
.nav-text{
  a{
    color:#a6adb4;
    &:hover{
      color:white;
    }
  }

}
</style>