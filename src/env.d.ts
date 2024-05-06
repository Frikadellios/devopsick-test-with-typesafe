/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

interface Window {}

interface ImportMetaEnv {
	readonly PUBLIC_API_URL: string
	readonly PUBLIC_GOOGLE_CLIENT_ID: string
	readonly PRIVATE_GOOGLE_SECRET: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

type TODO_ANY = any
