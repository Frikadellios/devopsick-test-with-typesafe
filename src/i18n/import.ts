import en from '@/i18n/locales/en.json'
import ru from '@/i18n/locales/ru.json'
import de from '@/i18n/locales/de.json'
import uk from '@/i18n/locales/uk.json'
import es from '@/i18n/locales/es.json'
import fr from '@/i18n/locales/fr.json'
import nl from '@/i18n/locales/nl.json'

import type { Locales } from '@/i18n/i18n-types'
import type { BaseTranslation } from 'typesafe-i18n'
import {
	storeTranslationToDisk,
	type ImportLocaleMapping
} from 'typesafe-i18n/importer'


const getDataFromAPI = async (_locale: Locales): Promise<BaseTranslation> => {
	// custom implementation to fetch the data from a service
	switch (_locale) {
		case 'ru':
			return ru
        case 'uk':
            return uk
        case 'de':
			return de
        case 'es':
			return es
        case 'fr':
            return fr
        case 'nl':
			return nl
            
		default:
			return en
	}
}

const importTranslationsForLocale = async (locale: Locales) => {
	const translations = await getDataFromAPI(locale)

	const localeMapping: ImportLocaleMapping = {
		locale,
		translations
	}

	const result = await storeTranslationToDisk(localeMapping)

	console.log(`translations imported for locale '${result}'`)
}

for (const locale of ['en', 'nl', 'de', 'es', 'fr', 'ru', 'uk'] as Locales[]) {
	importTranslationsForLocale(locale)
}