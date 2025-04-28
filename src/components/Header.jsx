import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import brand from '../assets/brand.png';
import LanguageSelector from './language-selector';
import { GrLanguage } from 'react-icons/gr';
export default function Header() {
  const { t } = useTranslation();

  /* const [bg, setBg] = useState(false);
  {
    window.addEventListener('scroll', () => {
      if (scrollY > 56) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  } */

  return (
    <>
      <header
        id="header"
        className="position-sticky sticky-top w-100 t-0 l-0 shadow-sm"
        style={{ zIndex: 99 }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light p-0"
          // className={
          //   bg
          //     ? 'navbar navbar-expand-lg navbar-light bg-light'
          //     : 'navbar navbar-expand-lg navbar-light bg-light bg-transparent'
          // }
        >
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">
              <img
                src={brand}
                width={84}
                height={84}
                style={{ backdropFilter: 'revert' }}
              ></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setBg(!bg);
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/university"
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    {t('university')}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/academic" className="nav-link" href="#">
                    {t('academic')}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t('student')}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/sign" className="dropdown-item" href="#">
                        LMS
                      </Link>
                    </li>
                    <li>
                      <Link to="/sign" className="dropdown-item" href="#">
                        {t('academic')}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <GrLanguage className="text-secondary" />
                </a>
                <div className="dropdown-menu">
                  <LanguageSelector />
                </div>
              </div>
              <form className="d-flex ms-lg-5">
                <input
                  className="form-control me-2 w-100 bg-transparent"
                  type="search"
                  placeholder={t('search')}
                  aria-label="Search"
                />
                <button className="btn btn-outline-success fs-4" type="submit">
                  <CiSearch />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
