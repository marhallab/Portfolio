<script setup>
import NavBar from "@/components/NavBar.vue";
import NavBarMobile from "@/components/NavBarMobile.vue";
</script>

<template>
  <div class="flex">
    <NavBar />
    <NavBarMobile />
    <router-view class="page"></router-view>
  </div>
</template>