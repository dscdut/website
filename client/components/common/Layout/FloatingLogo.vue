<template>
  <div
    :style="{
      left:
        $route.name === 'index' ? 'calc(700% / 12)' : 'calc(1.25rem + 25px)',
    }"
    class="floating-logo-wrapper bg-white hover:bg-gray-100 fixed z-10 flex items-center justify-center rounded-full shadow-md hover:shadow-lg cursor-pointer duration-300"
  >
    <img style="width: auto; height: 20px" src="~/assets/img/logo.svg" />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.floating-logo-wrapper {
  width: 60px;
  height: 60px;
  top: calc(1.25rem + 25px);
  transform: translate(-50%, -50%);
}
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .floating-logo-wrapper {
    left: calc(1.25rem + 25px) !important;
  }
}
</style>
