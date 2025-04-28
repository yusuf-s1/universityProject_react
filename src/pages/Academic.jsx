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
        <div className="container container-fluid d-flex flex-wrap mt-5">
          <div className="col-12 col-sm-6">
            <img
              src={campus}
              className="d-block w-100"
              style={{ borderRadius: '1rem' }}
            ></img>
          </div>
          <div className="col-12 col-sm-6 p-2">
            <h2 className="text-center">Fakülteler</h2>
            <div className="">
              <ul className="list-style-none">
                <li>Tıp Fakültesi</li>
                <li>Tıp Fakültesi</li>
                <li>Tıp Fakültesi</li>
                <li>Tıp Fakültesi</li>
                <li>Tıp Fakültesi</li>
                <li>Tıp Fakültesi</li>
                <li>Tıp Fakültesi</li>
                <li>Tıp Fakültesi</li>
              </ul>
            </div>
          </div>
          <div class="container-fluid mx-auto">
            <div class="row">
              <div class="col-12 col-sm-3">.col-6 .col-sm-3</div>
              <div class="col-12 col-sm-3">.col-6 .col-sm-3</div>
              <div class="col-12 col-sm-3">.col-6 .col-sm-3</div>
              <div class="col-12 col-sm-3">.col-6 .col-sm-3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
