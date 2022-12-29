import { en } from './en.js'
import { fr } from './fr.js'
import { createI18n } from 'vue-i18n'

const messages = {
    fr: {
        message: fr
    },
    en: {
        message: en
    }
}

const currentLanguage = () => {
    if (navigator.languages[0].includes("en")) {
        return 'en'
    } else if (navigator.languages[0].includes("fr")) {
        return 'fr'
    }
}

export const i18n = createI18n({
    warnHtmlInMessage: 'off',
    locale: currentLanguage(),
    fallbackLocale: 'en',
    messages,
})