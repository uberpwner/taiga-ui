import {Language} from '@taiga-ui/i18n/interfaces';
import {TUI_VIETNAMESE_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_VIETNAMESE_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_VIETNAMESE_LANGUAGE_CORE} from './core';
import {TUI_VIETNAMESE_LANGUAGE_KIT} from './kit';

export const TUI_VIETNAMESE_LANGUAGE: Language = {
    ...TUI_VIETNAMESE_LANGUAGE_CORE,
    ...TUI_VIETNAMESE_LANGUAGE_KIT,
    ...TUI_VIETNAMESE_LANGUAGE_ADDON_TABLE,
    ...TUI_VIETNAMESE_LANGUAGE_ADDON_COMMERCE,
};
