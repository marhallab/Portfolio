<template>
    <main class="w-full">
        <div class="home">
            <section id="first" class="text-center flex flex-col px-8 lg:text-start lg:flex-row justify-center items-center h-screen lg:px-16">
                <img width="300" class="rounded-full home__portrait" src="@/assets/images/me.jpg" alt="">
                <div class="lg:ml-28">
                    <div id="text" class="font-black text-3xl whitespace-nowrap m-0 inline-block color-primary my-8 mt-16 lg:w-72 lg:text-5xl uppercase ">MOHAMED RHALLAB</div>
                    <div class="max-w-3xl h-52 text-2xl md:h-fit">A frontend developer who specialize on <VueTyper class="home__headertext" :text='text.typerHeader' :pre-erase-delay=3000 /> top-notch interactive and responsive front-end websites and application</div>
                    <div class="flex flex-col justify-center items-center md:mt-6 md:flex-row  lg:justify-start">
                        <div class="flex">
                            <div class="button">RESUME</div>
                            <router-link to="#contact" class="ml-4 button">
                                Contact
                            </router-link>
                        </div>
                        <div class="md:ml-12 flex">
                            <a href="">
                                <img width="65" src="@/assets/images/socials/github.png" alt="Github logo">
                            </a>
                            <a href="">
                                <img class="ml-4" width="65" src="@/assets/images/socials/linkedin.png" alt="Linkedin Logo">
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="my-28 px-6 lg:px-16">
                <h2 id="test">About me</h2>
                <div class="px-8 py-8 bg-white rounded-3xl">
                    <p class="">
                        Hello world! my name is <span id="name" class="font-black whitespace-nowrap m-0 inline-block color-primary lg:w-48">Mohamed Rhallab</span>
                    </p>
                    <br>
                    <p> My years of experience as a front-end developer has given me strong foundation for<span class="font-bold color-primary"> building accessible & user-friendly</span> websites and applications.
                    </p>
                    <br>
                    <p>
                        I had the chance to<span class="font-bold color-primary"> work in different enviroments</span> (as a solo dev, in a team of devs or handling the entirety of the front-end on my own) and on differents compagnies types (<span class="font-bold color-primary">web agency & Saas</span>) which 
                        has given me a 360-view on the works of a web developer. 
                    </p>
                    <br>
                    <p>I am passionate about coding and solving problems through code, and I am excited to work with you!</p>
                </div>
            </section>

            <section id="skills" class="my-28 px-6 lg:px-16">
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

            <section id="projects" class="my-28 px-6 lg:px-16">
                <h2>Projects i worked on:</h2>
                <div class="mb-16 px-8 py-8 bg-white rounded-3xl" v-for="(project, idx) in projects" :key="idx">
                        <div :class="idx % 2 == 0 ? 'flex flex-col justify-between items-center text-center lg:text-start lg:flex-row':'flex flex-col justify-between items-center text-center lg:text-end lg:flex-row-reverse'">
                            <img :class="idx % 2 == 0 ? 'w-full lg:mr-8 lg:w-5/12' : 'w-full lg:ml-8 lg:w-5/12'" :src="project.image" :alt="project.name">
                            <div class="w-full lg:w-7/12">
                                <h2 class="font-black">{{project.name}}</h2>
                                <div v-html="project.description"></div>
                                <div class="mt-6">
                                    <h3 class="uppercase text-xl underline font-black">Made with :</h3>
                                    <ul :class="idx % 2 == 0 ? 'flex flex-wrap justify-center lg:justify-start':'flex flex-wrap justify-center lg:justify-end'">
                                        <li v-for="(techno, idx) in project.technologies" :key="idx" class="flex flex-col justify-center items-center">
                                            <img width="50" :src="techno.icon" :alt="techno.name">
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-6">
                                    <h3 class="uppercase text-xl underline font-black">Links :</h3>
                                    <div :class="idx % 2 == 0 ? 'flex justify-center lg:justify-start':'flex justify-center lg:justify-end'">
                                        <a v-if="project.webLink !== ''" class="uppercase text-xl font-bold home__link" :href="project.webLink">Live Site</a>
                                        <span v-if="project.webLink !== '' && project.repoLink !== ''" class="mx-4 font-black">|</span>
                                        <a v-if="project.repoLink !== ''" class="uppercase text-xl font-bold home__link" :href="project.repoLink">Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    <a href="" class="my-28  uppercase color-primary font-black underline">
                        <p class="text-2xl w-auto">Check my Githubfor more projects</p>
                    </a> 
            </section>

            <section id="contact" class="my-28 px-6 lg:px-16">
                <h2>Contact Me</h2>
                <div class="flex flex-col items-center lg:items-start lg:flex-row mb-16 px-8 py-8 bg-white rounded-3xl mx-auto">
                    <div class="w-full lg:w-1/2">
                        <form ref="formContact" @submit.prevent="sendMail" class="space-y-8">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-bold">Your email</label>
                                <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@medrhallab.com" required>
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-sm font-bold">Your name</label>
                                <input type="text" id="subject" name="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Med Rhallab" required>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-bold">Your message</label>
                                <textarea id="message" rows="6" name="message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let me know how i can help you" required></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-sm font-bold text-center button flex justify-center items-center" style="width:200px; height:50px;">
                                <svg v-if="(sendingMessage === true)" class="inline mr-2 w-8 h-8 text-white-200 animate-spin dark:text-white-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <div v-else>{{text.buttonSend}}</div>
                            </button>
                        </form>
                    </div>
                    <div class="mt-12 lg:w-1/2 lg:ml-12 lg:mt-0">
                        <p>If you have any more questions, feel free to contact me!</p>
                        <br>
                        <p> I'm available to talk about your project or work and see if we can be a fit for each other!</p>
                        <br>
                        <p>Straight shot to my inbox: <a href="mailto:rhallab.dev@gmail.com" class="home__link -email font-black color-primary">rhallab.dev@gmail.com</a></p>
                    </div>
                </div>
            </section>


        </div>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { scrambleSelector } from '@/static/scripts/Scrambler.js';
