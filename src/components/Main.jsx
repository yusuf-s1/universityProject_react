import React from 'react';
import Carousel from './Carousel';

import { IoMdMail } from 'react-icons/io';
import { SiGoogleclassroom } from 'react-icons/si';
import { FaCalendar } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { NewsData } from '../NewsData';

import { useTranslation } from 'react-i18next';

export default function Main() {
  const { t, i18n } = useTranslation();
  const news = NewsData[0];
  return (
    <>
      <div>
        <Carousel />
        <section className="py-4 px-2 bg-light d-flex flex-column justify-content-center align-items-center gap-4 flex-sm-row">
          <a
            href="mailto:/example.com"
            className="card d-flex justify-content-center align-items-center text-secondary"
            style={{
              width: '200px',
              height: '200px',
              textAlign: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <IoMdMail style={{ fontSize: '2rem' }} />
          </a>
          <Link
            to="/sign"
            className="card d-flex justify-content-center align-items-center text-secondary"
            style={{
              width: '200px',
              height: '200px',
              textAlign: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <SiGoogleclassroom style={{ fontSize: '2rem' }} />
          </Link>
          <Link
            to="/calendar"
            className="card d-flex justify-content-center align-items-center text-secondary"
            style={{
              width: '200px',
              height: '200px',
              textAlign: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <FaCalendar style={{ fontSize: '2rem' }} />
          </Link>
        </section>
        <section className="news">
          <div className="container-lg p-5">
            <div className="row py-5">
              <div className="col-12 col-sm-6 d-flex flex-column justify-content-between">
                <h2 className="">{t('kultur')}</h2>
                <Link to="/news" className="btn btn-outline-primary w-25">
                  {t('seeAll')}
                </Link>
              </div>
              <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                <div className="rounded-2 border border-1 p-2 d-flex flex-column justify-content-between p-4">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
