<template>
  <div>
    <mavon-editor class="my-editor" v-model="editorData.text" @change="changeValue" />
  </div>
</template>
<script>
export default {
  name:'editor',
  data(){
    return{
      editorData:{
        text:'',
        text_html:''
      }
    }
  },
  methods:{
    changeValue(text,text_html){
      this.editorData.text=text
      this.editorData.text_html=text_html
    }
  },
  mounted() {
  }
}
</script>
<style>
.my-editor{
  z-index: 10;
}
</style>