import emailjs from 'emailjs-com';

var text = ref({
    header: "A Frontend focused Web Developer who specialize on <VueTyper :text='textTyperHeader' :shuffle=true /> top-notch interactif and responsive front-end websites and applications",
    typerHeader: ['creating', 'building','maintaining'],
    buttonSend: "Send Message"
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
        name: "Django",
        icon: "src/assets/images/skills/django.png"
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
        name: "Wordpress",
        icon: "src/assets/images/skills/wordpress.png"
    },

    {
        name: "Responsive Design",
        icon: "src/assets/images/skills/responsive-design.png"
    },

    {
        name: "Web Accessibility",
        icon: "src/assets/images/skills/web-accessibility.png"
    },

]);
const projects = ref([
    // {
    //     name: "",
    //     description: "",
    //     image: "",
    //     technologies:[
    //         {
    //             name: "",
    //             icon: ""
    //         },
    //     ],
    //     webLink: "",
    //     repoLink:"",
    // },

    {
        name: "Journal de l'assurance",
        description: "<p class='mb-6'>JDA is a nation wide renowed information source for profesionnal in the insurance industrie.</p><p class='mb-6'>With the objectives of transitionning the front-end from Django to a Vue envirement, i worked on optimisation, refractoring and creating multiple new applications and features on the main project.</p><p>From refractoring the dynamic event app to creating a new subscription flow with stripe, this is only the tip of the iceberg.</p>",
        image: "src/assets/images/projects/jda.png",
        technologies:[
                {
                    name: "HTML 5",
                    icon: "src/assets/images/skills/html5.png"
                },

                {
                    name: "CSS 3",
                    icon: "src/assets/images/skills/css3.png"
                },
                {
                    name: "SASS",
                    icon: "src/assets/images/skills/sass.png"
                },
                {
                    name: "JS",
                    icon: "src/assets/images/skills/javascript.png"
                },
                
                {
                    name: "VUEJS",
                    icon: "src/assets/images/skills/vuejs.png"
                },

                {
                    name: "JQUERY",
                    icon: "src/assets/images/skills/jquery.png"
                },

                {
                    name: "DJANGO",
                    icon: "src/assets/images/skills/django.png"
                },

                {
                    name: "RESPONSIVENESS",
                    icon: "src/assets/images/skills/responsive-design.png"
                },

                {
                    name: "Web Accessibility",
                    icon: "src/assets/images/skills/web-accessibility.png"
                },

        ],
        webLink: "https://portail-assurance.ca/",
        repoLink:""
    },

    {
        name: "My personal Portfolio",
        description: "<p class='mb-6'>Well yes, this very website is made by.... ME! Surprise!</p><p class='mb-6'>The website is done with Vue 3, using vitejs. I had some fun using mutiple external js libraries for some cool visuel effects.</p><p class='mb-6'> As for the contact form, i'm using EmailJS to receive the emails from my code.</p> <p class='mb-6'>This website is deployed and hosted with netlify</p>",
        image: "src/assets/images/projects/portfolio.png",
        technologies:[
                {
                    name: "HTML 5",
                    icon: "src/assets/images/skills/html5.png"
                },
                {
                    name: "CSS 3",
                    icon: "src/assets/images/skills/css3.png"
                },
                {
                    name: "SASS",
                    icon: "src/assets/images/skills/sass.png"
                },
                {
                    name: "JS",
                    icon: "src/assets/images/skills/javascript.png"
                },

                {
                    name: "Tailwind",
                    icon: "src/assets/images/skills/tailwind.png"
                },

                {
                    name: "VUEJS",
                    icon: "src/assets/images/skills/vuejs.png"
                },

                {
                    name: "RESPONSIVENESS",
                    icon: "src/assets/images/skills/responsive-design.png"
                },

                {
                    name: "Seo",
                    icon: "src/assets/images/skills/seo.png"
                },

                {
                    name: "Web Accessibility",
                    icon: "src/assets/images/skills/web-accessibility.png"
                },

        ],
        webLink: "#",
        repoLink:"https://github.com/marhallab/portfolio"
    },

    {
        name: "Alfred Technologies",
        description: "<p class='mb-6'>A website which serves as an initial introduction to the alfred management software. We used Vuejs and wordpress as a headless CMS.</p><p>I also added multiple new components created in the website to the UI-Kit used internally.</p>",
        image: "src/assets/images/projects/alfred.png",
        technologies:[
                {
                    name: "HTML 5",
                    icon: "src/assets/images/skills/html5.png"
                },
                {
                    name: "CSS 3",
                    icon: "src/assets/images/skills/css3.png"
                },
                {
                    name: "SASS",
                    icon: "src/assets/images/skills/sass.png"
                },
                {
                    name: "JS",
                    icon: "src/assets/images/skills/javascript.png"
                },
                {
                    name: "VUEJS",
                    icon: "src/assets/images/skills/vuejs.png"
                },
                {
                    name: "RESPONSIVENESS",
                    icon: "src/assets/images/skills/responsive-design.png"
                },

        ],
        webLink: "https://alfredtechnologies.com/",
        repoLink:""
    }
]);
const formContact = ref(null);
var sendingMessage = ref(false);


const sendMail = () => {
        sendingMessage.value = true;
        emailjs.sendForm('service_b8lgk5a', 'template_8bhh8gr', formContact.value, 'CP2MistUV8Pzm9j0s')
        .then(() => {
            sendingMessage.value = false;
            text.value.buttonSend = "Message sent"
        }, () => {
            sendingMessage.value = false;
            text.value.buttonSend = "Message wasn't sent"

        }); 
      };



onMounted(() => {
    scrambleSelector('name','Mohamed Rhallab', 3000);
})

</script>
