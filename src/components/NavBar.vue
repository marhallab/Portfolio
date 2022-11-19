<template>
    <aside class="navbar">
            <div class="h-auto flex justify-center items-center navbar__logo">MR</div>
            <nav class="h-4/6 flex flex-col justify-center items-center">
                <router-link to="#first" class="navbar__item">
                    <HomeIcon/>
                    <p>Home</p>
                </router-link>
                <router-link to="#skills" class="navbar__item">
                    <SkillIcon/>
                    <p>Skills</p>
                </router-link>
                <router-link to="#about" class="navbar__item">
                    <AboutIcon/>
                    <p>About</p>
                </router-link>
                <router-link to="#skills" class="navbar__item">
                    <WorkIcon/>
                    <p>Experiences</p>
                </router-link>
                <router-link to="#skills" class="navbar__item">
                    <ProjectIcon/>
                    <p>Projects</p>
                </router-link>
                <router-link to="#skills" class="navbar__item">
                    <ContactIcon/>
                    <p>Contact</p>
                </router-link>
            </nav>
            <div class="flex justify-center items-center" style="height:10%;">
                <div class="navbar__arrow">
                    <ArrowDownIcon/>
                    <p>Scroll</p>
                </div>
            </div>
    </aside>
</template>

<script setup lang="ts">
  import HomeIcon from "@/assets/icons/HomeIcon.vue"
  import ArrowDownIcon from "@/assets/icons/ArrowDownIcon.vue"
  import SkillIcon from "@/assets/icons/SkillIcon.vue"
  import AboutIcon from "@/assets/icons/AboutIcon.vue"
  import WorkIcon from "@/assets/icons/WorkIcon.vue"
  import ProjectIcon from "@/assets/icons/ProjectIcon.vue"
  import ContactIcon from "@/assets/icons/ContactIcon.vue"

</script>