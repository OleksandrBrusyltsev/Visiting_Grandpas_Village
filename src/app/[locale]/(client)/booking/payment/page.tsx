import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link'
import React from 'react'


export default function Page() {
  const locale = useLocale();
  const t = useTranslations('Breadcrumbs');
  return (
    <div className='container'>
      <h1 style={{
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
      }}>Сторінка {t('payment')}</h1>
      <div>
        <Link href={`/${locale}/booking/rules`}>{t('rules')}</Link>
      </div>
    </div>
  )
}