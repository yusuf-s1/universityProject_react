import React from 'react';

import { NewsData } from '../NewsData';

import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export default function News() {
  const { i18n } = useTranslation();
  const { id } = useParams();
  return (
    <>
      <div
        className="container-lg d-grid justify-content-center align-items-center"
        style={{ height: '75vh' }}
      >
        <div className="p-2" style={{ maxWidth: '76ch', margin: '0 auto' }}>
          <h1 className="m-4">
            {i18n.language == 'tr'
              ? NewsData[id - 1].name
              : NewsData[id - 1].name_en}
          </h1>
          <p>
            {i18n.language == 'tr'
              ? NewsData[id - 1].description
              : NewsData[id - 1].description_en}
          </p>
        </div>
      </div>
    </>
  );
}
