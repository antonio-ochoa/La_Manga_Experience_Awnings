import enIndex from '@i18n/en/index.json';
import deIndex from '@i18n/de/index.json';
import frIndex from '@i18n/fr/index.json';

import enLegal from '@i18n/en/legal.json';
import deLegal from '@i18n/de/legal.json';
import frLegal from '@i18n/fr/legal.json';


const supportedLanguages = ["en", "de", "fr"];
const defaultLanguage = "en";

type I18nSection = "index" | "legal";
type Translations = {
    [key in I18nSection]: any;
};

const translations: Record<string, Translations> = {
    en: {
        index: enIndex,
        legal: enLegal
    },
    de: {
        index: deIndex,
        legal: deLegal
    },
    fr: {
        index: frIndex,
        legal: frLegal
    }
};

export const getI18N = ({ currentLocale }: { currentLocale: string | undefined }, section: I18nSection) => {
    if (currentLocale && supportedLanguages.includes(currentLocale)) {
        return translations[currentLocale][section];
    }
    return translations[defaultLanguage][section];
};