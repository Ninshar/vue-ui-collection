<template>
  <el-dialog title="图片上传弹窗" :visible="visible" width="540px" :before-close="complete">
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      :before-remove="beforeRemove"
      :file-list="fileList"
      :on-change="handleChange"
    >
      <i slot="default" class="el-icon-plus"></i>
    </el-upload>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="complete">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "dialogUpload",
  data() {
    return {
      fileList:[],
      dialogVisible:this.visible
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(file, fileList){
      this.fileList = fileList;
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    complete(){
      this.$emit('complete', this.fileList);
    },
    cancel(){
      this.$emit('cancel');
    }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>