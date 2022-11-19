<template>
    <main class="w-full">
        <div class="home">
            <section id="first" class="text-center flex flex-col px-8 lg:text-start lg:flex-row justify-center items-center h-screen lg:px-28">
                <img width="300" class="rounded-full home__portrait" src="@/assets/images/me.jpg" alt="">
                <div class="lg:ml-28">
                    <div id="text" class="font-black text-4xl whitespace-nowrap m-0 inline-block color-primary my-8 lg:w-72 uppercase ">MOHAMED RHALLAB</div>
                    <div class="max-w-3xl h-80 text-2xl md:h-fit">A frontend developer who specialize on <VueTyper class="home__headertext" :text='text.typerHeader' :pre-erase-delay=3000 /> top-notch interactif and responsive front-end websites and application</div>
                    <div class="flex justify-center items-center md:mt-6 lg:justify-start">
                        <div>
                            <div class="button">RESUME</div>
                        </div>
                        <div class="ml-6">
                            <div class="button">TEST</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="my-28 px-6 lg:px-28">
                <h2 id="test">About me</h2>
                <div class="px-8 py-8 bg-white rounded-3xl">
                    <p class="">
                        Hello world! my name is <span id="name" class="font-black whitespace-nowrap m-0 inline-block color-primary lg:w-48">Mohamed Rhallab</span>
                    </p>
                    <br>
                    <p>    
                        I'm a front-end web developer with a background in computer systems and network infrastructure. 
                        My 3 years of coding experience has given me a <span class="font-bold color-primary">strong foundation</span> for web development and building complex solutions. 
                        Recently, I graduated from the <span class="font-bold color-primary">Juno College Immersive Web Development Bootcamp</span>.
                        I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!
                    </p>
                </div>
            </section>

            <section id="skills" class="my-28 px-6 lg:px-28">
                <h2>My skills</h2>
                <div class="px-8 py-8 bg-white rounded-3xl">
                    <div class="flex flex-wrap justify-center items-center">
                        <div class="home__skill flex flex-col justify-center items-center" v-for="(skill, idx) in skills" :key="idx">
                            <img :src="skill.icon" :alt="skill.name">
                            <p>{{skill.name}}</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { scrambleSelector } from '@/static/scripts/Scrambler.js'

const text = ref({
    header: "A Frontend focused Web Developer who specialize on <VueTyper :text='textTyperHeader' :shuffle=true /> top-notch interactif and responsive front-end websites and applications",
    typerHeader: ['creating', 'building','maintaining']
});
const skills = ref([
    {
        name: "HTML 5",
        icon: "src/assets/images/skills/html5.png"
    },

    {
        name: "CSS 3",
        icon: "src/assets/images/skills/css3.png"
    },

    {
        name: "Javascript",
        icon: "src/assets/images/skills/javascript.png"
    },

    {
        name: "VueJs (2 & 3)",
        icon: "src/assets/images/skills/vuejs.png"
    },

    {
        name: "Rest Api",
        icon: "src/assets/images/skills/rest-api.png"
    },

    {
        name: "JQuery",
        icon: "src/assets/images/skills/jquery.png"
    },

    {
        name: "Sass",
        icon: "src/assets/images/skills/sass.png"
    },

    {
        name: "Tailwind",
        icon: "src/assets/images/skills/tailwind.png"
    },

    {
        name: "Bootstrap",
        icon: "src/assets/images/skills/bootstrap.png"
    },

    {
        name: "Git",
        icon: "src/assets/images/skills/git.png"
    },

    {
        name: "Scrum",
        icon: "src/assets/images/skills/sprint-iteration.png"
    },

    {
        name: "Seo",
        icon: "src/assets/images/skills/seo.png"
    },

    {
        name: "Responsive Design",
        icon: "src/assets/images/skills/responsive-design.png"
    },

    {
        name: "Web Accessibility",
        icon: "src/assets/images/skills/web-accessibility.png"
    },

])

onMounted(() => {
    scrambleSelector('name','Mohamed Rhallab', 3000);
})

</script>
