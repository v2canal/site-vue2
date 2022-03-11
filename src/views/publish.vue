<template>
  <div>
    <MavonEditor ref="editor"/>
    <a-layout-footer>
      <a-form-model
          ref="form"
          :rules="rules"
          layout="inline"
          :model="form"
          class="form-model"
      >
        <!--表单标题-->
        <a-form-model-item label="标题" prop="title">
          <a-input v-model="form.title" placeholder="请输入标题"/>
        </a-form-model-item>
        <!--表单分类-->
        <a-form-model-item label="分类" prop="category">
          <a-select style="width: 120px" v-model="form.category" placeholder="未分类">
            <a-select-option value="JavaScript">
              JavaScript
            </a-select-option>
            <a-select-option value="VueJs">
              vue
            </a-select-option>
            <a-select-option value="ReactJS">
              react
            </a-select-option>
            <a-select-option value="network">
              计算机网络
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <!--提交按钮-->
        <a-form-model-item>
          <a-button type="primary" @click="submitForm('form')">
            确认
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-layout-footer>
  </div>
</template>

<script>
import MavonEditor from "@/components/MavonEditor";
import {post} from "@/api";
export default {
  name: 'publish',
  components: {
    MavonEditor,
  },
  data() {
    return{
      top:10,
      form: {
        title: '',
            category: undefined,
            text:'',
            text_html:''
      },
      rules: {
        title: [
          {required: true, trigger: 'blur'}
        ],
            category: [
          {required: true, message: 'Please select Activity zone', trigger: 'change'}
        ]
      }
    }

  },
  methods: {
    change(affixed) {
      console.log(affixed);
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 验证成功，开始发送文章数据
          const {text,text_html}=this.$refs.editor.editorData
          this.form.text=text
          this.form.text_html=text_html
          this.$bus.$emit('publish')
          const {data}= await post('/publish',this.form)
          console.log(data)
        } else {
          return false;
        }
      });
    },
  },
  mounted() {
  }
};
</script>
<style>
.form-model{
  z-index:100 ;
}
</style>
