<template>
  <el-dialog
    :id="id"
    :visible.sync="dialogVisible"
    :title="title"
    :append-to-body="true"
    :fullscreen="fullscreen"
    :destroy-on-close="true"
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
  watch: {
    dialogVisible() {
      if (this.dialogVisible) {
        this.$emit('my-dialog-on')
      } else {
        this.$emit('my-dialog-off')
      }
    },
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
