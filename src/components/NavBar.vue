<template>
  <nav
    id="navbar"
    class="navbar fixed w-auto inset-x-0"
    :style="{ top: navbarTop }"
  >
    <router-link
      to="#first"
      class="navbar__item"
      :class="{ ' -active': activeSection === 'first' }"
    >
      <HomeIcon />
      <p>{{ $t("message.home") }}</p>
    </router-link>

    <router-link
      to="#about"
      class="navbar__item"
      :class="{ ' -active': activeSection === 'about' }"
    >
      <AboutIcon />
      <p v-html="$t('message.about')"></p>
    </router-link>

    <router-link
      to="#skills"
      class="navbar__item"
      :class="{ ' -active': activeSection === 'skills' }"
    >
      <SkillIcon />
      <p>{{ $t("message.skills") }}</p>
    </router-link>

    <router-link
      to="#projects"
      class="navbar__item"
      :class="{ ' -active': activeSection === 'projects' }"
    >
      <ProjectIcon />
      <p>{{ $t("message.projects") }}</p>
    </router-link>

    <router-link
      to="#contact"
      class="navbar__item"
      :class="{ ' -active': activeSection === 'contact' }"
    >
      <ContactIcon />
      <p>{{ $t("message.contact") }}</p>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import HomeIcon from "@/assets/icons/HomeIcon.vue";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon.vue";
import SkillIcon from "@/assets/icons/SkillIcon.vue";
import AboutIcon from "@/assets/icons/AboutIcon.vue";
import WorkIcon from "@/assets/icons/WorkIcon.vue";
import ProjectIcon from "@/assets/icons/ProjectIcon.vue";
import ContactIcon from "@/assets/icons/ContactIcon.vue";
import MenuIcon from "@/assets/icons/MenuIcon.vue";
import { init } from "emailjs-com";

var openNav = ref(false);
var navbarTop = ref("1.75rem");
const activeSection = ref(null);

// Hooks
onMounted(() => {
  initNavbar();
});

// Function
const initNavbar = () => {
  let prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbarTop.value = "1.75rem";
    } else {
      navbarTop.value = "-100px";
    }
    prevScrollpos = currentScrollPos;
  });
};
</script>