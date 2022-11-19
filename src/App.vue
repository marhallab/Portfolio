<script setup>
  import NavBar from "@/components/NavBar.vue"

</script>

<template>
  <div class="flex">
    <NavBar/>
    <router-view class="page"></router-view>
  </div>
</template>