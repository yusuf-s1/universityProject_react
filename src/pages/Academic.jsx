import React from 'react';
import academic from '../assets/academic.jpeg';
import campus from '../assets/campus.jpg';
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
          <div className="row d-flex align-items-center">
            <div className="col-12 col-sm-6">
              <img
                src={campus}
                className="d-block w-50 mx-auto"
                style={{
                  borderRadius: '1rem',
                }}
              ></img>
            </div>
            <div className="col-12 col-sm-6 p-2">
              <h2 className="text-center">Fakülteler</h2>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <ul className="ms-5">
                    <li>Tıp Fakültesi</li>
                    <li>Tıp Fakültesi</li>
                    <li>Tıp Fakültesi</li>
                    <li>Tıp Fakültesi</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6">
                  <ul className="ms-5">
                    <li>Tıp Fakültesi</li>
                    <li>Tıp Fakültesi</li>
                    <li>Tıp Fakültesi</li>
                    <li>Tıp Fakültesi</li>
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
