<template>
  <el-dialog
    :id="id"
    :visible.sync="dialogVisible"
    :title="title"
    :append-to-body="true"
    :fullscreen="fullscreen"
  >
    <slot />
  </el-dialog>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Dialog',
    },
    id: {
      type: String,
      required: true,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  created() {
    this.$root.$on('my-dialog-show', (id) => {
      if (this.id === id) {
        this.dialogVisible = true
      }
    })
    this.$root.$on('my-dialog-hide', (id) => {
      if (this.id === id) {
        this.dialogVisible = false
      }
    })
  },
}
</script>
