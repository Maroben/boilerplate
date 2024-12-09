import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import deCommon from './common/locales/de/common.json'
import frCommon from './common/locales/fr/common.json'
import itCommon from './common/locales/it/common.json'

i18n.use(initReactI18next).init({
  lng: 'de',
  fallbackLng: 'de',
  resources: {
    de: {
      common: deCommon,
    },
    fr: {
      common: frCommon,
    },
    it: {
      common: itCommon,
    },
  },
})
