import React from 'react';

import { NewsData } from '../NewsData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NewsList() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="container-lg p-4" style={{ backgroundColor: '' }}>
        <h2 className="text-center d-1">{t('news')}</h2>
        <div className="d-flex py-4 px-2 flex-column flex-sm-row justify-content-center  align-items-center flex-wrap gap-4">
          {NewsData.map((news) => (
            <div
              key={news.id}
              className="rounded-2 border border-1 p-2 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: '',
                width: '240px',
                height: '240px',
              }}
            >
              <h3 className="fs-4 text-center">
                {i18n.language == 'tr' ? news.name : news.name_en}
              </h3>
              <p>
                {i18n.language == 'tr'
                  ? news.description.slice(0, 56) + '...'
                  : news.description_en.slice(0, 56) + '...'}
              </p>
              <Link
                to={`/news/${news.id}`}
                className="btn btn-outline-primary w-50 mx-auto"
                style={{}}
              >
                {t('read')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
