import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default Link;

export function useJuJiuT() {
  return useTranslations('Index');
}