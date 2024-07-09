import enIndex from '@i18n/en/index.json';
import deIndex from '@i18n/de/index.json';
import frIndex from '@i18n/fr/index.json';

import enLegal from '@i18n/en/legal.json';
import deLegal from '@i18n/de/legal.json';
import frLegal from '@i18n/fr/legal.json';

import enAwningsStraightPoint from "@i18n/en/awnings/straight-point.json";
import deAwningsStraightPoint from "@i18n/de/awnings/straight-point.json";
import frAwningsStraightPoint from "@i18n/fr/awnings/straight-point.json";

import enAwningsBoxed from "@i18n/en/awnings/boxed.json";
import deAwningsBoxed from "@i18n/de/awnings/boxed.json";
import frAwningsBoxed from "@i18n/fr/awnings/boxed.json";

import enAwningsBlind from "@i18n/en/awnings/blind.json";
import deAwningsBlind from "@i18n/de/awnings/blind.json";
import frAwningsBlind from "@i18n/fr/awnings/blind.json";

import enAwningsRetractable from "@i18n/en/awnings/retractable.json";
import deAwningsRetractable from "@i18n/de/awnings/retractable.json";
import frAwningsRetractable from "@i18n/fr/awnings/retractable.json";

import enAwningsShadeSail from "@i18n/en/awnings/shade-sail.json";
import deAwningsShadeSail from "@i18n/de/awnings/shade-sail.json";
import frAwningsShadeSail from "@i18n/fr/awnings/shade-sail.json";

import enAwningsStor from "@i18n/en/awnings/stor.json";
import deAwningsStor from "@i18n/de/awnings/stor.json";
import frAwningsStor from "@i18n/fr/awnings/stor.json";

import enAwningsVeranda from "@i18n/en/awnings/veranda.json";
import deAwningsVeranda from "@i18n/de/awnings/veranda.json";
import frAwningsVeranda from "@i18n/fr/awnings/veranda.json";


import enPergolasBioclimatic from "@i18n/en/pergolas/bioclimatic.json";
import dePergolasBioclimatic from "@i18n/de/pergolas/bioclimatic.json";
import frPergolasBioclimatic from "@i18n/fr/pergolas/bioclimatic.json";


const supportedLanguages = ["en", "de", "fr"];
const defaultLanguage = "en";

type I18nSection = 
    | "index" 
    | "legal" 
    | "awning-straight-point" 
    | "awning-boxed"
    | "awning-blind"
    | "awning-retractable"
    | "awning-shade-sail"
    | "awning-stor"
    | "awning-veranda"
    | "pergola-bioclimatic"

type Translations = {
    [key in I18nSection]: any;
};

const translations: Record<string, Translations> = {
    en: {
        index: enIndex,
        legal: enLegal,
        "awning-straight-point": enAwningsStraightPoint,
        "awning-boxed": enAwningsBoxed,
        "awning-blind": enAwningsBlind,
        "awning-retractable": enAwningsRetractable,
        "awning-shade-sail": enAwningsShadeSail,
        "awning-stor": enAwningsStor,
        "awning-veranda": enAwningsVeranda,
        "pergola-bioclimatic": enPergolasBioclimatic
    },
    de: {
        index: deIndex,
        legal: deLegal,
        "awning-straight-point": deAwningsStraightPoint,
        "awning-boxed": deAwningsBoxed,
        "awning-blind": deAwningsBlind,
        "awning-retractable": deAwningsRetractable,
        "awning-shade-sail": deAwningsShadeSail,
        "awning-stor": deAwningsStor,
        "awning-veranda": deAwningsVeranda,
        "pergola-bioclimatic": dePergolasBioclimatic
    },
    fr: {
        index: frIndex,
        legal: frLegal,
        "awning-straight-point": frAwningsStraightPoint,
        "awning-boxed": frAwningsBoxed,
        "awning-blind": frAwningsBlind,
        "awning-retractable": frAwningsRetractable,
        "awning-shade-sail": frAwningsShadeSail,
        "awning-stor": frAwningsStor,
        "awning-veranda": frAwningsVeranda,
        "pergola-bioclimatic": frPergolasBioclimatic
    }
};

export const getI18N = ({ currentLocale }: { currentLocale: string | undefined }, section: I18nSection) => {
    if (currentLocale && supportedLanguages.includes(currentLocale)) {
        return translations[currentLocale][section];
    }
    return translations[defaultLanguage][section];
};