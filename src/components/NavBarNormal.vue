<template>
  <div class="fixed w-auto inset-x-0 top-7" style="z-index: 1">
    <nav class="navbarnormal">
      <router-link to="#first">
        <HomeIcon />
        <p>{{ $t("message.home") }}</p>
      </router-link>

      <router-link to="#about">
        <AboutIcon />
        <p v-html="$t('message.about')"></p>
      </router-link>

      <router-link to="#skills">
        <SkillIcon />
        <p>{{ $t("message.skills") }}</p>
      </router-link>

      <router-link to="#projects">
        <ProjectIcon />
        <p>{{ $t("message.projects") }}</p>
      </router-link>

      <router-link to="#contact">
        <ContactIcon />
        <p>{{ $t("message.contact") }}</p>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import HomeIcon from "@/assets/icons/HomeIcon.vue";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon.vue";
import SkillIcon from "@/assets/icons/SkillIcon.vue";
import AboutIcon from "@/assets/icons/AboutIcon.vue";
import WorkIcon from "@/assets/icons/WorkIcon.vue";
import ProjectIcon from "@/assets/icons/ProjectIcon.vue";
import ContactIcon from "@/assets/icons/ContactIcon.vue";
import MenuIcon from "@/assets/icons/MenuIcon.vue";

var openNav = ref(false);
</script>