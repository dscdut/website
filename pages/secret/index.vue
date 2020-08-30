<template>
  <el-main>
    <h1 class="m-3 text-purple">
      {{ $t('secret-text') }}
    </h1>
  </el-main>
</template>
<script>
export default {
  middleware: 'authRequired',
}
</script>
