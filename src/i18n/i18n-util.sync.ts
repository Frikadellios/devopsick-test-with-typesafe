// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters.js'
import type { Locales, Translations } from './i18n-types.js'
import { loadedFormatters, loadedLocales, locales } from './i18n-util.js'

import de from './de'
import en from './en'
import es from './es'
import fr from './fr'
import nl from './nl'
import ru from './ru'
import uk from './uk'

const localeTranslations = {
  de,
  en,
  es,
  fr,
  nl,
  ru,
  uk,
}

export const loadLocale = (locale: Locales): void => {
  if (loadedLocales[locale]) return

  loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
  loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void =>
  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
  void (loadedFormatters[locale] = initFormatters(locale))
