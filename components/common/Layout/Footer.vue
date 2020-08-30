<template>
  <el-footer
    class="default-footer bg-gray-800 text-white fixed bottom-0 w-full text-center"
    height="40px"
  >
    <p style="line-height: 40px">
      {{ $t('footer') }}
    </p>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
