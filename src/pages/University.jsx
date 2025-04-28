import React from 'react';
import { useTranslation } from 'react-i18next';

export default function University() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className=""
        style={{
          height: '720px',
          padding: '1.5rem .25rem',
          margin: '5rem auto',
        }}
      >
        <div
          class="container-fluid d-flex flex-column align-items-center"
          style={{ maxWidth: '960px' }}
        >
          <div
            class="nav nav-tabs flex-row nav-pills me-3 mb-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              {t('mutevelli')}
            </button>
            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              {t('tarihce')}
            </button>
            <button
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              {t('kvkk')}
            </button>
          </div>
          <div class="tab-content container-sm mt-5" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">{t('isim')}</th>
                    <th scope="col">{t('gorev')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mustafa Naci</td>
                    <td>{t('baskan')}</td>
                  </tr>
                  <tr>
                    <td>Prof. Dr. Nihat ULU</td>
                    <td>{t('rektor')}</td>
                  </tr>
                  <tr>
                    <td>Bilal AYDAN</td>
                    <td>{t('baskan2')}</td>
                  </tr>
                  <tr>
                    <td>Mehmet GEYİK</td>
                    <td>{t('uye')}</td>
                  </tr>
                  <tr>
                    <td>Yusuf Volkan</td>
                    <td>{t('uye')}</td>
                  </tr>
                  <tr>
                    <td>Mert GÖRÜ</td>
                    <td>{t('uye')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <h2 className="text-center mb-4">{t('tarihce')}</h2>
              <p className="fs-5">{t('tarihcePara')}</p>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <h2 className="text-center mb-4">{t('kvkk')}</h2>
              <p className="fs-5">{t('kvkkPara')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
