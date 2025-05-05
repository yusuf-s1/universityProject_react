import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

export default function Calendar() {
  const { t } = useTranslation();
  const rows = t('academicCalendar.rows', {
    returnObjects: true,
  });
  return (
    <>
      <div className="App container-lg py-4 px-2">
        <h2>{t('academicCalendar.title')}</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>{t('academicCalendar.headers.date')}</th>
              <th>{t('academicCalendar.headers.event')}</th>
              <th>{t('academicCalendar.headers.description')}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.event}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
