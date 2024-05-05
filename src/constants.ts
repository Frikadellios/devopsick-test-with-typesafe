// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const TOKEN = "token";
export const PROTECTED_ROUTES = ["/en/secret", "/ru/secret", "/es/secret", "/uk/secret", "/nl/secret", "/de/secret", "/fr/secret"];
import type {
    LicenseConfig,
    NavBarConfig,
    ProfileConfig,
    SiteConfig,
  } from './types/site.config'
  import { LinkPreset } from './types/site.config'
  
  export const SITE_URL: string = 'https://devopsick.com'
  export const SITE_TITLE: string = 'Devopsick Blog'
  export const SITE_DESCRIPTION: string = 'Welcome to my website!'
  export const pagination = {
      postsPerPage: 12,
    }
  export const siteThemeColor = '#000000'
  export const DEFAULT_LOCALE = 'en'
  export const LOCALES = {
    en: 'en', // the `defaultLocale` value must present in `locales` keys
    fr: 'fr',
    es: 'es',
    ru: 'ru',
    uk: 'uk',
    de: 'de',
    nl: 'nl',
  }
  
  
  export const siteConfig: SiteConfig = {
    title: SITE_TITLE,
    subtitle: SITE_DESCRIPTION,
    lang: DEFAULT_LOCALE, // 'en', 'zh_CN', 'zh_TW', 'ja'
    themeColor: {
      hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
      fixed: false, // Hide the theme color picker for visitors
    },
    banner: {
      enable: false,
      src: 'assets/trancperent.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    },
    favicon: [ // Leave this array empty to use the default favicon
      // {
      //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
      //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
      // }
    ],
    author: '',
    description: SITE_DESCRIPTION,
    ogLocale: '',
    shareMessage: '',
    paginationSize: 0
  }
  
  export const navBarConfig: NavBarConfig = {
    links: [
      LinkPreset.Home,
      LinkPreset.Archive,
      LinkPreset.About,
      {
        name: 'GitHub',
        url: 'https://github.com/',     // Internal links should not include the base path, as it is automatically added
        external: true,                               // Show an external link icon and will open in a new tab
      },
    ],
  }
  
  export const profileConfig: ProfileConfig = {
    avatar: '',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: 'Lorem Ipsum',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    links: [
      {
        name: 'Twitter',
        icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                          // You will need to install the corresponding icon set if it's not already included
                                          // `pnpm add @iconify-json/<icon-set-name>`
        url: 'https://twitter.com',
      },
      {
        name: 'Steam',
        icon: 'fa6-brands:steam',
        url: 'https://example.com',
      },
      {
        name: 'GitHub',
        icon: 'fa6-brands:github',
        url: 'https://github.com/',
      },
    ],
  }
  
  export const licenseConfig: LicenseConfig = {
    enable: true,
    name: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  }
  