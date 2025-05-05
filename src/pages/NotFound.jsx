import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div
        className="d-flex flex-column gap-4 justify-content-center align-items-center justify-content-center"
        style={{ height: '75vh' }}
      >
        <h1>Girdiğiniz adres geçersiz</h1>
        <Link to="/">Ana Sayfaya Dön</Link>
      </div>
    </>
  );
}
