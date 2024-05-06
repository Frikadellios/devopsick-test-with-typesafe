#!/bin/bash

create_json_file() {
    FILE_PATH=$1

    mkdir -p $(dirname "$FILE_PATH")

    echo '{"error": "Oops, something went wrong!", "success": "Success", "seo": { "title": "Astro advanced POC", "description": "Astro advanced POC" }}' > "$FILE_PATH"
}

EN_FILE_PATH="src/i18n/locales/en.json"
RU_FILE_PATH="src/i18n/locales/ru.json"
DE_FILE_PATH="src/i18n/locales/de.json"
NL_FILE_PATH="src/i18n/locales/nl.json"
UK_FILE_PATH="src/i18n/locales/uk.json"
ES_FILE_PATH="src/i18n/locales/es.json"
FR_FILE_PATH="src/i18n/locales/fr.json"


create_json_file "$EN_FILE_PATH"
create_json_file "$RU_FILE_PATH"
create_json_file "$DE_FILE_PATH"
create_json_file "$NL_FILE_PATH"
create_json_file "$UK_FILE_PATH"
create_json_file "$ES_FILE_PATH"
create_json_file "$FR_FILE_PATH"
