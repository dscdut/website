<template>
  <div
    style="
      width: 60px;
      height: 60px;
      top: calc(1.25rem + 25px);
      transform: translate(-50%, -50%);
    "
    :style="{
      left:
        $route.name === 'index' ? 'calc(700% / 12)' : 'calc(1.25rem + 25px)',
    }"
    class="bg-white hover:bg-gray-100 fixed flex items-center justify-center rounded-full mb-5 shadow-md hover:shadow-lg cursor-pointer duration-300"
  >
    <img style="width: auto; height: 20px" src="~/assets/img/logo.svg" />
  </div>
</template>
<script>
export default {}
</script>
