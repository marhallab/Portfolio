<template>
    <main class="w-full">
        <div class="home page">
            <section id="first" class="text-center flex flex-col px-8 lg:text-start lg:flex-row justify-center items-center h-screen lg:px-16" style="min-height:800px;">
                <img width="300" class="rounded-full home__portrait" src="/images/me.jpg" alt="">
                <div class="lg:ml-28">
                    <div id="text" class="font-black text-3xl whitespace-nowrap m-0 inline-block color-primary my-8 mt-16 lg:w-72 lg:text-5xl uppercase ">MOHAMED RHALLAB</div>
                    <div class="max-w-3xl h-52 text-2xl md:h-fit">{{ $t("message.uvp1") }} <VueTyper class="home__headertext" :text='text.typerHeader' :pre-erase-delay=3000 /> {{ $t("message.uvp2") }}</div>
                       <div class="flex flex-col justify-center items-center md:mt-6 md:flex-row  lg:justify-start">
                        <div class="flex">
                            <a :href=" isEn ? '/cvs/cv-en-medrhallab.pdf' : '/cvs/cv-fr-medrhallab.pdf'" target="_blank" class="button">{{ $t("message.resume") }}</a>
                            <router-link to="#contact" class="ml-4 button">
                                {{ $t("message.contact") }}
                            </router-link>
                        </div>
                        <div class="md:ml-12 flex">
                            <a href="https://github.com/marhallab" target="_blank" rel="noopener noreferrer">
                                <img width="65" src="/images/socials/github.png" alt="Github logo">
                            </a>
                            <a href="https://www.linkedin.com/in/marhallab/" target="_blank" rel="noopener noreferrer">
                                <img class="ml-4" width="65" src="/images/socials/linkedin.png" alt="Linkedin Logo">
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="my-28 px-6 lg:px-16">
                <h2 id="test">{{ $t("message.aboutMe") }}</h2>
                <div class="px-8 py-8 bg-white rounded-3xl" v-html="$t('message.aboutSection')"></div>
            </section>

            <section id="skills" class="my-28 px-6 lg:px-16">
                <h2>{{$t('message.mySkills')}}</h2>
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
                <h2>{{$t('message.myProjects')}}</h2>
                <div class="mb-16 px-8 py-8 bg-white rounded-3xl" v-for="(project, idx) in projects" :key="idx">
                        <div :class="idx % 2 == 0 ? 'flex flex-col justify-between items-center text-center lg:text-start lg:flex-row':'flex flex-col justify-between items-center text-center lg:text-end lg:flex-row-reverse'">
                            <img :class="idx % 2 == 0 ? 'w-full lg:mr-8 lg:w-5/12' : 'w-full lg:ml-8 lg:w-5/12'" :src="project.image" :alt="project.name">
                            <div class="w-full lg:w-7/12">
                                <h2 class="font-black">{{project.name}}</h2>
                                <div v-html="project.description"></div>
                                <div class="mt-6">
                                    <h3 class="uppercase text-xl underline font-black">{{$t('message.madeWith')}}</h3>
                                    <ul :class="idx % 2 == 0 ? 'flex flex-wrap justify-center lg:justify-start':'flex flex-wrap justify-center lg:justify-end'">
                                        <li v-for="(techno, idx) in project.technologies" :key="idx" class="flex flex-col justify-center items-center">
                                            <img width="50" :src="techno.icon" :alt="techno.name">
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-6">
                                    <h3 class="uppercase text-xl underline font-black">{{$t('message.links')}}</h3>
                                    <div :class="idx % 2 == 0 ? 'flex justify-center lg:justify-start':'flex justify-center lg:justify-end'">
                                        <a v-if="project.webLink !== ''" class="uppercase text-xl font-bold home__link" :href="project.webLink" target="_blank" rel="noopener noreferrer">{{$t('message.liveSite')}}</a>
                                        <span v-if="project.webLink !== '' && project.repoLink !== ''" class="mx-4 font-black">|</span>
                                        <a v-if="project.repoLink !== ''" class="uppercase text-xl font-bold home__link" :href="project.repoLink" target="_blank" rel="noopener noreferrer">{{$t('message.repo')}}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="mb-28 text-center">
                    <a href="https://github.com/marhallab" class="text-2xl w-auto uppercase color-primary font-black underline" target="_blank" rel="noopener noreferrer">
                        {{$t('message.checkGitHub')}}
                    </a> 
                </div>
            </section>

            <section id="contact" class="my-28 px-6 lg:px-16">
                <h2>{{$t('message.contactMe')}}</h2>
                <div class="flex flex-col items-center lg:items-start lg:flex-row mb-16 px-8 py-8 bg-white rounded-3xl mx-auto">
                    <div class="w-full lg:w-1/2">
                        <form ref="formContact" @submit.prevent="sendMail" class="space-y-8">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-bold">{{$t('message.yourEmail')}}</label>
                                <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@medrhallab.com" required>
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-sm font-bold">{{$t('message.yourName')}}</label>
                                <input type="text" id="subject" name="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Med Rhallab" required>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-bold">{{$t('message.yourMessage')}}</label>
                                <textarea id="message" rows="6" name="message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let me know how i can help you" required></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-sm font-bold text-center button flex justify-center items-center" style="width:200px; height:50px;">
                                <svg v-if="(sendingMessage === true)" class="inline mr-2 w-8 h-8 text-white-200 animate-spin dark:text-white-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <div v-else>{{text.buttonSend}}</div>
                            </button>
                        </form>
                    </div>
                    <div class="mt-12 lg:w-1/2 lg:ml-12 lg:mt-0" v-html="$t('message.contactSection')"></div>
                </div>
            </section>


        </div>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { scrambleSelector } from '@/static/scripts/Scrambler.js';
import { mySkills } from '@/static/scripts/Skills.js' 
import { myProjects } from '@/static/scripts/Projects.js' 

import emailjs from 'emailjs-com';


var isEn = navigator.languages[0].includes("en");

var text = ref({
    typerHeader: isEn ? ['creating', 'building','maintaining'] : ['création','construction','maintenance'],
    buttonSend: isEn ? "Send Message" : "Envoyer le message",
});

const skills = ref(mySkills);

const projects = ref(myProjects);


var sendingMessage = ref(false);
const formContact = ref(null);
const sendMail = () => {
        sendingMessage.value = true;
        emailjs.sendForm('service_b8lgk5a', 'template_8bhh8gr', formContact.value, 'CP2MistUV8Pzm9j0s')
        .then(() => {
            sendingMessage.value = false;
            text.value.buttonSend = isEn ? "Message sent" : "Message envoyé"
        }, () => {
            sendingMessage.value = false;
            text.value.buttonSend = isEn ? "Message wasn't sent" : "Le message n'a pas été envoyé"

        }); 
      };



onMounted(() => {
    scrambleSelector('name','Mohamed Rhallab', 3000);
})

</script>
