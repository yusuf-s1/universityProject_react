import React from 'react';
import {
  SlSocialLinkedin,
  SlSocialYoutube,
  SlSocialInstagram,
} from 'react-icons/sl';

import { useTranslation } from 'react-i18next';

import brand from '../assets/brand.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="container-fluid bg-light w-100">
        <div>
          <div className="d-flex justify-content-between align-items-center gap-4 p-4">
            <div className="d-sm-flex align-items-center">
              <img src={brand} width={120} height={120}></img>
              <div className="">
                <address> No: 123 Levent Mahallesi Beşiktaş / İstanbul</address>
                <p>&copy; 2025 {t('copy')}</p>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-4 bg-light p-4">
              <a href="#" className="fs-3 text-black">
                <SlSocialLinkedin />
              </a>
              <a href="#" className="fs-3 text-danger">
                <SlSocialYoutube />
              </a>
              <a href="#" className="fs-3 text-black">
                <SlSocialInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
