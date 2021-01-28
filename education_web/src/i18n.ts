import { GlobalStorage } from './utils/custom-storage';
import {get, isEmpty} from 'lodash';
import en from './i18n/en';
import fr from './i18n/fr';

export const BUILD_VERSION = process.env.REACT_APP_BUILD_VERSION as string;

export const t = (name: string, options?: any): string => {
  const lang = GlobalStorage.getLanguage().match(/fr/) ? fr : en;
  let content = get(lang, name, null);
  if (!content) {
    console.error(`${lang}: ${name} has no match`);
    return `${lang}.${name}`;
  }

  if (!isEmpty(options)) {
    if (options.reason && content.match(/\{.+\}/)) {
      content = content.replace(/\{.+\}/, options.reason);
    }
  }

  return content;
}