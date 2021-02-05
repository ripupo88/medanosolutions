import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            SelectLang: 'Select language',
            Home: 'Home',
            About: 'About',
            Language: 'Language',
            Loading: 'Loading',
            Search: 'Search Pokemon',
            AboutText:
                'This is a website specialized in Pokémon. Here you can find all the information about those wonderful creatures of fiction.',
        },
    },
    es: {
        translation: {
            SelectLang: 'Seleccione idioma',
            Home: 'Inicio',
            About: 'Nosotros',
            Language: 'Idioma',
            Loading: 'Cargando',
            Search: 'Buscar Pokémon',
            AboutText:
                'Esta es una web especializada en Pokémon. Aquí podrás encontrar toda la información sobre esas maravillosas criaturas de ficción.',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'es',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
