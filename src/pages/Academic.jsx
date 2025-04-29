import React from 'react';
import academic from '../assets/academic.jpeg';
import campus from '../assets/campus.jpg';
import carousel2 from '../assets/carousel2.jpg';
export default function Academic() {
  return (
    <>
      <div className="">
        <div className="position-relative">
          <img
            src={academic}
            className="d-block w-100"
            style={{ height: '320px' }}
          ></img>
          <h2 className="position-absolute top-50 translate-y text-center text-light w-100 display-1">
            Akademik
          </h2>
        </div>
        <div className="container-lg mt-5 mx-auto">
          <div className="row d-flex align-items-center mx-0 my-5">
            <div className="col-12 col-sm-6">
              <img
                src={campus}
                className="d-block w-75 mx-auto"
                style={{
                  borderRadius: '1rem',
                }}
              ></img>
            </div>
            <div className="col-12 col-sm-6 p-2">
              <h2 className="text-center text-secondary my-3 mt-sm-0">
                Fakülteler
              </h2>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <ul className="ms-3 d-flex flex-column gap-2">
                    <li>Tıp Fakültesi</li>
                    <li>Sağlık Bilimleri Fakültesi</li>
                    <li>Mühendislik Fakültesi</li>
                    <li>Mimarlık Fakültesi</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6">
                  <ul className="ms-3 d-flex flex-column gap-2">
                    <li>İşletme Fakültesi</li>
                    <li>Güzel Sanatlar Fakültesi</li>
                    <li>Fen Edebiyat Fakültesi</li>
                    <li>Spor Bilimleri Fakültesi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex align-items-center m-0 my-5">
            <div className="col-12 col-sm-6">
              <img
                src={carousel2}
                className="d-block w-75 mx-auto"
                style={{
                  borderRadius: '1rem',
                }}
              ></img>
            </div>
            <div className="col-12 col-sm-6 p-2">
              <h2 className="text-center text-secondary my-3 mt-sm-0">
                Yüksekokullar
              </h2>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <ul className="ms-3 d-flex flex-column gap-2">
                    <li>Yabancı Diller Yüksekokulu</li>
                    <li>Konservatuvar</li>
                    <li>Hemşirelik Yüksekokulu</li>
                    <li>Beden Eğitimi ve Spor Yüksekokulu</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6">
                  <ul className="ms-3 d-flex flex-column gap-2">
                    <li>Meslek Yüksek Okulu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
