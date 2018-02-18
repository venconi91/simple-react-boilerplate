import de from './de';
import en from './en';

const availableLocales = {
    de,
    en
}

const defaultLocale = availableLocales.en;

const getLocalizedLabels = (locale) => {
    if (!locale) {
        return defaultLocale;
    }
    let localizedLabels = availableLocales[locale] || defaultLocale;
    return localizedLabels;
}

export default getLocalizedLabels;