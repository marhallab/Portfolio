<template>
  <aside style="z-index: 1">
    <div class="fixed h-full">
      <div
        :class="
          openNav ? 'navbar-mobile h-full' : 'navbar-mobile -close h-full'
        "
      >
        <div
          class="h-1/6 md:h-auto flex justify-center items-center navbar-mobile__logo"
        >
          MR
        </div>
        <nav class="h-4/6 flex flex-col justify-center items-center">
          <router-link to="#first" class="navbar-mobile__item">
            <HomeIcon />
            <p>{{ $t("message.home") }}</p>
          </router-link>

          <router-link to="#about" class="navbar-mobile__item">
            <AboutIcon />
            <p v-html="$t('message.about')"></p>
          </router-link>

          <router-link to="#skills" class="navbar-mobile__item">
            <SkillIcon />
            <p>{{ $t("message.skills") }}</p>
          </router-link>

          <router-link to="#projects" class="navbar-mobile__item">
            <ProjectIcon />
            <p>{{ $t("message.projects") }}</p>
          </router-link>

          <router-link to="#contact" class="navbar-mobile__item">
            <ContactIcon />
            <p>{{ $t("message.contact") }}</p>
          </router-link>
        </nav>
        <div class="flex justify-center items-center h-1/6">
          <div class="navbar-mobile__arrow">
            <ArrowDownIcon />
            <p>{{ $t("message.scroll") }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed" style="top: 0; right: 0">
      <div class="navbar-mobile__opener" @click="openNav = !openNav">
        <MenuIcon />
      </div>
    </div>
  </aside>
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