<script setup>
import NavBarNormal from "@/components/NavBarNormal.vue";
</script>

<template>
  <div class="flex">
    <NavBarNormal />
    <router-view class="page"></router-view>
  </div>
</template>